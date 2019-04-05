
const createSuccess = function (response) {
  $('#book-display').html(`
    <h4>Title: ${response.book.title}</h4>
    <p>Author: ${response.book.author}<p>
    <br>
    `)
}

const createFaliure = function (response) {
  $('#message').text('Something went wrong could\'t start game')
  console.log('err: response')
}

module.exports = {
  createSuccess,
  createFaliure
}
