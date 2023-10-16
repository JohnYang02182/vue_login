import { defineStore } from 'pinia'
interface State {
  token: string
}
const state: State = {
  token: ''
}
export const useUserState = defineStore('user',{
    state: () => ( state ),
    actions: {
      setToken(param:string) {
        this.token = param
        localStorage.setItem('token', param)
      }
    }
  }
)
