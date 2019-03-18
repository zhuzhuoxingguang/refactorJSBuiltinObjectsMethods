// every() 方法测试数组的所有元素是否都通过了指定函数的测试。
/**
 * @return 布尔类型返回值
 * @param arr 需要操作的数组
 * @param fn 操作函数，需要有类型为布尔值的返回值
 */
const every = (arr: any[], fn: (item: any) => boolean): boolean => {
  let bool = true
  for (let i = 0;i < arr.length;i++) {
    bool = fn(arr[i])
    if (!bool) break
  }
  return bool
}

export default every