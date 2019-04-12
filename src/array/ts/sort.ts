// sort() 方法用原地算法对数组的元素进行排序，并返回数组。排序算法现在是稳定的。默认排序顺序是根据字符串Unicode码点。
// 确实不会算法，也就知道快速排序、冒泡排序、插入排序，所以这里采用冒泡排序实现吧
/**
 * @return 返回排序后的数组
 * @param arr 需要操作的数组
 * @param fn 操作函数，数组当中如果存在非数字类型的元素，按Unicode码点升序排序 如果全都是数字， 依照操作函数的返回值确定是升序还是降序，默认为升序
 */
const sort = (arr: any[], fn = (a: any, b: any): any => (a - b)) => {
  if (!(arr instanceof Array)) throw new Error("请传入数组类型的参数")
  // 判断是否全都为数字
  let isAllNumber = true
  for (let i = 0;i < arr.length;i++) {
    isAllNumber = typeof arr[i] === "number"
    if (!isAllNumber) break
  }
  if (!isAllNumber) {
    // 如果有非数字元素，按Unicode码点升序
    fn = (a, b) => ("" + a > "" + b)
  }
  // 冒泡排序
  for (let i = 0;i < arr.length - 1;i++) {
    for (let j = 0;j < arr.length - 1 - i;j++) {
      let bool = isAllNumber ? (fn(arr[j], arr[j + 1]) > 0) : fn(arr[j], arr[j + 1])
      if (bool) {
        let temp = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}

export default sort