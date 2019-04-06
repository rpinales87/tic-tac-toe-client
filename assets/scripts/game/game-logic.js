const events = require('./events')

let currentPlayer = 'x'

const gameBoard = ['', '', '', '', '', '', '', '', '']
// console.log(gameBoard)

const onPlay = function (event) {
  const index = $(event.target).data('id')
  // console.log(index)
  gameBoard[index] = currentPlayer
  // console.log(gameBoard)
  if (currentPlayer === 'x' && $(event.target).text() === '') {
    $(event.target).text(currentPlayer)
    $('.message').text('O\'s turn')
    // console.log('x played')
    currentPlayer = 'o'
  } else if (currentPlayer === 'o' && $(event.target).text() === '') {
    $(event.target).text(currentPlayer)
    $('.message').text('X\'s turn')
    // console.log('o played')
    currentPlayer = 'x'
  } else if ($(event.target).text() !== '') {
    $('.message').text('Invalid move')
    return 'Invalid move!'
  }
  events.playerMove(index, currentPlayer)
}

const winner = function (event) {
  if ((gameBoard[0] === 'x' && gameBoard[1] === 'x' && gameBoard[2] === 'x') ||
      (gameBoard[3] === 'x' && gameBoard[4] === 'x' && gameBoard[5] === 'x') ||
      (gameBoard[6] === 'x' && gameBoard[7] === 'x' && gameBoard[8] === 'x') ||
      (gameBoard[0] === 'x' && gameBoard[4] === 'x' && gameBoard[8] === 'x') ||
      (gameBoard[2] === 'x' && gameBoard[4] === 'x' && gameBoard[6] === 'x') ||
      (gameBoard[0] === 'x' && gameBoard[3] === 'x' && gameBoard[6] === 'x') ||
      (gameBoard[1] === 'x' && gameBoard[4] === 'x' && gameBoard[7] === 'x') ||
      (gameBoard[2] === 'x' && gameBoard[5] === 'x' && gameBoard[8] === 'x')) {
    $('.message').text('X Won!!').hide(3000)
    events.gameOver()
    $('.box').off('click', onPlay)
    // console.log('X wins!')
  } else if (
    (gameBoard[0] === 'o' && gameBoard[1] === 'o' && gameBoard[2] === 'o') ||
    (gameBoard[3] === 'o' && gameBoard[4] === 'o' && gameBoard[5] === 'o') ||
    (gameBoard[6] === 'o' && gameBoard[7] === 'o' && gameBoard[8] === 'o') ||
    (gameBoard[0] === 'o' && gameBoard[4] === 'o' && gameBoard[8] === 'o') ||
    (gameBoard[2] === 'o' && gameBoard[4] === 'o' && gameBoard[6] === 'o') ||
    (gameBoard[0] === 'o' && gameBoard[3] === 'o' && gameBoard[6] === 'o') ||
    (gameBoard[1] === 'o' && gameBoard[4] === 'o' && gameBoard[7] === 'o') ||
    (gameBoard[2] === 'o' && gameBoard[5] === 'o' && gameBoard[8] === 'o')) {
    $('.message').text('O Won!!').hide(3000)
    events.gameOver()
    $('.box').off('click', onPlay)
    // console.log('O wins!')
  } else if (
    gameBoard[0] !== '' && gameBoard[1] !== '' && gameBoard[2] !== '' &&
    gameBoard[3] !== '' && gameBoard[4] !== '' && gameBoard[5] !== '' &&
    gameBoard[6] !== '' && gameBoard[7] !== '' && gameBoard[8] !== '') {
    $('.message').text('It\'s a tie!!').hide(3000)
    events.gameOver()
    $('.box').off('click', onPlay)
    // console.log('It/s a tie!')
  }
}

const addHandlers = function () {
  $('.box').on('click', onPlay)
  $('.box').on('click', winner)
  $('#start-game').on('submit', events.onCreateGame)
  $('.container').hide()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#start-game').hide()
  $('#sign-in').submit(function (e) {
    $('#sign-in').hide()
    $('#sign-up').hide()
    $('#sign-out').show()
    $('#change-password').show()
    $('#start-game').show()
  })
  $('#start-game').submit(function (e) {
    $('.container').show()
  })
  $('#sign-out').submit(function (e) {
    $('#change-password').hide()
    $('#start-game').hide()
    $('#sign-in').show()
    $('#sign-up').show()
    $('.container').hide()
    $('#sign-out').hide()
    $('.message').hide()
  })
}

module.exports = {
  addHandlers,
  winner,
  onPlay
}
