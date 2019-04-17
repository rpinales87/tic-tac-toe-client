const store = require('../store')

const createSuccess = function (response) {
  // console.log('createSuccess is:', response)
  $('.container').show()
  $('.box').empty()
  $('.message').text('X starts the game').show()
  $('.history').empty()
  $('.change-password').empty().show()
}

const createFaliure = function (response) {
  $('.message').text('Something went wrong, could\'t start game')
  // console.log('err: response')
}

const updateSuccess = function (response) {
  // console.log('Update success:', response)
}

const updateFaliure = function (response) {
  $('.message').text('Something went wrong, couldn\'t update the play.')
  // console.log('err: response')
}

const gameOverSuccess = function (response) {
  $('.history').text('Game over, please start a new game.')
  // console.log('game over success:', response)
}

const gameOverFaliure = function (response) {
  $('.message').text('Something went wrong couldn\'t end the game.')
  // console.log('err: response')
}

const getGamesSuccess = function (response) {
  // console.log('get games success:', response)
  store.games = response.games
  $('.history').text('You\'ve played ' + response.games.length + ' games.')
  console.log(store)
}

const getGamesFaliure = function (response) {
  $('#message').text('Something went wrong couldn\'t get the games.')
  // console.log('err: response')
}

module.exports = {
  createSuccess,
  createFaliure,
  updateSuccess,
  updateFaliure,
  gameOverSuccess,
  gameOverFaliure,
  getGamesSuccess,
  getGamesFaliure
}
