const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')

const onCreateGame = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.createGame(formData)
    .then(ui.createSuccess)
    .catch(ui.createFaliure)
}

module.exports = {
  onCreateGame
}
