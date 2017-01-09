'use strict'

const http = require('http')
const url = require('url')

const start = (route, handle) => {
  const onRequest = (request, response) => {
    const pathname = url.parse(request.url).pathname
    console.log('request for ' + pathname + ' received.')
    route(handle, pathname, response, request)
  }

  http.createServer(onRequest).listen(9999)
  console.log('Server has started')
}

module.exports = { start }
