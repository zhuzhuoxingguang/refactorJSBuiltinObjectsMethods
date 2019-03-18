// reverse() 方法将数组中元素的位置颠倒,并返回该数组。该方法会改变原数组。
/**
 * @return 返回原数组，数组中的位置颠倒
 * @param arr 需要操作的数组
 */
const reverse = (arr: any[]): any[] => {
  let i = Math.ceil(arr.length / 2)
  for (let j = 0;j < i;j++) {
    let temp = arr[j]
    arr[j] = arr[arr.length - j - 1]
    arr[arr.length - j - 1] = temp
  }
  return arr
}

export default reverse