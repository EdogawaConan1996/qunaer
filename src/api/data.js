import axios from './index'

export const getIndex = () => {
  return axios.request({
    method: 'GET',
    url: '/index'
  })
}

export const getCity = () => {
  return axios.request({
    method: 'GET',
    url: '/city'
  })
}

export const getDetail = () => {
  return axios.request({
    method: 'GET',
    url: '/detail'
  })
}
