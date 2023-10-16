import axios from 'axios'
import type { AxiosRequestConfig, AxiosResponse, AxiosInstance, InternalAxiosRequestConfig } from 'axios'

// 獲取瀏覽器的介面地址
const baseUrl = window.location.origin
axios.defaults.baseURL = 'https://50e97aad-acc9-4e5f-9488-8128c31a7c97.mock.pstmn.io'
axios.defaults.timeout = 50000
axios.defaults.withCredentials = false
// 請求攔截
axios.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  if (localStorage && localStorage.getItem('token')) {
    const token = localStorage.getItem('token')
    // 如果有 token 的話就讓 authorization  = token
    token && (config.headers!.Authorization = token)
  }
  return config
}, error => {
  console.log(error)
  return Promise.reject(error)
})
// 響應攔截器
axios.interceptors.response.use((res: AxiosResponse) => {
  if (res.status === 200) {
    // 993登入過期
    if (res.data.code !== '993') {
      return Promise.resolve(res)
    } else {
      console.log('登入過期')
      window.location.href = '/#/login'
      return Promise.resolve(res)
    }
  } else {
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
    axios.get<T>(url, config).then((res) => {
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
    axios.post<T>(url, data, config).then((res) => {
      resolve(res.data)
      console.log('res',res.data)
    })
      .catch((err) => {
        resolve(err.response?.data)
      })
  })
}

// put請求

export function put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
  return new Promise((resolve, reject) => {
    axios.put<T>(url, data, config)
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
    axios.delete<T>(url, config)
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
