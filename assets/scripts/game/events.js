const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store')

// create game and store
const onCreateGame = event => {
  event.preventDefault()

  api.createGame()
    .then(response => {
      ui.createSuccess()
      store.game = response.game
      console.log('store is:', store)
      // console.log('response on create is: ', response)
    })
    .catch(ui.createFaliure)
}

const playerMove = (index, currentPlayer) => {
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

const getGames = () => {
  event.preventDefault()
  api.getGames()
    .then(response => {
      ui.createSuccess()
      store.games = response.games
      $('#game-history').submit(e => {
        $('.message').text('You\'ve played ' + store.games.length + ' games.')
      })
      console.log('get store is:', store)
    // console.log('response on create is: ', response)
    })
    .catch(ui.getGamesFaliure)
}

module.exports = {
  onCreateGame,
  playerMove,
  gameOver,
  getGames
}
