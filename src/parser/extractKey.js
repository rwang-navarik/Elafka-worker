
/**
 * @param {array} patches
 * @param {string} keyName
 */
const extractKey = (patches, keyName) => {
  patches.map((patch) => {
    const newPatch = {}
    newPatch[patch[keyName]] = patch
    return newPatch
  })
}

module.exports = extractKey
