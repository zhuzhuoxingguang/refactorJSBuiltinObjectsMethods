// 参考函数式编程一书，添加的函数，目的是合并数组
/**
 * @return 返回合并后的数组实例， 两个数组长度如果不等，则对超出部分的元素不予处理
 * @param arr 需要合并的数组1
 * @param others 需要合并的数组2
 * @param fn 操作函数 需要有返回值，确认两个元素以什么规则合并
 */
const zip = (arr: any[], others: any[], fn: (arg0: any, arg1: any) => any) => {
  if (!(arr instanceof Array)) throw new Error("请确保第一个参数类型为数组")
  if (!(others instanceof Array)) throw new Error("请确保第二个参数类型为数组")
  let results = []
  let min = Math.min(arr.length, others.length)
  for (let i = 0;i < min;i++) {
    results[results.length] = fn(arr[i], others[i])
  }
  return results
}
export default zip