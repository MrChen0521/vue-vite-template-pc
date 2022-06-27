import { defineStore } from 'pinia'

export const useUserStoer = defineStore('user', {
  state() {
    return {
      name: 'Mr.Chen'
    }
  }
})
