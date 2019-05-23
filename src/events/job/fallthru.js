/* use strict */

const equal = require('fast-deep-equal')

module.exports = ({ before, after }) => {
  if (!equal(before, after)) {
    return {
      type: 'job-update',
      description: 'Job updated',
      category: 'job',
    }
  }
  return null
}
