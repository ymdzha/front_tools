/**
 * 节流函数--规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效。
 * fun:函数。delay:时长
 */
export function throttle (fun, delay) {
  let last, deferTimer
  return function (args) {
    const that = this
    const _args = arguments
    const now = +new Date()
    if (last && now < last + delay) {
      clearTimeout(deferTimer)
      deferTimer = setTimeout(function () {
        last = now
        fun.apply(that, _args)
      }, delay)
    } else {
      last = now
      fun.apply(that, _args)
    }
  }
}
/**
 * 防抖函数--在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时
 */
export function debounce (fun, delay) {
  // 记录上一次的延时器
  var timer = null
  const delays = delay || 200
  return function () {
    var args = arguments
    var that = this
    // 清除上一次延时器
    clearTimeout(timer)
    timer = setTimeout(function () {
      fun.apply(that, args)
    }, delays)
  }
}