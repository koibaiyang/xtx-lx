
// 引入初始化样式 
import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

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

app.use(createPinia())
app.use(router)
app.use(imgLazyPlugin)
app.use(xtxPlugin)

app.mount('#app')



