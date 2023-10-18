import axios from 'axios'
import { showStatus } from './Status'
import type { AxiosRequestConfig, AxiosResponse, AxiosInstance, InternalAxiosRequestConfig } from 'axios'
import { HttpProxy } from 'vite'

// 獲取瀏覽器的介面地址
const baseUrl = window.location.origin
axios.defaults.baseURL = baseUrl
axios.defaults.timeout = 50000
axios.defaults.withCredentials = true
// 請求攔截
axios.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    if (config.headers) {
      if (localStorage && localStorage.getItem('token')) {
        const token = localStorage.getItem('token')
        // 如果有 token 的話就讓 authorization  = token
        token && (config.headers!.Authorization = token)
      }
      config.headers['x-api-key'] = 'PMAK-61dffcf60782c421eedf59c5-6ef667f40b94a47550dc80d2d48e5b82f3'
    }
    return config
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)
// 響應攔截器
axios.interceptors.response.use((res: AxiosResponse) => {
  const showTip = showStatus(res.status)
  if (res.status === 200) {
    // 993登入過期
    if (res.data.code !== '993') {
      return Promise.resolve(res)
    } else {
      console.log(`${showTip}`)
      window.location.href = '/#/login'
      return Promise.resolve(res)
    }
  } else {
    console.log(`${showTip}`)
    return Promise.reject(res)
  }
})

// 2、封裝請求方式
// @param url 介面地址
// @param data 攜帶引數
// @param file 上傳檔案物件
// @param auth 是否攜帶token
// get請求

export function get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
  return new Promise((resolve, reject) => {
    axios
      .get<T>(url, config)
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

// post請求

export function post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
  return new Promise((resolve) => {
    axios
      .post<T>(url, data, config)
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        resolve(err.response?.data)
      })
  })
}

// put請求

export function put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
  return new Promise((resolve, reject) => {
    axios
      .put<T>(url, data, config)
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

// delete請求

export function del<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
  return new Promise((resolve, reject) => {
    axios
      .delete<T>(url, config)
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
