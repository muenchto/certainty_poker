import React from "react";
import { QuestionRound, Game, BettingRound } from "../../../interfaces";
import ActionButtons, { ActionButtonsProps } from "../ActionButtons";
import Pot from "../Pot";

import "./styles.scss";

type StartGame = ({
  variables: { gameId },
}: {
  variables: { gameId: Game["id"] };
}) => void;

interface FooterProps extends Omit<ActionButtonsProps, "currentQuestionRound"> {
  startGame: StartGame;
  currentQuestionRound?: QuestionRound;
  currentBettingRound?: BettingRound;
}

export default ({
  game,
  currentQuestionRound,
  currentBettingRound,
  playerId,
  placeBet,
  startGame,
}: FooterProps) => {
  return (
    <div className="footer">
      <div className="footer-content">
        {!game.questionRounds.length && (
          <button
            className="btn btn-lg btn-primary mt-auto mx-5"
            disabled={game.players.length <= 1}
            onClick={() => {
              startGame({
                variables: { gameId: game.id },
              });
            }}
          >
            Start Game
          </button>
        )}
        {currentQuestionRound && currentBettingRound && (
          <>
            <Pot
              playerId={playerId}
              currentQuestionRound={currentQuestionRound}
              currentBettingRound={currentBettingRound}
            />
            <ActionButtons
              {...{
                game,
                currentQuestionRound,
                currentBettingRound,
                placeBet,
                playerId,
              }}
            />
          </>
        )}
      </div>
    </div>
  );
};