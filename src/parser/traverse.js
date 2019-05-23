/**
 * @param {Object} Result
 * @param {Object} jsonObject
 * @param {function} func
 */


const traverse = (jsonObject, func) => Object.keys(jsonObject).map((key) => {
  if (jsonObject[key] != null && typeof (jsonObject[key]) === 'object') {
    traverse(jsonObject[key], func)
  }
  return func(jsonObject[key])
})


module.exports = traverse
