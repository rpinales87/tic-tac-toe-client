const api = require('./api.js')
const ui = require('./ui.js')

const onCreateGame = function (event) {
  event.preventDefault()
  api.createGame()
    .then(ui.createSuccess)
    .catch(ui.createFaliure)
}

const onUpdateGame = function (event) {
  event.preventDefault()
  api.updateGame()
    .then(ui.updateSuccess)
    .catch(ui.updateFaliure)
}

module.exports = {
  onCreateGame,
  onUpdateGame
}
