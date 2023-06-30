// banner区域逻辑模块
import {getBannerAPI} from '@/apis/homeBannerAPI.js'
import { onMounted, ref } from 'vue'

export function useBanner () {
  // 轮播图
const bannerList = ref([])
const getBanner = async () => {
  const res = await getBannerAPI(2)
  // console.log(res)
  bannerList.value = res.data.result
  // console.log(bannerList)
}
onMounted(async () => {
  getBanner()
})
return {
  bannerList
}
}