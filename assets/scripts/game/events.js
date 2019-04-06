const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store')

// create game and store
const onCreateGame = function (event) {
  event.preventDefault()
  api.createGame()
    .then(response => {
      ui.createSuccess()
      store.gameId = response.game.id
      console.log('store is:', store)
    })
    .catch(ui.createFaliure)
}

const playerMove = function (index, currentPlayer) {
//  event.preventDefault()
  api.playerMove(index, currentPlayer)
    .then(ui.updateSuccess)
    .catch(ui.updateFaliure)
}

const gameOver = () => {
  api.gameOver()
    .then(ui.gameOverSuccess)
    .catch(ui.gameOverFaliure)
}

module.exports = {
  onCreateGame,
  playerMove,
  gameOver
}
