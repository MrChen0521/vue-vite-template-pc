<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const handleLogin = () => {
  router.replace('/home')
}
</script>
<template>
  <div class="login page">
    <h2 class="text-center text-5xl">Login</h2>

    <div class="form form-data text-center mt-20">
      <button class="hover:border-blue-400 hover:text-blue-400 px-10 py-2 border-2 rounded-[20px]" @click="handleLogin">
        登录
      </button>
    </div>
  </div>
</template>
