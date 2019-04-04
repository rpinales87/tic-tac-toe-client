
let currentPlayer = 'x'

const gameBoard = ['', '', '', '', '', '', '', '', '']
console.log(gameBoard)

const onPlay = function (event) {
  if (currentPlayer === 'x' && $(event.target).text() === '') {
    $(event.target).text(currentPlayer)
    currentPlayer = 'o'
  } else if (currentPlayer === 'o' && $(event.target).text() === '') {
    $(event.target).text(currentPlayer)
    currentPlayer = 'x'
  } else if ($(event.target).text() === 'x' || $(event.target).text() === 'o') {
    console.log('Invalid move')
  }
}

const addHandlers = function () {
  $('.box').on('click', onPlay)
}

module.exports = {
  addHandlers
}
