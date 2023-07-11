import http1 from '@/utils/request.js'

export const getCheckoutAPI = ()=>{
  return http1({
    url: '/member/order/pre'
  })
}