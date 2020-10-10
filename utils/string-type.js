// 字符串去除后六位 20180101000000 => 20180101
export function stringDeleteLast (str) {
  console.log(str)
  const s1 = str.substring(0, str.length - 6)
  return s1
}

// 字母大小写取反
export function NegationStr (str) {
  return str = str.replace(/[a-zA-Z]/g, content => {
    return content.toUpperCase() ===  content ?  content.toLowerCase() : content.toUpperCase()
  })
}
