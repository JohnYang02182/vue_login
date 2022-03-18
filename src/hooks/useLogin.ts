import axios from "axios"
import type { AxiosRequestConfig, AxiosResponse, AxiosInstance } from "axios"
// 獲取瀏覽器的介面地址
let baseUrl = window.location.origin
axios.defaults.baseURL = baseUrl
axios.defaults.timeout = 50000
axios.defaults.withCredentials = true

// 請求攔截
axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    if (localStorage && localStorage.getItem("token")) {
      const token = localStorage.getItem("token")
      token && (config.headers.Authorization = token)
    }
    return config
  },
  (error) => {
    console.log(error)
    return Promise.error(error)
  }
)

// 響應攔截器
axios.interceptors.response.use((response: AxiosResponse) => {
  if (response.status === 200) {
    // 993登入過期
    if (response.data.code !== "993") {
      return Promise.resolve(response)
    } else {
      console.log("登入過期")
      window.location.href = "/#/login"
    }
  } else {
    return Promise.reject(response)
  }
})
