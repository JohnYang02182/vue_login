<template>
  <div class="container">
    <div class="wrap">
      <div class="card card-login">
        <h2>登入</h2>
        <Form @submit="onSubmit" :validation-schema="validationSchema">
          <label for="email">帳號 : </label>
          <Field name="account" type="email" placeholder="請輸入帳號" />
          <ErrorMessage name="account"></ErrorMessage>
          <label for="password">密碼 : </label>
          <Field name="password" type="password" placeholder="請輸入密碼" />
          <ErrorMessage name="account"></ErrorMessage>
          <button>submit</button>
        </Form>
      </div>
      <p>{{ getUserValue.account }}</p>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { loginDealer, subParameter } from '../hooks/useLogin'
import { reactive } from 'vue'
import { Form, Field, ErrorMessage, useForm } from 'vee-validate'
import * as yup from 'yup'
import router from '../router/index'

const { handleSubmit} = useForm()
const validationSchema = yup.object({
  account: yup.string().required('這是必填欄位'),
  password: yup.string().required('這是必填欄位')
})
const getUserValue = reactive({
  account: '',
  password: ''
})

async function onSubmit(values: subParameter){
  let res = await loginDealer(values)
  if(res.isLogin === true) {
    console.log('aaaaa')
    router.push('/LoginSuc')
  }
  else {
    console.log('failed =', res)
  }
}

</script>
