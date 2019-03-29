// indexOf()方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。
/**
 * @return 第一个查询到的位置
 * @param arr 需要操作的数组
 * @param searchValue 查询的字段
 * @param fromIndex 查询起始位置
 */
const indexOf = (arr: any[], searchValue: any, fromIndex: number = 0): number => {
  if (!(arr instanceof Array)) throw new Error("请确保第一个参数类型为数组")
  fromIndex = fromIndex < 0 ? (fromIndex + arr.length < 0 ? 0 : fromIndex + arr.length) : fromIndex
  if (fromIndex >= arr.length) return -1
  for (let i = fromIndex;i < arr.length;i++) {
    // 检测NaN
    if ((arr[i] === searchValue) || (searchValue !== searchValue && arr[i] !== arr[i])) {
      return i
    }
  }
  return -1
}

export default indexOf