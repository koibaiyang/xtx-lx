import { defineStore } from "pinia";
import { computed, ref } from "vue";
import {useUserStore} from './user.js'
import {addCart,getCart,delCart} from '@/apis/cart.js'
import {useRouter} from 'vue-router'
import 'element-plus/es/components/message/style/css'
import { ElMessage } from 'element-plus'


export const useCartStore = defineStore('cart',()=>{
  // 购物车列表
  const cartList = ref([])
  const userStore = useUserStore()
  // 更新购物车列表
  const updateList = async ()=>{
    const res = await getCart()
    cartList.value = res.data.result
  }
  // 添加购物车
  const addCount = async (goods)=>{
      if(userStore.userInfo?.token){
        // 用户信息添加购物车
        const {skuId, count} = goods
        await addCart({skuId, count})
        updateList()
      }else{
        // 本地添加购物车
        const item = cartList.value.find((item)=>goods.skuId === item.skuId)
        if(item){
          // 有商品
          item.count = item.count + goods.count
        }else{
          // 没有这种商品
          cartList.value.push(goods)
        }
      }
  }
  // 删除购物车
  const delCount = async (skuId)=>{
    if(userStore.userInfo?.token){
      await delCart([skuId])
      updateList()
    }else{
      cartList.value = cartList.value.filter(item=>item.skuId !== skuId)
    }
  }
  // 退出登录清除本地购物车数据、
  const clearList = ()=>{
    cartList.value = []
  }
  // 总商品数量
  const sumCount = computed(()=>{return cartList.value.reduce((prev,now)=>{ return prev+now.count},0)})
  // 总商品价格
  const totalPrice = computed(()=>{ return cartList.value.reduce((prev,now)=>{ return prev+now.count*now.price},0)})
  // 已选择商品数量
  const checkSum = computed(()=>{return cartList.value.filter(item=>item.selected === true).reduce((prev,now)=>{ return prev+now.count},0)})
  // 已选择商品价格
  const checkPrice = computed(()=>{ return cartList.value.filter(item=>item.selected === true).reduce((prev,now)=>{ return prev+now.count*now.price},0)})
  // 是否全选
  const isAll = computed(() => {return cartList.value.every((item) => item.selected === true)})
  // 全选控制单选
  const isCheck = (checked)=>{ cartList.value.forEach(item=>{item.selected = checked})}
  // 下单结算
  const router = useRouter()
  const submit = ()=>{
    console.log(1);
    if(userStore.userInfo.token){
      console.log(2);
      router.push('/checkout')
    }else{
      ElMessage.error('请先登录')
      console.log(3);
    }
    
  }
  return {
    cartList,
    addCount,
    delCount,
    sumCount,
    totalPrice,
    checkSum,
    checkPrice,
    isAll,
    isCheck,
    clearList,
    updateList,
    submit
  }
},
{
  persist: true,
})