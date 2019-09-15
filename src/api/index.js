import axios from 'axios'

axios.defaults.baseURL = '/qunaer/api'
axios.defaults.withCredentials = true
axios.defaults.timeout = 30000

axios.interceptors.request.use(config => config, error => Promise.reject(error))
axios.interceptors.response.use(res => {
  if (res.data.ret) {
    return res.data.data
  } else {
    return Promise.reject(res.data.message)
  }
}, error => {
  return Promise.reject(error)
})

export default axios
