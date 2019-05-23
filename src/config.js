/* use strict */

const fs = require('fs')
const path = require('path')

const enPathenate = (config, root, keys) => {
  const newConfig = Object.keys(config).reduce((acc, key) => {
    if (keys.includes(key) && !path.isAbsolute(config[key])) {
      return {
        ...acc,
        [key]: path.join(root, config[key]),
      }
    }
    return {
      ...acc,
      [key]: config[key],
    }
  },
  {})

  return newConfig
}

const loadConfig = (file, dir = null) => {
  const configDir = dir || path.join(__dirname, '../config')
  const configBase = JSON.parse(fs.readFileSync(path.join(configDir, file)))

  return enPathenate(configBase, configDir, ['ssl_ca', 'ssl_cert', 'ssl_key', 'path'])
}

module.exports = {
  publisher: (dir = null) => loadConfig('publisher.json', dir),
  subscriber: (dir = null) => loadConfig('subscriber.json', dir),
}
