import cyRequest from '../index'

enum HomeAPI {
  test = '/get'
}
function testAPI() {
  return cyRequest.get({
    url: HomeAPI.test,
    params: {
      name: 'coderyang',
      age: 18
    }
  })
}

export { testAPI }
