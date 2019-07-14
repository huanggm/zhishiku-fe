import 'whatwg-fetch'

function fetchWrapper(url, options) {
  options = options || {}
  options['credentials'] = 'same-origin'
  if (options.method === 'POST') {
    options.headers = {}
    options.headers['Content-Type'] = 'application/json'
    if (options.body) {
      options.body = JSON.stringify(options.body)
    }
  }

  return fetch(url, options).then(res => {
    if (res.ok) {
      return res.json()
    } else {
      throw new Error(res.statusText)
    }
  })
}

export default fetchWrapper
