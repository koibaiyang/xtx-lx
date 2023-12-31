import axios from "axios";
import { ElMessage } from 'element-plus'
import 'element-plus/es/components/message/style/css'
import {useUserStore} from '@/stores/user.js'
import { storeToRefs } from 'pinia'
import router from '@/router'


const http1 = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
})
// let flag = true

// 添加请求拦截器
http1.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  const userStore = useUserStore()
  const { userInfo } = storeToRefs(userStore)
  // console.log(userInfo);
  const token = userInfo.value?.token
  if(token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
http1.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  
  // console.log(response);
  return response;
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  ElMessage({
    type: 'warning',
    message:error.response?.data.message
  })
  const userStore = useUserStore()
  if(error.response?.status === 401){
    userStore.clearInfo()
    router.push('/login')
  }

  return Promise.reject(error);
});

export default http1