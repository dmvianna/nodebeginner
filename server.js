'use strict'

const http = require('http')
const url = require('url')

const start = (route, handle) => {
  const onRequest = (request, response) => {
    const pathname = url.parse(request.url).pathname
    let postData = ''
    console.log('request for ' + pathname + ' received.')

    request.setEncoding('utf8')
    request.addListener('data', (postDataChunk) => {
      postData += postDataChunk
      console.log('received POST data chunk \'' +
                  postDataChunk + '\'.')
    })
    request.addListener('end', () =>
                        route(handle, pathname, response, postData))
  }

  http.createServer(onRequest).listen(9999)
  console.log('Server has started')
}

module.exports = { start }
