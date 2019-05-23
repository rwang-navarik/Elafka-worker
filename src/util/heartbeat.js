/* use strict */

/**
 * Resettable heartbeat timer.
 *
 * This is useful for cases where you might want to
 * wait for a stream of events to start happening,
 * then generate an event reasonably quickly once
 * the stream ends or significantly pauses.
 *
 * For instance, it can take a while to hook up to
 * Kafka, but once connected events should come
 * quickly until the consumer reaches the current
 * topic offset.
 *
 * Mainly this is probably useful for keeping test
 * suites snappy.
 */

class Heartbeat {
  constructor({
    name, msec, callback, start = false, log = null,
  }) {
    this.name = name
    this.msec = msec
    this.callback = callback
    this.timer = null
    this.log = log

    if (start) {
      this.start()
    }
  }

  start() {
    this.timer = setTimeout(() => {
      if (this.log) {
        this.log.info(`${this.name} timer expired`)
      }
      this.callback()
    }, this.msec)
  }

  tick() {
    if (!this.timer) {
      this.start()
    }

    this.timer.refresh()
  }
}

module.exports = Heartbeat
