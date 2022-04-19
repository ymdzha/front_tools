// 深copy
export function deepClone (origin) {
  if (!isObject(origin)) return origin
  var target = isArray(origin) ? [] : {}
  for (var prop in origin) {
    if (origin.prototype.hasOwnProperty.call(prop)) {
      var value = origin[prop]
      if (isObject(value)) {
        target[prop] = deepClone(value)
      } else {
        target[prop] = value
      }
      // if...else...可换成三目运算符
      // target[prop] = isObject(value) ? deepClone(value) : value
    }
  }
  return target
}

// 数组去重
export function distinct (a, b) {
  return Array.from(new Set([...a, ...b]))
}

// 根据key值分组
export function arrGroup(arr, fn, currentId) {
  const keyArr = [...new Set(arr.map(item => fn(item)))];
  return keyArr.map(key => arr.filter(i => i[currentId] === key))
}
