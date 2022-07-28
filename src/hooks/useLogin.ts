import * as yup from 'yup'
import { configure, useForm } from 'vee-validate'
import { useStore } from 'vuex'
export const useLogin = () => {
  const store = useStore()
  const validationSchema = yup.object({
    username: yup.string().required('這是必填欄位'),
    password: yup.string().required('這是必填欄位')
  })
  return {
    validationSchema
  }
}
