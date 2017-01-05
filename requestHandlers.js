'use strict'

const start = () => console.log('request handler \'start\' was called')
const upload = () => console.log('request handler \'upload\' was called')

module.exports = {
  start: start,
  upload: upload
}
