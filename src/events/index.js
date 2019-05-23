/* use strict */

const { nullLog } = require('../util')
const job = require('./job')


class Events {
  constructor(log = nullLog) {
    this.log = log
  }

  generate(action) {

    const { kind } = action

    switch (kind) {
      case 'job':
      case 'unknown':
        return job.listEvents(action)

      default:
        this.log.trace(`Schema name not recognized: [${kind}]`)
        return []
    }
  }   
}

module.exports = Events
