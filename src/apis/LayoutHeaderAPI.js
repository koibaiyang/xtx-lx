import http1 from "../utils/request";

export function getCategoryAPI() {
  return http1({
    url: '/home/category/head'
  })
}