import { useCookies } from '@vueuse/integrations/useCookies'
import { string } from 'yup'

const cookies = useCookies()

enum CookieKey {
  locale = 'locale',
  user = 'user',
  isRemember = 'isRemember'
}

export const setLocaleCookie = (language: string) => {
  cookies.set(CookieKey.locale, language)
}

export const getUserCookie = (): string | undefined => cookies.get(CookieKey.user)
export const setUserCookie = (user: string) => cookies.set(CookieKey.user, user)
export const removeUserCookie = () => cookies.remove(CookieKey.user)

export const getIsRememberCookie = (): boolean | undefined => cookies.get(CookieKey.isRemember)
export const setIsRememberCookie = (isRemember: boolean | undefined) => cookies.set(CookieKey.isRemember, isRemember)
export const removeIsRememberCookie = () => cookies.remove(CookieKey.isRemember)
