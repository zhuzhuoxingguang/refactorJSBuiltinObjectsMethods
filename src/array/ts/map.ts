// map() 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。
/**
 * @return 返回新数组实例
 * @param arr 需要操作的数组
 * @param fn 操作函数
 */
const map = (arr: any[], fn: (item: any, index: number) => any): any[] => {
  if (!(arr instanceof Array)) throw new Error("请确保第一个参数类型为数组")
  let results = []
  for (let i = 0;i < arr.length;i++) {
    results[i] = fn(arr[i], i)
  }
  return results
}

export default map