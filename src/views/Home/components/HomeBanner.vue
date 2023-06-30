<script setup>
import { getBannerAPI } from '@/apis/homeBannerAPI.js'
import { onMounted, ref } from 'vue'
const bannerList = ref([])
const getBanner = async () => {
  const res = await getBannerAPI()
  // console.log(res)
  bannerList.value = res.data.result
  // console.log(bannerList)
}
onMounted(async () => {
  getBanner()
})
</script>
<template>
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
</template>

<style scoped lang="scss">
.banner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
