// slice() 方法返回一个新的数组对象，这一对象是一个由 begin和 end（不包括end）决定的原数组的浅拷贝。原始数组不会被改变。
/**
 * @return 返回新的数组实例
 * @param arr 需要操作的数组
 * @param begin 开始位置，默认为0， 如果小于0 直接加上数组长度，如果还小于0，修正为0
 * @param end 结束位置，默认为数组长度，如果小于0 加上数组长度，如果大于数组长度，修正为数组的长度
 */
const slice = (arr: any[], begin: number = 0, end: number = arr.length): any[] => {
  if (!(arr instanceof Array)) throw new Error("请确保第一个参数类型为数组")
  let results = []
  if (begin < 0) begin += arr.length      // 如果begin < 0， begin = 数组长度+begin 
  if (begin < 0) begin = 0                // 如果还小于0， 则直接修正为0
  if (end < 0) end += arr.length          // 如果end < 0， end = 数组长度+end 
  if (end > arr.length) end = arr.length  // 如果end > 数组长度， end = 数组长度
  for (let i = begin;i < end;i++) {
    results[results.length] = arr[i]
  }
  return results
}
export default slice
