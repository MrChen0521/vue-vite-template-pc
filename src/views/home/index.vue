<script lang="ts" setup>
import { useUserStoer } from '@/store/module/user'
const userStore = useUserStoer()
</script>
<template>
  <div class="container">
    <p class="text-center text-2xl mb-10">home page</p>
    <p>hello {{ userStore.name }}</p>
    <div class="w-full text-center">
      <router-link class="mx-auto" to="/login">退出登录</router-link>
    </div>
  </div>
</template>
