/* use strict */

const path = require('path')
const rfc6902 = require('rfc6902')
// might need https://www.npmjs.com/package/json-schema-ref-parser

function interpretMessage(msg, schemaCache) {
  const output = {
    before: msg.patchToPrev ? rfc6902.applyPatch(msg.data, msg.patchToPrev) : null,
    after: msg.data,
    patch: msg.patchToPrev || [],
    schema: null,
    kind: 'unknown',
    version: 'unparsed',
  }

  const schemaRef = output.after.schema || output.before.schema

  if (schemaRef) {
    output.schema = schemaCache.read(schemaRef)

    const type = path.basename(schemaRef, '.json')
    const match = type.match(/(.+)-(\d+-\d+-\d+)$/)

    if (match) {
      output.kind = match[1] || 'unparsed'
      output.version = match[2] || 'unparsed'
    }
  }

  return output
}

module.exports = interpretMessage
