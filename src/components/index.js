import ImgChange from './ImgChange/index.vue'
import XtxSku from './XtxSku/index.vue'

export const xtxPlugin = {
  install(app) {
    // 配置此应用
    app.component('ImgChange', ImgChange).component('XtxSku', XtxSku)
  }
}