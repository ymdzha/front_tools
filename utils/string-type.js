// 字符串去除后六位 20180101000000 => 20180101
export function stringDeleteLast (str) {
  console.log(str)
  const s1 = str.substring(0, str.length - 6)
  return s1
}