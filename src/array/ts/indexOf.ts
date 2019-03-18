// indexOf()方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。
/**
 * @return 第一个查询到的位置
 * @param arr 需要操作的数组
 * @param searchValue 查询的字段
 * @param fromIndex 查询起始位置
 */
const indexOf = (arr: any[], searchValue: any, fromIndex: number = 0): number => {
  let num = -1
  fromIndex = fromIndex < 0 ? fromIndex + arr.length : fromIndex
  for (let i = fromIndex;i < arr.length;i++) {
    if (i === 2) {
      console.log(searchValue, arr[i])
    }
    // 检测NaN
    if ((arr[i] === searchValue) || (searchValue !== searchValue && arr[i] !== arr[i])) {

      num = i
      break
    }
  }
  return num
}

export default indexOf