
const rules = [
  {
    process: 'diff',
    pointer: '/nominatedQuantity',
    changed: {
      category: 'contract',
      description: 'Nominated quantity changed',
      type: 'contract-quantity-change',
    },
    added: {
      category: 'contract',
      description: 'Nominated quantity added',
      type: 'contract-quantity-add',
    },
  },
]

module.exports = rules
