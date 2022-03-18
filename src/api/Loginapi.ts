import { get, post, put, del } from './Defhttp'
import { LoginData, getLoginInfo, isLogin } from './model/loginModel'

enum Api {
  LOGIN = 'https://ab5b2fbd-d406-4f13-91df-557576e23aec.mock.pstmn.io/login',
  LOGININFO = 'https://ab5b2fbd-d406-4f13-91df-557576e23aec.mock.pstmn.io/getinfo'
}

export const loginApi = (params: LoginData) => post<LoginData>(Api.LOGIN, params)
export const loginInfo = () => get<getLoginInfo>(Api.LOGININFO)
