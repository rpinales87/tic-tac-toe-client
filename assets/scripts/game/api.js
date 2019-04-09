'use strict'
const store = require('../store')
const config = require('../config')

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
