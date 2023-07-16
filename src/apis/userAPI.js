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

export const getLikeListAPI = ({ limit = 4 }) => {
  return http1({
    url:'/goods/relevant',
    params: {
      limit 
    }
  })
}