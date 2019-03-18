// reduceRight() 方法接受一个函数作为累加器（accumulator）和数组的每个值（从右到左）将其减少为单个值。
/**
 * @return 计算结果
 * @param arr 需要操作的数组
 * @param fn 操作函数，需要返回结果值
 * @param initialValue 初始化的值，如果不传，默认为数组的最后一项
 */
const reduceRight = (arr: any[], fn, initialValue?: any): any => {
  let len: number = arr.length, accumulator: any = initialValue
  if (initialValue === undefined) {
    len = arr.length - 1
    accumulator = arr[len]
  }
  while (len) {
    accumulator = fn(arr[len - 1], accumulator, len - 1)
    len--
  }
  return accumulator
}

export default reduceRight