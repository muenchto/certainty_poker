package graph

//go:generate go run github.com/99designs/gqlgen

import (
	"os"
	"sync"

	"github.com/alexhans1/certainty_poker/graph/generated"
	"github.com/alexhans1/certainty_poker/graph/model"
	"github.com/go-redis/redis"
	"github.com/sirupsen/logrus"
)

// This file will not be regenerated automatically.
//
// It serves as dependency injection for your app, add any dependencies you require here.

type Resolver struct {
	games        map[string]*model.Game
	gameChannels map[string]map[string]chan *model.Game
	mutex        sync.Mutex
	redisClient  *redis.Client
	logger       *logrus.Logger
}

func NewResolver() generated.Config {
	// logger
	var log = logrus.New()

	// redis client
	redisClient := redis.NewClient(&redis.Options{
		Addr:     os.Getenv("REDISCLOUD_URL"),
		Password: os.Getenv("REDISCLOUD_PASSWORD"),
		DB:       0,
	})

	pong, err := redisClient.Ping().Result()
	log.Println(pong, err)

	log.SetFormatter(&logrus.JSONFormatter{})

	return generated.Config{
		Resolvers: &Resolver{
			games:        map[string]*model.Game{},
			gameChannels: map[string]map[string]chan *model.Game{},
			mutex:        sync.Mutex{},
			redisClient:  redisClient,
			logger:       log,
		},
	}
}

func updateGameChannel(r *mutationResolver, game *model.Game) {
	r.mutex.Lock()
	for gameID, channels := range r.gameChannels {
		if gameID == game.ID {
			for _, gameChannel := range channels {
				gameChannel <- game
			}
		}
	}
	r.mutex.Unlock()
}
