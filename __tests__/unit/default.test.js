
const Events = require('src/events')

const events = new Events()

const job1 = {
  schema: 'https://ticithub.com/schema/ticithub/entity/not-a-thing-0-1-0',
  id: 'some-uuid',
  meta: {},
  data: {
    status: 'Pending',
  },
}

const job2 = {
  schema: 'https://ticithub.com/schema/ticithub/entity/not-a-thing-0-1-0',
  id: 'some-uuid',
  meta: {
    someKey: 'some value',
  },
  data: {
    status: 'Pending',
  },
}

describe('Default event behaviours', () => {
  it('should not generate events if schema is unrecognized', () => {
    const es = events.generate({ before: job1, after: job2 })

    expect(es).toBeInstanceOf(Array)
    expect(es.length).toBe(0)
  })
})
