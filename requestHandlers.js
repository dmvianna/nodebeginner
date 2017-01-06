'use strict'

const exec = require('child_process').exec

const start = (response) => {
  console.log('request handler \'start\' was called')
  const body = '<html>' +
          '<head>' +
          '<meta http-equiv="Content-Type" content="text/html; ' +
          'charset=UTF-8" />' +
          '</head>' +
          '<body>' +
          '<form action="/upload" method="post">' +
          '<textarea name="text" rows="20" cols="60"></textarea>' +
          '<input type="submit" value="Submit text" />' +
          '</form>' +
          '</body>' +
          '</html>'

  response.writeHead(200, { 'Content-Type':'text/html' })
  response.write(body)
  response.end()
}

const upload = (response) => {
  console.log('request handler \'upload\' was called')
  response.writeHead(200, { 'Content-Type': 'text-plain' })
  response.write('Hello upload')
  response.end()
}

module.exports = { start, upload }
