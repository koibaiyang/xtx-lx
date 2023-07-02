import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/LayoutHeaderAPI.js'
import { ref } from 'vue'

// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id
export const useCategpryStore = defineStore('category', ()=>{
  const categoryList = ref([])
  const getCategory = async () => {
    const { data } = await getCategoryAPI()
    // console.log(data.result)
    categoryList.value = data.result
    // console.log(data);
  }
  return {categoryList, getCategory}
})