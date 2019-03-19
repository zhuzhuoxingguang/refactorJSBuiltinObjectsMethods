// fill() 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。
/**
 * @return 修改后的数组
 * @param arr 需要操作的数组
 * @param value 填充的值
 * @param start 起始位置， 小于0的话，就+=arr.length
 * @param end 结束为止，不填，则默认为数组长度，小于0的话，就+=arr.length
 */
const fill = (arr: any[], value: any, start: number = 0, end?: number) => {
  if (!(arr instanceof Array)) throw new Error("请确保第一个参数类型为数组")
  end = end ? (end < 0 ? arr.length + end : end) : arr.length
  start = start < 0 ? start + arr.length : start
  for (let i = start;i < end;i++) {
    arr[i] = value
  }
  return arr
}
export default fill