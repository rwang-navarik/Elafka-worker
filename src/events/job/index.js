/* use strict */

const ptr = require('json-ptr')
const equal = require('fast-deep-equal')
const rules = require('./rules')
const fallthru = require('./fallthru')
const createdEvent = require('./created')

const append = (arr, obj) => (obj ? [...arr, obj] : arr)


function diffState(action, rule) {
  const bp = ptr.get(action.before, rule.pointer)
  const ap = ptr.get(action.after, rule.pointer)

  if (!equal(bp, ap)) {
    if (typeof bp === 'undefined') {
      return rule.added || rule.changed
    }

    if (typeof ap === 'undefined') {
      return rule.removed || rule.changed
    }

    return rule.changed
  }

  return null
}

const listEvents = (action) => {
  let events = []
  const { patch } = action

  if (!action.before) {
    events.push(createdEvent)
    return events
  }

  rules.forEach((rule) => {
    switch (rule.process) {
      case 'diff':
        events = append(events, diffState(action, rule))
        break

      default:
        throw new Error(`Rule processor [${rule.process}] not recognized`)
    }
  })


  if (!events.length) {
    events = append(events, fallthru(action))
  }

  return events
}


module.exports = {
  listEvents,
}
