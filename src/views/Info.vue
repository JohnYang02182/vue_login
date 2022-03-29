<template>
  <div class="userInfo">
    <span class="userName">姓名: {{ name }}</span>
    <span class="userEmail">e-mail: {{ email }}</span>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'
import { loginInfo } from '../api/LoginApi'

export default defineComponent({
  name: 'Info',
  setup() {
    const name = ref('')
    const email = ref('')
    return {
      name,
      email
    }
  }
})
</script>
