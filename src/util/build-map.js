/* use strict */

const buildMap = (obj) => {
  const map = new Map()
  Object.keys(obj).forEach((key) => {
    map.set(key, obj[key])
  })
  return map
}

module.exports = buildMap
