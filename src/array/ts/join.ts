// join() 方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。如果数组只有一个项目，那么将返回该项目而不使用分隔符。
/**
 * @return 数组元素连接而成的字符串
 * @param arr 需要操作的数组
 * @param seperator 连字符，默认为逗号
 */
const join = (arr: any[], seperator: string = ',') => {
  if (!(arr instanceof Array)) throw new Error("请确保第一个参数类型为数组")
  let str = "", len = arr.length - 1
  for (let i = 0;i < len;i++) {
    str += arr[i] + seperator
  }
  str += arr[len]
  return str
}
export default join