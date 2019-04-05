
const createSuccess = function (response) {
  console.log('response is:', response)
}

const createFaliure = function (response) {
  $('#message').text('Something went wrong could\'t start game')
  console.log('err: response')
}

const updateSuccess = function (response) {
  console.log('Update success:', response)
}

const updateFaliure = function (response) {
  $('#message').text('Something went wrong couldn\'t update the play.')
  console.log('err: response')
}

module.exports = {
  createSuccess,
  createFaliure,
  updateSuccess,
  updateFaliure
}
