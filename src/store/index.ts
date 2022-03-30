import { ActionTree, MutationTree, createStore } from 'vuex'
import { loginApi, loginInfo } from '../api/LoginApi'
import { LoginData, isLogin } from '@/api/model/loginModel'
import store, { RootState } from '../store'
import { router } from '@/router'
import { setToken, removeToken, getToken } from '@/utils/token'
import {
  getIsRememberCookie,
  getUserCookie,
  removeIsRememberCookie,
  removeUserCookie,
  setIsRememberCookie,
  setUserCookie
} from '@/utils/cookies'
export interface LoginFormData {
  account: string
  password: string
  isRemember?: boolean
}

const toString = Object.prototype.toString

export function is(value: unknown, type: string) {
  return toString.call(value) === `[Object ${type}]`
}

export function isNull(value: unknown): value is null {
  return value === null
}

export function isString(value: unknown): value is string {
  return is(value, 'String')
}

export function isNumber(value: unknown): value is number {
  return is(value, 'Number')
}

export function isDef<T = unknown>(value?: unknown): value is T {
  return typeof value !== 'undefined'
}

export function isArray(value: unknown): value is Array<any> {
  return Array.isArray(value)
}

export function isNullOrUnDef(value: unknown): value is null | undefined {
  return !isDef(value) || isNull(value)
}

export interface UserState {
  account: string | undefined
  token: string | null
  isLogin: boolean
  isRemember: boolean
}

const initialState: UserState = {
  account: getUserCookie(),
  token: getToken(),
  isLogin: !isNullOrUnDef(getToken()) || !isNullOrUnDef(getUserCookie()),
  isRemember: getIsRememberCookie() ?? false
}

export default createStore({
  state: { ...initialState },
  mutations: {
    SET_TOKEN(state: UserState, token: string) {
      state.token = token
    },
    SET_ACCOUNT(state: UserState, account: string) {
      state.account = account
    },
    SET_IS_LOGIN(state: UserState, isLogin: boolean) {
      state.isLogin = isLogin
    },
    SET_IS_REMEMBER(state: UserState, isRemember: boolean) {
      state.isRemember = isRemember
    }
  },
  actions: {
    async login({ commit, dispatch, state }, loginFormData: LoginFormData) {
      const { account, password } = loginFormData
      try {
        const response: isLogin = await loginApi({
          account: account,
          password: password
        })
        const res = response
        commit('SET_IS_LOGIN', true)
        dispatch('SET_TOKEN', res.token)
        dispatch('SET_ACCOUNT', res.account)
        commit('SET_IS_REMEMBER', true)
      } catch (e) {
        console.log('loginfail')
        return Promise.reject(e)
      }
    }
  },
  modules: {}
})
