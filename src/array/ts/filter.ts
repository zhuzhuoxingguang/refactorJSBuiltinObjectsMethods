

const filter = (arr: any[], fn: (any, index?: number) => boolean): any[] => {
  if (!(arr instanceof Array)) throw new Error("请确保第一个参数类型为数组")
  let results = []
  for (let i = 0;i < arr.length;i++) {
    if (fn(arr[i], i))
      results[results.length] = arr[i]
  }
  return results
}
export default filter