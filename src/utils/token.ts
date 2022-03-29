import { useStorage } from '@vueuse/core'

const tokenKey = 't'

export const getToken = (): string | null => {
  return localStorage.getItem(tokenKey)
}

export const setToken = (token: string): void => {
  useStorage(tokenKey, token)
  return localStorage.setItem(tokenKey, token)
}

export const removeToken = (): void => {
  useStorage(tokenKey, null)
  return localStorage.removeItem(tokenKey)
}
