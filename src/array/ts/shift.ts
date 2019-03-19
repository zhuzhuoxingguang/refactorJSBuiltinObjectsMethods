// shift() 方法从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。
/**
 * @return 数组的第一个元素
 * @param arr 需要操作的数组
 */
const shift = (arr: any[]): any => {
  if (!(arr instanceof Array)) throw new Error("请确保参数类型为数组")
  let el = arr[0]
  for (let i = 0;i < arr.length;i++) {
    arr[i] = arr[i + 1]
  }
  arr.length = arr.length - 1
  return el
}
export default shift
