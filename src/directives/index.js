import { useIntersectionObserver } from '@vueuse/core'

// 图片懒加载功能实现
export const imgLazyPlugin = {
  install(app) {
    app.directive('imgSrc', (el, binding) => {

      const {stop} = useIntersectionObserver(
         el,
         ([{ isIntersecting }], ) => {
           
           if(isIntersecting) {
             // console.log(111);
             el.src = binding.value
             stop() // 阻止重复监听el
           }
         },
       )
   })
  }
}