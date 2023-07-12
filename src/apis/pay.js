import http1 from '@/utils/request.js'

export const getOrderInfo = (id)=>{
  return http1({
    url: `/member/order/${id}`
  })
}