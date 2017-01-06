'use strict'

const exec = require('child_process').exec

const start = (response) => {
  console.log('request handler \'start\' was called')
  exec('find /',
       { timeout: 10000, maxBuffer: 20000 * 1024 },
       (error, stdout, stderr) => {
         response.writeHead(200, { 'Content-Type':'text/plain' })
         response.write(stdout)
         response.end()
       })
}

const upload = (response) => {
  console.log('request handler \'upload\' was called')
  response.writeHead(200, { 'Content-Type': 'text-plain' })
  response.write('Hello upload')
  response.end()
}

module.exports = { start, upload }
