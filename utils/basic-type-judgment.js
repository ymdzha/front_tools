const toStr = Object.prototype.toString
export function isUndef (v) {
  return v === undefined || v === null
}
export function isDef (v) {
  return v !== undefined && v !== null
}
export function isTrue (v) {
  return v === true
}
export function isFalse (v) {
  return v === false
}
export function isRegExp (v) {
  return toStr.call(v) === '[object RegExp]'
}
export function isArray (v) {
  return toStr.call(v) === '[object Array]'
}
export function isString (v) {
  return toStr.call(v) === '[object String]'
}
export function isObject (v) {
  return toStr.call(v) === '[object Object]'
}
export function isBlob (v) {
  return toStr.call(v) === '[object Blob]'
}
export function isFunction (v) {
  return toStr.call(v) === '[object Function]'
}
export function isNumber (v) {
  return toStr.call(v) === '[object Number]'
}
export function isDate (v) {
  return toStr.call(v) === '[object Date]'
}
export function isEmpty (v) {
  if (typeof v === 'undefined' || v === null || v === '') {
    return false
  } else {
    return true
  }
}