'use strict'

const os = require('os')
os.tmpDir = os.tmpdir
const fs = require('fs')
const formidable = require('formidable')

const start = (response) => {
  console.log('request handler \'start\' was called')
  const body = '<html>' +
          '<head>' +
          '<meta http-equiv="Content-Type" content="text/html; ' +
          'charset=UTF-8" />' +
          '</head>' +
          '<body>' +
          '<form action="/upload" ' +
          'enctype="multipart/form-data" method="post">' +
          '<input type="file" name="upload" multiple="multiple">' +
          '<input type="submit" value="Upload file" />' +
          '</form>' +
          '</body>' +
          '</html>'

  response.writeHead(200, { 'Content-Type': 'text/html' })
  response.write(body)
  response.end()
}

const upload = (response, request) => {
  console.log('request handler \'upload\' was called')

  const form = new formidable.IncomingForm()
  console.log('about to parse')
  form.parse(request, (error, fields, files) => {
    if (error) {
      console.log('error parsing')
    } else {
      console.log('parsing done')
    }
  })
  form.on('fileBegin', (name, file) => { file.path = 'tmp/test.png' })
  form.on('file', (name, file) => console.log('uploaded test.png'))
  console.log('writing file to response now')
  response.writeHead(200, { 'Content-Type': 'text/html' })
  response.write('received image:<br/>')
  response.write('<img src=\'/show\' />')
  response.end()
}

const show = (response) => {
  console.log('request handler \'show \' was called')
  response.writeHead(200, { 'Content-Type': 'image/png' })
  fs.createReadStream('tmp/test.png').pipe(response)
}

module.exports = { start, upload, show }
