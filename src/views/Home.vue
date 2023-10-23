<template>
  <Header />
  <template v-if="($route.meta.login !== true)">
    <Login />
  </template>
  <template v-else-if="($route.meta.login !== true)"> 
    <router-view></router-view>
  </template>
  
</template>
<script setup lang="ts">
import Login from './Login.vue'
import Header from '../components/Header.vue'
</script>