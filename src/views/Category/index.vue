<script setup>
import { getCategoryAPI } from '@/apis/catejory.js'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { getBannerAPI } from '@/apis/homeBannerAPI.js'

// 面包屑
const route = useRoute()
const categoryData = ref({})
const getCategory = async () => {
  const res = await getCategoryAPI(route.params.id)
  // console.log(res)
  categoryData.value = res.data.result
  // console.log(categoryData)
}
onMounted(() => getCategory())
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
    </div>
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