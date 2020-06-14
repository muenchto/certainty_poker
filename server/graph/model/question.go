package model

import (
	"os"
	"io/ioutil"
	"math/rand"
	"time"
	"encoding/json"
	"fmt"

	// "github.com/alexhans1/certainty_poker/helpers"
)

// func NewQuestion(question string, answer float64, hints []string) *Question {
// 	q := new(Question)
//
// 	q.Question = question
// 	q.Answer = answer
// 	q.Hints = hints
// 	q.ID = helpers.CreateID()
//
// 	return q
// }

func RandomQuestion(skipQuestions[]*Question) *Question {
	pwd, _ := os.Getwd()
	questionsFile, err := os.Open(pwd + "/helpers/questions.json")
	if (err != nil) {
		fmt.Println(err)
	}
	defer questionsFile.Close()
	byteValue, _ := ioutil.ReadAll(questionsFile)
	fmt.Println(byteValue)
	var questions []*Question
	json.Unmarshal(byteValue, &questions)
	fmt.Println("***************")
	fmt.Println(questions)
	rand.Seed(time.Now().UnixNano())
	randomIndex := rand.Intn(len(questions))
	randomQuestion := questions[randomIndex]

	if (ContainsQuestion(skipQuestions, randomQuestion)) {
		return RandomQuestion(skipQuestions)
	}

	return randomQuestion
}

func ContainsQuestion(questions []*Question, question *Question) bool {
	for _, q := range questions {
		if q == question {
			return true
		}
	}

	return false
}
