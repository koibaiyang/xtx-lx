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

export const getSubCategoryAPI = (data) => {
  return http1({
    url:'/category/goods/temporary',
    method:'POST',
    data
  })
}