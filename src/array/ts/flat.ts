// flat() 方法会递归到指定深度将所有子数组连接，并返回一个新数组。
/**
 * 说明：实现上略有差别，不是递归到指定深度，而是要不全部扁平化，要不只有第一层数组扁平化，依赖depth
 * @return 返回扁平化之后的数组实例
 * @param arr 需要操作的数组
 * @param depth 布尔值，决定是否扁平化整个数组，depth=true相当于数组方法flat的参数Infinity
 *  depth=false 相当于数组方法flat的参数为1
 */
const flat = (arr: any[], depth: boolean = false): any[] => {
  if (!(arr instanceof Array)) throw new Error("请确保第一个参数类型为数组")
  let results = []
  for (let i = 0;i < arr.length;i++) {
    if (!(arr[i] instanceof Array)) {
      results[results.length] = arr[i]
    } else {
      for (let j = 0;j < arr[i].length;j++) {
        if (depth && (arr[i][j] instanceof Array)) {
          let dees = flat(arr[i][j], depth)
          if (dees instanceof Array) {
            for (let n = 0;n < dees.length;n++) {
              results[results.length] = dees[n]
            }
          }
        } else {
          results[results.length] = arr[i][j]
        }
      }
    }
  }
  return results
}
export default flat