export const showStatus = (status: number) => {
  let message = ""
  switch (status) {
    case 200:
      message = "請求成功(200)"
      break
    case 400:
      message = "請求錯誤(400)"
      break
    case 401:
      message = "未授權，請重新登入(401)"
      break
    case 403:
      message = "拒絕訪問(403)"
      break
    case 404:
      message = "請求出錯(404)"
      break
    case 408:
      message = "請求超時(408)"
      break
    case 500:
      message = "伺服器錯誤(500)"
      break
    case 501:
      message = "請求未實現(501)"
      break
    case 502:
      message = "網路錯誤(502)"
      break
    case 503:
      message = "服務無效(503)"
      break
    case 504:
      message = "網路超時(504)"
      break
    case 505:
      message = "HTTP版本不支援"
      break
    default:
      message = `發生錯誤(${status})!`
  }
  return `${message}, 請再次檢查或聯絡後端`
}
