
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
    console.log('x played')
    currentPlayer = 'o'
  } else if (currentPlayer === 'o' && $(event.target).text() === '') {
    $(event.target).text(currentPlayer)
    console.log('o played')
    currentPlayer = 'x'
  } else if ($(event.target).text() === 'x' || $(event.target).text() === 'o') {
    console.log('Invalid move')
  }
}

const winner = function () {
  if ((gameBoard[0] === 'x' && gameBoard[1] === 'x' && gameBoard[2] === 'x') ||
      (gameBoard[3] === 'x' && gameBoard[4] === 'x' && gameBoard[5] === 'x') ||
      (gameBoard[6] === 'x' && gameBoard[7] === 'x' && gameBoard[8] === 'x') ||
      (gameBoard[0] === 'x' && gameBoard[4] === 'x' && gameBoard[8] === 'x') ||
      (gameBoard[2] === 'x' && gameBoard[4] === 'x' && gameBoard[6] === 'x') ||
      (gameBoard[0] === 'x' && gameBoard[3] === 'x' && gameBoard[6] === 'x') ||
      (gameBoard[1] === 'x' && gameBoard[4] === 'x' && gameBoard[7] === 'x') ||
      (gameBoard[2] === 'x' && gameBoard[5] === 'x' && gameBoard[8] === 'x')) {
    console.log('x wins!')
  } else if (
    (gameBoard[0] === 'o' && gameBoard[1] === 'o' && gameBoard[2] === 'o') ||
    (gameBoard[3] === 'o' && gameBoard[4] === 'o' && gameBoard[5] === 'o') ||
    (gameBoard[6] === 'o' && gameBoard[7] === 'o' && gameBoard[8] === 'o') ||
    (gameBoard[0] === 'o' && gameBoard[4] === 'o' && gameBoard[8] === 'o') ||
    (gameBoard[2] === 'o' && gameBoard[4] === 'o' && gameBoard[6] === 'o') ||
    (gameBoard[0] === 'o' && gameBoard[3] === 'o' && gameBoard[6] === 'o') ||
    (gameBoard[1] === 'o' && gameBoard[4] === 'o' && gameBoard[7] === 'o') ||
    (gameBoard[2] === 'o' && gameBoard[5] === 'o' && gameBoard[8] === 'o')) {
    console.log('o wins!')
  } else {
    console.log('It/s a tie!')
  }
}

const addHandlers = function () {
  $('.box').on('click', onPlay)
}

module.exports = {
  addHandlers
}
