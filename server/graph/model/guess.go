package model

import {
	"strings"
	"github.com/umahmood/haversine"
	"github.com/alexhans1/certainty_poker/helpers"
}

// GetGeoDistance returns the distance between the geo guess and answer
func (g *Guess) GetGeoDistance(a *Answer) float64 {
	guessCoord := haversine.Coord{Lat: g.Guess.Geo.Latitude, Lon: g.Guess.Geo.Longitude}
	answerCoord := haversine.Coord{Lat: a.Geo.Latitude, Lon: a.Geo.Longitude}
	_, km := haversine.Distance(guessCoord, answerCoord)
	g.Difference = &km
	return km
}

// GetOrderDeviation returns deviation score between guess and answer order
func (g *Guess) GetOrderDeviation(a *Answer) int {
	deviation := 0

	for index, item := range(strings.Split(a.Order, ";")) {
		deviation += helpers.IntAbs(helpers.SliceStringIndex(g.Guess.Order, item) - index)
	}

	return deviation
}