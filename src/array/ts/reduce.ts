// reduce() 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。
/**
 * 
 * @param arr 需要操作的数组
 * @param fn 操作函数，需要有返回值
 * @param initialValue 初始化的值，如果没有提供，则默认选择数组的第一个值为初始化的值
 */
const reduce = (arr: any[], fn: (accumulator: any, currentValue: any, currentIndex?: number) => any, initialValue?: any): any => {
  let accumulator = initialValue !== undefined ? initialValue : arr[0]
  let j = initialValue !== undefined ? 0 : 1
  for (let i = j;i < arr.length;i++) {
    accumulator = fn(arr[i], accumulator, i + j)
  }
  return accumulator
}

export default reduce