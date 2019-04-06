'use strict'
const store = require('../store')
const config = require('../config')

const createGame = function (data) {
//  console.log('data is:', data)
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data: ''
  })
}

const playerMove = function (index, currentPlayer) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.gameId,
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

const gameOver = () => {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.gameId,
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

module.exports = {
  createGame,
  playerMove,
  gameOver
}
