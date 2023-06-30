// 分类区域模块逻辑
import { getCategoryAPI } from '@/apis/catejory.js'
import { onMounted, ref } from 'vue'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'
// 面包屑
export function useCategory () {
  const route = useRoute()
  const categoryData = ref({})
  const getCategory = async (id = route.params.id) => {
    const res = await getCategoryAPI(id)
    // console.log(res)
    categoryData.value = res.data.result
    // console.log(categoryData)
  }
  onMounted(() => getCategory())

  // 路由缓存问题解决方法
  onBeforeRouteUpdate((to) => {
    // console.log('router更新了')
    // console.log(to)
    getCategory(to.params.id)
  })
  return {
    categoryData
  }
}