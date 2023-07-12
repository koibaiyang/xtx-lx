// import { useRoute } from 'vue-router'
import { getOrderInfo } from '@/apis/pay.js'
import { ref } from 'vue'

// 获取订单详情
export const getInfoStore = (id)=>{
  // const route = useRoute()
  const payInfo = ref({})
  const getInfo = async ()=>{
    const res = await getOrderInfo(id)
    payInfo.value = res.data.result
  }
  return {
    getInfo,
    payInfo
  }
}