<script setup>
import { getCategoryFilterAPI, getSubCategoryAPI } from '@/apis/catejory.js'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import GoodsItem from '@/views/Home/components/GoodsItem.vue'

// 面包屑导航
const categoryFilterData = ref({})
const route = useRoute()
const getCategoryFilter = async () => {
  const res = await getCategoryFilterAPI(route.params.id)
  // console.log(res)
  categoryFilterData.value = res.data.result
  // console.log(categoryFilterData)
}
onMounted(() => {
  getCategoryFilter()
})

// 商品列表数据获取
const data = ref({
  categoryId: route.params.id,
  page: 1,
  pageSize: 20,
  sortFField: 'publishTime',
})
const goodsItems = ref([])
const getSubCategory = async () => {
  const res = await getSubCategoryAPI(data.value)
  // console.log(res)
  goodsItems.value = res.data.result.items
  // console.log(goodsItems)
}
onMounted(() => getSubCategory())

// tab栏切换
const tabchange = () => {
  // console.log('tab栏切换了' + data.value.sortFField)
  data.value.page = 1
  getSubCategory()
}

// 禁止加载
const disabled = ref(false)

// 轮动加载
const load = async () => {
  data.value.page++
  const res = await getSubCategoryAPI(data.value)
  // console.log(res)
  goodsItems.value = [...goodsItems.value, ...res.data.result.items]
  // console.log(goodsItems)
  disabled.value = res.data.result.items.length === 0
}
</script>

<template>
  <div class="container ">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/category/${categoryFilterData.parentId}` }">{{categoryFilterData.parentName}}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{categoryFilterData.name}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs v-model="data.sortFField" @tab-change="tabchange">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div class="body" v-infinite-scroll="load" :infinite-scroll-disabled="disabled">
        <!-- 商品列表-->
        <GoodsItem :good="item" v-for="item in goodsItems" :key="item.id"></GoodsItem>

      </div>
    </div>
  </div>

</template>



<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
}
</style>