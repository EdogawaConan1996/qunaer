import axios from './index'

export const getIndex = () => {
  return axios.request({
    method: 'GET',
    url: '/index'
  })
}
