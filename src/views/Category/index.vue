<script setup>
import { getCategoryAPI } from '@/apis/catejory.js'
import { onMounted, ref } from 'vue'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'
import { getBannerAPI } from '@/apis/homeBannerAPI.js'
import GoodsItem from '../Home/components/GoodsItem.vue'

// 面包屑
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
</script>

<template>
  <div class="top-category">
    <div class="container m-top-20">
      <!-- 面包屑 -->
      <div class="bread-container">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{categoryData.name}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- 轮播图 -->
      <div class="banner">
        <div class="block text-center">
          <el-carousel height="500px">
            <el-carousel-item v-for="item in bannerList" :key="item.id">
              <a href="javascript:;">
                <img :src="item.imgUrl" alt="">
              </a>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <!-- 商品列表 -->
      <div class="sub-list">
        <h3>全部分类</h3>
        <ul>
          <li v-for="i in categoryData.children" :key="i.id">
            <RouterLink to="/">
              <img :src="i.picture" />
              <p>{{ i.name }}</p>
            </RouterLink>
          </li>
        </ul>
      </div>
      <div class="ref-goods" v-for="item in categoryData.children" :key="item.id">
        <div class="head">
          <h3>- {{ item.name }}-</h3>
        </div>
        <div class="body">
          <GoodsItem v-for="good in item.goods" :good="good" :key="good.id" />
        </div>
      </div>
    </div>

  </div>

</template>


<style scoped lang="scss">
.top-category {
  h3 {
    font-size: 28px;
    color: #666;
    font-weight: normal;
    text-align: center;
    line-height: 100px;
  }

  .sub-list {
    margin-top: 20px;
    background-color: #fff;

    ul {
      display: flex;
      padding: 0 32px;
      flex-wrap: wrap;

      li {
        width: 168px;
        height: 160px;

        a {
          text-align: center;
          display: block;
          font-size: 16px;

          img {
            width: 100px;
            height: 100px;
          }

          p {
            line-height: 40px;
          }

          &:hover {
            color: $xtxColor;
          }
        }
      }
    }
  }

  .ref-goods {
    background-color: #fff;
    margin-top: 20px;
    position: relative;

    .head {
      .xtx-more {
        position: absolute;
        top: 20px;
        right: 20px;
      }

      .tag {
        text-align: center;
        color: #999;
        font-size: 20px;
        position: relative;
        top: -20px;
      }
    }

    .body {
      display: flex;
      justify-content: space-around;
      padding: 0 40px 30px;
    }
  }

  .bread-container {
    padding: 25px 0;
  }
}
.banner {
  width: 1240px;
  height: 500px;
  margin: 0 auto;
}
.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item img {
  width: 100%;
  height: 100%;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>