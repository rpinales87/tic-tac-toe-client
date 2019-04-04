
let currentPlayer = 'x'

const gameBoard = ['', '', '', '', '', '', '', '', '']
console.log(gameBoard)

const onPlay = function (event) {
  const dataId = $(event.target).data('id')
  console.log(dataId)
  gameBoard[dataId] = currentPlayer
  console.log(gameBoard)
  if (currentPlayer === 'x' && $(event.target).text() === '') {
    $(event.target).text(currentPlayer)
    $('.message').text('O\'s turn')
    console.log('x played')
    currentPlayer = 'o'
  } else if (currentPlayer === 'o' && $(event.target).text() === '') {
    $(event.target).text(currentPlayer)
    $('.message').text('X\'s turn')
    console.log('o played')
    currentPlayer = 'x'
  } else if ($(event.target).text() === 'x' || $(event.target).text() === 'o') {
    $('.message').text('Invalid move')
    console.log('Invalid move!')
  }
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
    $('.message').text('X Won!!')
    $('.box').off('click', onPlay)
    console.log('X wins!')
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
    $('.box').off('click', onPlay)
    console.log('O wins!')
  } else if (
    gameBoard[0] !== '' && gameBoard[1] !== '' && gameBoard[2] !== '' &&
    gameBoard[3] !== '' && gameBoard[4] !== '' && gameBoard[5] !== '' &&
    gameBoard[6] !== '' && gameBoard[7] !== '' && gameBoard[8] !== '') {
    $('.message').text('It\'s a tie!!')
    $('.box').off('click', onPlay)
    console.log('It/s a tie!')
  }
}

const addHandlers = function () {
  $('.box').on('click', onPlay)
  $('.box').on('click', winner)
}

module.exports = {
  addHandlers,
  winner
}
