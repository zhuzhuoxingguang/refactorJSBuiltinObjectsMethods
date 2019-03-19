/**
 * push() 方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度。
 */
/**
 * @return 返回添加过新的元素的arr数组
 * @param arr 需要操作的数组
 * @param rest 需要添加到arr中的元素
 */
const push = (arr: any[], ...rest): number => {
  if (!(arr instanceof Array)) throw new Error("请确保第一个参数类型为数组")
  for (let i = 0;i < rest.length;i++) {
    arr[arr.length] = rest[i]
  }
  return arr.length
}
export default push