// pop()方法从数组中删除最后一个元素，并返回该元素的值。此方法更改数组的长度。
/**
 * @return 返回数组的最后一个元素，修改原数组
 * @param arr 需要操作的数组
 */
const pop = (arr: any[]): any => {
  let el: any
  el = arr[arr.length - 1]
  arr.length = arr.length - 1
  return el
}
export default pop