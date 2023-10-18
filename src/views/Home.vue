<template>
  <Header />
  <Login />
  <template v-if="($route.meta.login !== true)"> 
    <router-view></router-view>
  </template>
  
</template>
<script setup lang="ts">
import Login from './Login.vue'
import Header from '../components/Header.vue'
</script>