import { defineStore } from 'pinia'
import { ref } from 'vue'
import { doLoginAPI } from '@/apis/userAPI.js'

export const useUserStore = defineStore('user', ()=>{
  const info = JSON.parse(localStorage.getItem('user'))
  const userInfo = ref(info)
  const getUserInfo = async ({account, password})=>{
    const res = await doLoginAPI({account, password})
    // console.log(userInfo);
    userInfo.value = res.data.result
    const data = res.data.result
    localStorage.setItem('user',JSON.stringify(data))
  }
  const clearInfo = ()=>{
    userInfo.value = {}
    localStorage.removeItem('user')
  }
  return {
    userInfo,
    getUserInfo,
    clearInfo
  }
})