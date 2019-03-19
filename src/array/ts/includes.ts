// includes() 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回false。
/**
 * @return 布尔类型返回值
 * @param arr 需要操作的数组
 * @param str 查找的值
 * @param fromIndex 查找位置，如果小于0， +=arr.length
 */
const includes = (arr: any[], str: any, fromIndex: number = 0): boolean => {
  fromIndex = fromIndex < 0 ? (fromIndex + arr.length < 0 ? 0 : fromIndex + arr.length) : fromIndex
  for (let i = fromIndex;i < arr.length;i++) {
    // 注意检测NaN
    if ((arr[i] === str) || (str !== str && arr[i] !== arr[i])) return true
  }
  return false
}

export default includes