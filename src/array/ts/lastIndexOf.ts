// lastIndexOf()方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。
/**
 * @return 第一个查询到的位置
 * @param arr 需要操作的数组
 * @param searchValue 查询的字段
 * @param fromIndex 查询起始位置
 */
const lastIndexOf = (arr: any[], searchValue: any, fromIndex: number = 0): number => {
  if (!(arr instanceof Array)) throw new Error("请确保第一个参数类型为数组")
  let num = -1
  fromIndex = fromIndex < 0 ? fromIndex + arr.length : fromIndex
  for (let i = arr.length - 1;i > fromIndex;i--) {
    // 检测NaN
    if ((arr[i] === searchValue) || (searchValue !== searchValue && arr[i] !== arr[i])) {
      num = i
      break
    }
  }
  return num
}

export default lastIndexOf