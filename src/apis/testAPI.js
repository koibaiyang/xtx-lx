import http1 from '@/utils/request.js'

export function test () {
  return http1({
    url: 'home/category/head'
  })
}