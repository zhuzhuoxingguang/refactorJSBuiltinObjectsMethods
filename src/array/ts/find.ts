
// find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。
/**
 * @return 数组当中满足测试条件的第一个元素的值
 * @param arr 需要操作的数组
 * @param fn 操作函数，查找条件，具有boolean的返回值
 */
const find = (arr: any[], fn: (arg: any, index?: number) => boolean): any => {
  if (!(arr instanceof Array)) throw new Error("请确保第一个参数类型为数组")
  let el: any = undefined
  for (let i = 0;i < arr.length;i++) {
    if (fn(arr[i], i)) {
      el = arr[i]
      break
    }
  }
  return el
}
export default find
