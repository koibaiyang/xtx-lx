import http1 from '@/utils/request.js'

export const doLoginAPI = ({account, password})=>{
  return http1({
    url: '/login',
    method: 'post',
    data: {
      account,
      password
    }
  })
}