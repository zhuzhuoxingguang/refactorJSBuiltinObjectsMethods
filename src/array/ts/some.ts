// some() 方法测试是否至少有一个元素通过由提供的函数实现的测试。
/**
 * @return 布尔类型返回值
 * @param arr 需要操作的数组
 * @param fn 操作函数
 */

const some = (arr, fn: (arg: any, index?: number) => boolean) => {
  if (!(arr instanceof Array)) throw new Error("请确保第一个参数类型为数组")
  let bool = false
  for (let i = 0;i < arr.length;i++) {
    bool = fn(arr[i], i)
    if (bool) break
  }
  return bool
}
export default some