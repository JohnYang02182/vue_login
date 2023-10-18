<template>
  <div class="userInfo">
    <span class="userName">姓名: {{ name }}</span>
    <span class="userEmail">e-mail: {{ email }}</span>
  </div>
</template>
<script setup lang="ts">
import { defineComponent, ref } from 'vue'

const name = ref('')
const email = ref('')

</script>
