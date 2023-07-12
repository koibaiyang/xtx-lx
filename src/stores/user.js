import { defineStore } from 'pinia'
import { ref } from 'vue'
import { doLoginAPI } from '@/apis/userAPI.js'
import {useCartStore} from './cartStore.js'
import {mergeCart} from '@/apis/cart.js'

export const useUserStore = defineStore('user', ()=>{
  const cartStore = useCartStore()
  // const info = JSON.parse(localStorage.getItem('user'))
  // const userInfo = ref(info)
  const userInfo = ref({})
  const getUserInfo = async ({account, password})=>{
    const res = await doLoginAPI({account, password})
    // console.log(userInfo);
    userInfo.value = res.data.result
    // const data = res.data.result
    // localStorage.setItem('user',JSON?.stringify(data))
    await mergeCart(cartStore.cartList.map(item=>{
      return {
        skuId: item.skuId,
        selected: item.selected,
        count: item.count
      }
    }))
    cartStore.updateList()
  }
  const clearInfo = ()=>{
    userInfo.value = {}
    localStorage.setItem('user', '')
    cartStore.clearList()
  }
  return {
    userInfo,
    getUserInfo,
    clearInfo
  }
},
{
  persist: true,
})