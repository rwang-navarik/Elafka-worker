// https://github.com/airbnb/javascript/issues/859#issuecomment-265862709

module.exports = {
  env: {
    jest: true,
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: [
          'node_modules',
          '.'
        ]
      }
    }
  },
  rules: {
    'no-plusplus': 0
  }
}
