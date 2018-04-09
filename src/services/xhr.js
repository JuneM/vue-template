/**
 * 对接口返回的数据统一处理
 */

 import axios from 'axios'
 import qs from 'qs'

 axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
 //拦截器 请求接口前的数据处理, 主要是兼容新版浏览器，参数传递丢失的问题,添加时间戳，防止接口缓存
 axios.interceptors.request.use(
  (config) => {
    if (config.method === 'post') {
      config.data = qs.stringify({
        ...config.data,
        t: new Date().getTime()
      })
    } else if (config.method === 'get') {
      config.params = {
        t: new Date().getTime(),
        ...config.params
      }
    }
    return config
  }
 )

function finalUrl(url, params) {
  return [url].concat(params).join('/')
}

function handleResponse(res) {
  // 这里的数据获取，主要根据后端返回的格式决定
  const data = res.data
  const code = data.code

  if (code === 0) {
    return Promise.resolve(data)
  }

  return Promise.reject(data)
}

function get(url, { params = [], query = {} }) {
  return axios.get(finalUrl(url, params), { params: query }).then(handleResponse)
}

function post(url, { params = [], query = {} }) {
  return axios.post(finalUrl(url, params), qs.stringify(query)).then(handleResponse)
}

function put(url, { params = [], query = {} }) {
  return axios.put(finalUrl(url, params), qs.stringify(query)).then(handleResponse)
}

function del(url, { params = [], query = {} }) {
  return axios.delete(finalUrl(url, params), qs.stringify(query)).then(handleResponse)
}

function patch(url, { params = [], query = {} }) {
  return axios.patch(finalUrl(url, params), qs.stringify(query)).then(handleResponse)
}

export default {
  get,
  post,
  del,
  put,
  patch
}