// unshift() 方法将一个或多个元素添加到数组的开头，并返回该数组的新长度。
/**
 * @return 修改原数组，返回修改后数组的长度
 * @param arr 操作的数组
 * @param rest 需要添加到数组当中的元素
 */
const unshift = (arr: any[], ...rest): number => {
  for (let i = rest.length - 1;i >= 0;i--) {
    for (let j = arr.length;j > 0;j--) {
      arr[j] = arr[j - 1]
    }
    arr[0] = rest[i]
  }
  return arr.length
}
export default unshift