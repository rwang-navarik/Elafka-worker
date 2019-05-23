const { parseByOp, parseByPath } = require('../../../src/parser/parser')


const patches = [
  {
    op: 'add',
    path: '/associations',
    value: {
      quantities: {},
      samples: {},
      timeLogs: {},
    },
  },
  {
    op: 'replace',
    path: '/modifiedOn',
    value: '2019-04-11T23:38:02.489Z',
  },
  {
    op: 'replace',
    path: '/nominatedQuantity',
    value: '123123',
  },
  {
    op: 'remove',
    path: '/nominatedQuantity',
    value: '343434',
  },
]


describe('Parse behaviours', () => {
  it('should generate two replace in array', () => {
    const newPatches = parseByOp(patches, { replace: true })
    expect(newPatches.length).toBe(2)
  })
  it('should generate two path in array', () => {
    const newPatches = parseByPath(patches, { '/nominatedQuantity': true })
    expect(newPatches.length).toBe(2)
  })
})
