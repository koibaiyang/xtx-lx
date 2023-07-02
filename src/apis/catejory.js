import http1 from '@/utils/request.js'

export function getCategoryAPI(id) {
  return http1({
    url: '/category',
    params: {id}
  })
}

export const getCategoryFilterAPI = (id) => {
  return http1({
    url:'/category/sub/filter',
    params:{
      id
    }
  })
}