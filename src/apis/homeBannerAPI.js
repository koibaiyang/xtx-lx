import http1 from '@/utils/request.js'

export function getBannerAPI () {
  return http1({
    url: '/home/banner'
  })  
} 