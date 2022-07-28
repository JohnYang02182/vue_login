export interface LoginData {
  UserName: string
  Password: string
}

export interface getLoginInfo {
  user: string
  email: string
  message: string
}

export interface isLogin {
  UserName: string
  token: string
  message: string
}
