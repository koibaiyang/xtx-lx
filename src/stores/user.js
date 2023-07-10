import { defineStore } from 'pinia'
import { ref } from 'vue'
import { doLoginAPI } from '@/apis/userAPI.js'

export const useUserStore = defineStore('user', ()=>{
  const userState = ref({})
  const getUserInfo = async ({account, password})=>{
    const res = await doLoginAPI({account, password})
    userState.value = res.data.result
    console.log(userState);
  }
  return { userState,getUserInfo}
})