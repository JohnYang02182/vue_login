<template>
  <div class="container">
    <div class="wrap">
      <div class="card card-login">
        <h2>登入</h2>
        <form @submit="onSubmit">
          <label for="email">帳號 : </label>
          <Field name="account" type="email" placeholder="請輸入帳號" />
          <ErrorMessage name="account"></ErrorMessage>
          <label for="password">密碼 : </label>
          <Field name="password" type="password" placeholder="請輸入密碼" />
          <ErrorMessage name="account"></ErrorMessage>
          <button>submit</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { Field, ErrorMessage, configure, useForm } from 'vee-validate'
import * as yup from 'yup'
import { getUserCookie } from '../utils/cookies'
export default defineComponent({
  name: 'LoginModel',
  components: {
    Field,
    ErrorMessage
  },
  setup() {
    const validationSchema = yup.object({
      account: yup.string().required('這是必填欄位'),
      password: yup.string().required('這是必填欄位')
    })
    const getUserValue = reactive({
      account: '',
      password: ''
    })
    return {
      validationSchema,
      getUserValue
    }
  }
})
</script>
