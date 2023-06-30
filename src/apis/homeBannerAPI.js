import http1 from '@/utils/request.js'

export function getBannerAPI () {
  return http1({
    url: '/home/banner'
  })  
} 

export function getNewListAPI () {
  return http1({
    url: '/home/new'
  })
}

export function getHotListAPI () {
  return http1({
    url: '/home/hot'
  })
}

export function getGoodsAPI () {
  return http1({
    url: '/home/goods'
  })
}