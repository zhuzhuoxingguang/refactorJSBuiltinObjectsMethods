// forEach() 方法对数组的每个元素执行一次提供的函数。
/**
 * @return undefined
 * @param arr 需要操作的数组
 * @param fn 操作函数
 */
const forEach = (arr: any[], fn: (arg: any, index?: number) => any): any[] => {
  if (!(arr instanceof Array)) throw new Error("请确保第一个参数类型为数组")
  for (let i = 0;i < arr.length;i++) {
    fn(arr[i], i)
  }
  return arr
}

export default forEach