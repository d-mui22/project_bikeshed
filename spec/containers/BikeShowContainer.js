beforeEach(() => {
  tasks = [
    {id: 1, make: 'Harley Davidson'}
  ]
  fetchMock.get('/api/v1/tasks', {
    status: 200,
    body: tasks
  });
  wrapper = mount(
    <BikeShowContainer />
  )
})

afterEach(fetchMock.restore)

describe('listing', () => {
  it('renders an h2', () => {
    expect(wrapper.find('h2')).toBePresent()
    expect(wrapper.find('h2').text()).toEqual('BikeShow')
  })

  it('renders a list item for each item returned from the api call', (done) => {
    setTimeout(() => {
      expect(wrapper.find('li').length).toEqual(tasks.length)
      expect(wrapper.find('li').text()).toEqual(tasks[0].title)
      done()
    }, 0)
  })
})
