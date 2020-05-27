
export default {
  // 验证是否是[0-100]的小数
  isBtnZeroToHundred (rule, value, callback) {
    setTimeout(() => {
      if (value < -1 || value > 100) {
        callback(new Error('请输入0-100之间的数字'))
      } else {
        callback()
      }
    }, 100)
  },
  // 验证最大输入14位数字
  isBtnZeroTo14 (rule, value, callback) {
    setTimeout(() => {
      if (value > 100000000000000) {
        callback(new Error('请输入小于14位的数字'))
      } else {
        callback()
      }
    }, 100)
  }
}
