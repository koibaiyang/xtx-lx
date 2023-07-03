import http1 from '@/utils/request.js'

export const getGoodsDetailAPI = (id)=>{
  return http1({
    url: '/goods',
    params: {
      id
    }
  })
}

export const fetchHotGoodsAPI = ({ id, type, limit = 3 }) => {
  return http1({
    url:'/goods/hot',
    params:{
      id, 
      type, 
      limit
    }
  })
}