
const SchemaCache = require('@navarik/schema-cache')
const Events = require('src/events')
const interpretMessage = require('src/interpret-message')

const schemaCache = new SchemaCache()
const events = new Events(schemaCache)

const msg = {
  id: 'fa27eea3-57fd-4bd3-bace-531b794e8df5',
  schema: 'https://ticithub.com/schema/ticithub/component/changelog-0-1-0',
  type: 'update',
  collection: 'job',
  data: {
    id: '3cc91ff2-659d-47b5-8553-728e190128db',
    schema: 'https://ticithub.com/schema/ticithub/entity/job-0-1-0',
    createdOn: '2019-04-11T23:38:02.489Z',
    modifiedOn: '2019-04-11T23:39:30.486Z',
    type: 'test',
    status: 'Accepted',
    nominatedQuantity: '33333',
    tripNumber: '12313',
    eta: '2019-04-11T23:35:56.150Z',
    etd: '2019-04-11T23:35:56.150Z',
  },
  dataVer: '0a5c08d53e434aba7b89a71162a3eb3762ccaa507fda445edd0c57ab4d3e764c',
  prevVer: 'c4c04697e19a7b48f99ffe5b7c467cf08711b62bd96217de8348b44309259c12',
  patchToPrev: [
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
  ],
  createdOn: '2019-04-11T23:39:30.486Z',
}


const action = interpretMessage(msg)



describe('Default job behaviours', () => {
  it('should generate 0 events if no changelog nor localRules provided', () => {
    const es = events.generate()

    expect(es).toBeInstanceOf(Array)
    expect(es.length).toBe(0)
  })


  it('should generate 3 events if changelog provided', () => {

    const es = events.generate(action)

    expect(es).toBeInstanceOf(Array)
    expect(es.length).toBe(3)
  })
})
