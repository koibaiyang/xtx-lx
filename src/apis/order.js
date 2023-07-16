import http1 from '@/utils/request.js'

/*
params: {
	orderState:0,
  page:1,
  pageSize:2
}
*/
export const getUserOrder = (params) => {
  return http1({
    url:'/member/order',
    method:'GET',
    params
  })
}