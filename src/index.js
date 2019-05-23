/* use strict */

const log = require('pino')({ level: process.env.LOG_LEVEL || 'info' })
const { messageBus } = require('@navarik/message-bus-interface')
const SchemaCache = require('@navarik/schema-cache')
const Events = require('./events')
const config = require('./config')
const interpretMessage = require('./interpret-message')
const { healthEndpoint } = require('./util')

const configDir = process.env.CONFIG_DIR || null
const schemaCache = new SchemaCache({ log })
const events = new Events(log)

const publisher = messageBus.connectAsPublisher(config.publisher(configDir))

const processMessage = (msg, done) => {
  const action = interpretMessage(msg, schemaCache)

  const output = {
    ...msg,
    events: events.generate(action),
  }
  publisher.publish(output)
  done()
}

messageBus.connectAsSubscriber(config.subscriber(configDir), processMessage)

healthEndpoint({
  port: process.env.SERVICE_PORT || 80,
  log,
})
