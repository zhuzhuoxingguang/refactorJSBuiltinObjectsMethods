// splice() 方法通过删除或替换现有元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。
/**
 * @return 返回删除元素所组成的数组实例
 * @param arr 需要操作的数组
 * @param start 开始位置
 * @param deleteCount 需要删除的元素的个数
 * @param rest 添加的元素，可多个
 */
const splice = (arr, start: number = 0, deleteCount: number = arr.length - start, ...rest) => {
  let results = []
  // 修正起始位置   小于0的话，就加上数组长度，如果还小于0，修正为0   大于数组长度的话 就修正为数组长度
  start = start < 0 ?
    (start + arr.length < 0 ? 0 : start + arr.length) :
    (start > arr.length ? arr.length : start)
  // 如果deleteCount数值过大，则修正为从起始位置到数组结尾的长度
  if (deleteCount > (arr.length - start)) { deleteCount = arr.length - start }
  // 获取删除的元素，并组成新的数组实例
  for (let i = start;i < (start + deleteCount);i++) {
    results[results.length] = arr[i]
  }
  // 元素删除之后，将所有数组元素响应的前置
  for (let i = start + deleteCount;i < arr.length;i++) {
    arr[i - deleteCount] = arr[i]
  }
  // 修正数组长度
  arr.length = arr.length - deleteCount
  // 将添加的元素填充到对应位置
  for (let i = rest.length - 1;i >= 0;i--) {
    for (let j = arr.length;j > start;j--) {
      arr[j] = arr[j - 1]
    }
    arr[start] = rest[i]
  }
  return results
}
export default splice