// import { useRoute } from 'vue-router'
import { getOrderInfo } from '@/apis/pay.js'
import { ref } from 'vue'
import { useCountDown } from '@/composables/countDownTime.js'


// 获取订单详情
export const getInfoStore = (id)=>{
  // const route = useRoute()
  const { start, formatTime } = useCountDown()
  const payInfo = ref({})
  const getInfo = async ()=>{
    const res = await getOrderInfo(id)
    payInfo.value = res.data.result
    start(res.data.result.countdown)
    // start(60)
  }
  return {
    getInfo,
    payInfo,
    formatTime
  }
}