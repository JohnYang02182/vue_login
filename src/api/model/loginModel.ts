
export interface LoginData {
  account: string,
  password: string
}

export interface getLoginInfo {
  user: string,
  email: string,
  message: string
}

export interface isLogin {
  account: string,
  token: string,
  message: string
}
