/* use strict */

const http = require('http')
const nullLog = require('./null-log')

function startHealthEndpoint({ port = 80, host = '0.0.0.0', log = nullLog }) {
  const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end('{"status": "ok"}')
  })

  server.listen(port, host, () => {
    log.info(`Healthcheck running at http://${host}:${port}`)
  })
}

module.exports = startHealthEndpoint
