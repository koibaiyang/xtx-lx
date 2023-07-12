import http1 from '@/utils/request.js'

export const getCheckoutAPI = ()=>{
  return http1({
    url: '/member/order/pre'
  })
}

export const createOrderAPI = (data)=>{
  return http1({
    url: '/member/order',
    method: 'POST',
    data,
  })
}