'use strict'
const store = require('../store')
const config = require('../config')

// API call to create a new game for signed in user.
const createGame = (data) => {
  // console.log('data is:', data)
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data: ''
  })
}

// API call to update game with player move.
const playerMove = (index, currentPlayer) => {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': index,
          'value': currentPlayer
        }
      }
    }
  })
}

// API call to update the game status after game is over.
const gameOver = () => {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'over': true
      }
    }
  })
}

// API call to get history of played games by a registered user.
const getGames = (data) => {
//  console.log('data is:', data)
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data: ''
  })
}

module.exports = {
  createGame,
  playerMove,
  gameOver,
  getGames
}
