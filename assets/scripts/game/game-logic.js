const events = require('./events')
const authEvents = require('../auth/events')

// set default player, game status and gameboard array
let currentPlayer = 'x'
let gameOver = false
let gameBoard = ['', '', '', '', '', '', '', '', '']
// console.log(gameBoard)

// game logic, update current player and place Xs and Os in the board.
const onPlay = event => {
  if (gameOver === true) {
    return
  }
  const index = $(event.target).data('id')
  // console.log(index)
  gameBoard[index] = currentPlayer
  // console.log(gameBoard)
  if (currentPlayer === 'x' && $(event.target).text() === '') {
    $(event.target).text(currentPlayer)
    events.playerMove(index, currentPlayer)
    $('.message').text('O\'s turn')
    // console.log('x played')
    currentPlayer = 'o'
  } else if (currentPlayer === 'o' && $(event.target).text() === '') {
    $(event.target).text(currentPlayer)
    events.playerMove(index, currentPlayer)
    $('.message').text('X\'s turn')
    // console.log('o played')
    currentPlayer = 'x'
  } else if ($(event.target).text() !== '') {
    $('.message').text('Invalid move')
  }
}

// create winning conditions, update game status when any of those conditions are true.
const winner = event => {
  if ((gameBoard[0] === 'x' && gameBoard[1] === 'x' && gameBoard[2] === 'x') ||
      (gameBoard[3] === 'x' && gameBoard[4] === 'x' && gameBoard[5] === 'x') ||
      (gameBoard[6] === 'x' && gameBoard[7] === 'x' && gameBoard[8] === 'x') ||
      (gameBoard[0] === 'x' && gameBoard[4] === 'x' && gameBoard[8] === 'x') ||
      (gameBoard[2] === 'x' && gameBoard[4] === 'x' && gameBoard[6] === 'x') ||
      (gameBoard[0] === 'x' && gameBoard[3] === 'x' && gameBoard[6] === 'x') ||
      (gameBoard[1] === 'x' && gameBoard[4] === 'x' && gameBoard[7] === 'x') ||
      (gameBoard[2] === 'x' && gameBoard[5] === 'x' && gameBoard[8] === 'x')) {
    $('.message').text('X Won!!')
    currentPlayer = 'x'
    events.gameOver()
    gameOver = true
  } else if (
    (gameBoard[0] === 'o' && gameBoard[1] === 'o' && gameBoard[2] === 'o') ||
    (gameBoard[3] === 'o' && gameBoard[4] === 'o' && gameBoard[5] === 'o') ||
    (gameBoard[6] === 'o' && gameBoard[7] === 'o' && gameBoard[8] === 'o') ||
    (gameBoard[0] === 'o' && gameBoard[4] === 'o' && gameBoard[8] === 'o') ||
    (gameBoard[2] === 'o' && gameBoard[4] === 'o' && gameBoard[6] === 'o') ||
    (gameBoard[0] === 'o' && gameBoard[3] === 'o' && gameBoard[6] === 'o') ||
    (gameBoard[1] === 'o' && gameBoard[4] === 'o' && gameBoard[7] === 'o') ||
    (gameBoard[2] === 'o' && gameBoard[5] === 'o' && gameBoard[8] === 'o')) {
    $('.message').text('O Won!!')
    currentPlayer = 'x'
    events.gameOver()
    gameOver = true
  } else if (
    gameBoard[0] !== '' && gameBoard[1] !== '' && gameBoard[2] !== '' &&
    gameBoard[3] !== '' && gameBoard[4] !== '' && gameBoard[5] !== '' &&
    gameBoard[6] !== '' && gameBoard[7] !== '' && gameBoard[8] !== '') {
    $('.message').text('It\'s a tie!!')
    currentPlayer = 'x'
    events.gameOver()
    gameOver = true
  }
}

const addHandlers = () => {
  $('.box').on('click', onPlay)
  $('.box').on('click', winner)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#start-game').on('submit', events.onCreateGame)
  $('#game-history').on('submit', events.getGames)
  $('#start-game').submit(e => {
    currentPlayer = 'x'
    gameBoard = ['', '', '', '', '', '', '', '', '']
    gameOver = false
    // console.log(gameBoard)
  })
  $('#sign-out').submit(e => {
    $('.history').text('Sign out success').hide(3000)
    $('#change-password').hide()
    $('#start-game').hide()
    $('#sign-in').show()
    $('#sign-up').show()
    $('.container').hide()
    $('#sign-out').hide()
    $('#game-history').hide()
  })
}

module.exports = {
  addHandlers,
  winner,
  onPlay
}
