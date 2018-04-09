import router from '../router/'

function goRoute(_route, _query, _params) {
  const query = Object.assign({}, _route.query, _query)
  const params = Object.assign({}, _route.params, _params)
  for (let key in query) {
    !query[key] && delete query[key]
  }
  router.push({
    name: _route.name,
    query,
    params
  })
}
export {
  goRoute
}
