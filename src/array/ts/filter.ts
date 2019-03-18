

const filter = (arr: any[], fn: (any, index?: number) => boolean): any[] => {
  let results = []
  for (let i = 0;i < arr.length;i++) {
    if (fn(arr[i], i))
      results[results.length] = arr[i]
  }
  return results
}
export default filter