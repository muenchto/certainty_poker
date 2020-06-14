package model

import (
	"errors"
	"math"
	"sort"
	
	"github.com/alexhans1/certainty_poker/helpers"
)

// CurrentBettingRound returns the last element of the game's QuestionRounds slice
func (q *QuestionRound) CurrentBettingRound() *BettingRound {
	return q.BettingRounds[len(q.BettingRounds)-1]
}

func (q *QuestionRound) guessDeviation(playerID string) (float64, error) {
	for _, guess := range q.Guesses {
		if guess.PlayerID == playerID {
			return math.Abs(q.Question.Answer - guess.Guess), nil
		}
	}
	return -1.0, errors.New("player not found in QuestionRound")
}

func (q *QuestionRound) playerBets() map[string]int {
	m := make(map[string]int)
	for _, bettingRound := range q.BettingRounds {
		for _, bet := range bettingRound.Bets {
			if _, ok := m[bet.PlayerID]; ok {
				m[bet.PlayerID] += bet.Amount
			} else {
				m[bet.PlayerID] = bet.Amount
			}
		}
	}

	return m
}

func (q *QuestionRound) Rank() [][]string {
	ranks := make([][]string, 0)
	activePlayers := q.Game.ActivePlayers()

	if len(activePlayers) == 1 {
		return [][]string{{activePlayers[0].ID}}
	}

	sort.Slice(activePlayers, func(i, j int) bool {
		a, _ := q.guessDeviation(activePlayers[i].ID)
		b, _ := q.guessDeviation(activePlayers[j].ID)
		return a < b
	})

	for _, player := range activePlayers {
		currentDeviation, _ := q.guessDeviation(player.ID)

		if (len(ranks) == 0) {
			ranks = append(ranks, []string{player.ID})
		} else {
			previousDeviation, _ := q.guessDeviation(ranks[len(ranks)-1][0])

			if (previousDeviation == currentDeviation) {
				ranks[len(ranks)-1] = append(ranks[len(ranks)-1], player.ID)
			} else {
				newRank := []string{player.ID}
				ranks = append(ranks, newRank)
			}
	  }
  }

	return ranks
}

// DistributePot determines winner(s), allocates money accordingly
func (q *QuestionRound) DistributePot() int {
	playerBets := q.playerBets()
	rank := q.Rank()
	maxBet, _ := helpers.MaxValueMapStringInt(playerBets, make([]string, 0))

	for maxBet > 0 {
		for len(rank[0]) > 0 {  // while still unsatisfied winners left
			betSize, _ := helpers.MinValueMapStringInt(playerBets, rank[0])
			sidePot := 0

			// Determine size of side pot
			for playerID, amount := range playerBets {
				contributionToSidePot, _ := helpers.MinInt([]int{amount, betSize})
				playerBets[playerID] = amount - contributionToSidePot

				sidePot += contributionToSidePot
			}
			potShare := sidePot / len(rank[0])

			// Distribute money to winners, remove satisfied winners
			unsatisifiedWinnerIDs := make([]string, 0)
			for _, winnerID := range rank[0] {
				winner := FindPlayer(q.Game.Players, winnerID)
				winner.Money += potShare
				if playerBets[winnerID] > 0 {
					unsatisifiedWinnerIDs = append(unsatisifiedWinnerIDs, winnerID)
				}
			}

			rank[0] = unsatisifiedWinnerIDs
		}
		rank = rank[1:]
		maxBet, _ = helpers.MaxValueMapStringInt(playerBets, make([]string, 0))
	}
	return maxBet
}

// Fold adds a player to the FoldedPlayerId List of the question round
func (q *QuestionRound) Fold(playerID string) {
	if !helpers.ContainsString(q.FoldedPlayerIds, playerID) {
		q.FoldedPlayerIds = append(q.FoldedPlayerIds, playerID)
	}
}

// IsFinished returns true if the current betting round is finished and all hints are already revealed
func (q *QuestionRound) IsFinished() bool {
	activePlayers := q.Game.ActivePlayers()
	if len(activePlayers) <= 1 {
		return true
	}
	if len(q.BettingRounds) > len(q.Question.Hints) {
		return q.CurrentBettingRound().IsFinished()
	}
	return false
}

// AddNewBettingRound adds a new betting round
func (q *QuestionRound) AddNewBettingRound() {
	newBettingRound := &BettingRound{
		Bets:          make([]*Bet, 0),
		CurrentPlayer: nil,
		QuestionRound: q,
	}

	newBettingRound.Start()

	q.BettingRounds = append(q.BettingRounds, newBettingRound)
}

// PlaceBlinds places the small and big blind of the QR
func (q *QuestionRound) PlaceBlinds() {
	dealer := q.Game.Dealer()
	q.CurrentBettingRound().AddBet(&Bet{
		PlayerID: dealer.FindNextInPlayer().ID,
		Amount:   5,
	})
	q.CurrentBettingRound().AddBet(&Bet{
		PlayerID: dealer.FindNextInPlayer().FindNextInPlayer().ID,
		Amount:   10,
	})
}

// AddGuess adds to the guesses slice of the question round
func (q *QuestionRound) AddGuess(guess Guess) error {
	player := FindPlayer(q.Game.InPlayers(), guess.PlayerID)
	if player == nil {
		return errors.New("player is no longer in game")
	}
	for _, g := range q.Guesses {
		if guess.PlayerID == g.PlayerID {
			return errors.New("player has already placed a guess for this question")
		}
	}
	q.Guesses = append(q.Guesses, &guess)
	return nil
}
