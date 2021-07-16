import { hashHistory } from 'react-router'
import { message } from 'antd'

/**
 * 
 * @param {*} url 
 * 
 */
export function parseQueryString(url){
  const obj = {}
  if (url.indexOf('?') !== -1) {
    const str = url.split('?')[1]
    const strs = str.split('&')
    strs.map((item, i) => {
      const arr = strs[i].split('=')
      /* eslint-disable */
      obj[arr[0]] = arr[1]
    })
  }
  return obj
}

