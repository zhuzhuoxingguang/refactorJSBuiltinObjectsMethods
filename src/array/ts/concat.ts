/***
 * 数组原有方法
 * concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。
 */

/**
 * @return 返回一个新数组实例
 * @param rest 所有需要连接合并的数组
 */
const concat = (...rest: any) => {
  if (!(rest[0] instanceof Array)) throw new Error("请确保第一个参数类型为数组")
  let results = []
  for (let i = 0;i < rest.length;i++) {
    if (!(rest[i] instanceof Array)) {
      results[results.length] = rest[i]
      break;
    }
    for (let j = 0;j < rest[i].length;j++) {
      results[results.length] = rest[i][j]
    }
  }
  return results
}
export default concat
