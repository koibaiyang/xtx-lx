import { computed, onUnmounted, ref } from 'vue'

export const useCountDown = ()=>{
  const time = ref(0)
  const formatTime = computed(()=>{
    const mm = Math.floor(time.value/60)
    const ss = time.value%60
    return `${mm}分${ss}秒`
  })
  // const formatTime = computed(()=>time.value)
  let timer = null
  const start = (n)=>{
    time.value = n
    timer = setInterval(()=>{
      time.value--
    },1000)
  }
  onUnmounted(()=>timer && clearInterval(timer))
  return {
    formatTime,
    start
  }
}