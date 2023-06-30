<script setup>
import HomePanel from './HomePanel.vue'
import { getHotListAPI } from '@/apis/homeBannerAPI.js'
import { onMounted, ref } from 'vue'

const hotList = ref([])

const getHotList = async () => {
  const res = await getHotListAPI()
  // console.log(res)
  hotList.value = res.data.result
}

onMounted(() => getHotList())
</script>
<template>

  <HomePanel title="人气推荐" subTitle="人气推荐 更多商品">
    <ul class="goods-list">
      <li v-for="item in hotList" :key="item.id">
        <RouterLink to="/">
          <img v-imgSrc="item.picture" alt="" />
          <p class="name">{{item.title}}</p>
          <p class="desc"> {{ item.alt }} </p>
          <!-- <p class="price">&yen;{{ item.price }}</p> -->
        </RouterLink>
      </li>
    </ul>
  </HomePanel>

</template>

<style lang="scss" scoped>
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;

  li {
    width: 306px;
    height: 380px;

    background: #f0f9f4;
    transition: all 0.5s;

    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }

    img {
      width: 306px;
      height: 306px;
    }

    p {
      font-size: 18px;
      padding-top: 12px;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      font-weight: 700;
    }

    .desc {
      padding: 5px 0;
      color: #aaa;
      font-size: 16px;
      font-weight: 400;
    }
  }
}
</style>