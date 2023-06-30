<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'
import { useCategpryStore } from '@/stores/category.js'
import { onMounted } from 'vue'

const categoryStore = useCategpryStore()
onMounted(() => {
  categoryStore.getCategory()
})
</script>

<template>
  <LayoutFixed></LayoutFixed>
  <LayoutNav />
  <LayoutHeader />
  <!-- <RouterView :key="$route.fullPath" /> -->
  <RouterView></RouterView>
  <LayoutFooter />
</template>