import http1 from '@/utils/request.js'

// 添加购物车
export const addCart = ({skuId,count})=>{
  return http1({
    url: '/member/cart',
    method: 'POST',
    data: {
      skuId,
      count
    }
  })
}

// 获取购物车
export const getCart = ()=>{
  return http1({
    url: '/member/cart'
  })
}

// 删除购物车
export const delCart =(ids)=>{
  return http1({
    url: '/member/cart',
    method: 'DELETE',
    data: {
      ids
    }
  })
}

// 合并购物车
export const mergeCart = (data)=>{
  return http1({
    url: '/member/cart/merge',
    method: 'POST',
    data,
  })
}