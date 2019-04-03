const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')

const playMade = function () {
  api.getBooks()
    .then(ui.getBooksSuccess)
    .catch(ui.getBooksFailure)
}
