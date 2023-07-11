
// 引入初始化样式 
import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// 导入图片懒加载插件
import { imgLazyPlugin } from '@/directives/index.js'

// 导入注册全局组件插件
import {xtxPlugin} from '@/components/index.js'

// import { test } from '@/apis/testAPI.js'
// test().then(res => {
//   console.log(res);
// })

import App from './App.vue'
import router from './router'

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(imgLazyPlugin)
app.use(xtxPlugin)

app.mount('#app')



