/**
 * 将所有方法封装到Utils对象内
 * 所有方法的第一个参数都是需要操作的数组
 */
const Utils = {
  concat: function () {
    if (!(arguments[0] instanceof Array)) throw new Error("请确保第一个参数类型为数组")
    var results = []
    for (var i = 0; i < arguments.length; i++) {
      if (!(arguments[i] instanceof Array)) {
        results[results.length] = arguments[i]
        break;
      }
      for (var j = 0; j < arguments[i].length; j++) {
        results[results.length] = arguments[i][j]
      }
    }
    return results
  },
  every: function (arr, fn) {
    if (!(arr instanceof Array)) throw new Error("请确保第一个参数类型为数组")
    for (var i = 0; i < arr.length; i++) {
      if (!fn(arr[i])) return false
    }
    return true
  },
  fill: (arr, value, start, end) => {
    if (!(arr instanceof Array)) throw new Error("请确保第一个参数类型为数组")
    start = start || 0
    start = start < 0 ? start + arr.length : start
    end = end ? (end < 0 ? arr.length + end : end) : arr.length
    end = Math.min(end, arr.length)
    for (var i = start; i < end; i++) {
      arr[i] = value
    }
    return arr
  },
  filter: function (arr, fn) {
    if (!(arr instanceof Array)) throw new Error("请确保第一个参数类型为数组")
    var results = []
    for (var i = 0; i < arr.length; i++) {
      if (fn(arr[i], i))
        results[results.length] = arr[i]
    }
    return results
  },
  find: function (arr, fn) {
    if (!(arr instanceof Array)) throw new Error("请确保第一个参数类型为数组")
    var el = undefined
    for (var i = 0; i < arr.length; i++) {
      if (fn(arr[i], i)) {
        el = arr[i]
        break
      }
    }
    return el
  },
  findIndex: function (arr, fn) {
    if (!(arr instanceof Array)) throw new Error("请确保第一个参数类型为数组")
    var index = -1
    for (var i = 0; i < arr.length; i++) {
      if (fn(arr[i], i)) {
        index = i
        break
      }
    }
    return index
  },
  flat: function flat (arr, depth) {
    if (!(arr instanceof Array)) throw new Error("请确保第一个参数类型为数组")
    var results = []
    for (var i = 0; i < arr.length; i++) {
      if (!(arr[i] instanceof Array)) {
        results[results.length] = arr[i]
      } else {
        for (var j = 0; j < arr[i].length; j++) {
          if (depth && (arr[i][j] instanceof Array)) {
            var dees = flat(arr[i][j], depth)
            if (dees instanceof Array) {
              for (var n = 0; n < dees.length; n++) {
                results[results.length] = dees[n]
              }
            }
          } else {
            results[results.length] = arr[i][j]
          }
        }
      }
    }
    return results
  },
  forEach: function (arr, fn) {
    if (!(arr instanceof Array)) throw new Error("请确保第一个参数类型为数组")
    for (var i = 0; i < arr.length; i++) {
      fn(arr[i], i)
    }
    return arr
  },
  includes: function (arr, value, fromIndex) {
    if (!(arr instanceof Array)) throw new Error("请确保第一个参数类型为数组")
    // 如果没有传递fromIndex，默认为0
    fromIndex = fromIndex || 0
    // 如果fromIndex小于0，就倒数查询
    fromIndex = fromIndex < 0 ? arr.length + fromIndex : fromIndex
    // 如果加上了数组的长度依然小于0，直接修正为0
    fromIndex = fromIndex < 0 ? 0 : fromIndex
    for (var i = fromIndex; i < arr.length; i++) {
      // 注意检测NaN
      if ((arr[i] === value) || (value !== value && arr[i] !== arr[i])) return true
    }
    return false
  },
  indexOf: function (arr, value, fromIndex) {
    if (!(arr instanceof Array)) throw new Error("请确保第一个参数类型为数组")
    fromIndex = (fromIndex < 0 ? (fromIndex + arr.length < 0 ? 0 : fromIndex + arr.length) : fromIndex) || 0
    if (fromIndex >= arr.length) return -1
    for (var i = fromIndex; i < arr.length; i++) {
      // 检测NaN
      if ((arr[i] === value) || (value !== value && arr[i] !== arr[i])) {
        return i
      }
    }
    return -1
  },
  join: function (arr, seperator) {
    if (!(arr instanceof Array)) throw new Error("请确保第一个参数类型为数组")
    var str = "", len = arr.length - 1
    seperator = seperator || ','
    for (var i = 0; i < len; i++) {
      str += arr[i] + seperator
    }
    str += arr[len]
    return str
  },
  lastIndexOf: function (arr, value, fromIndex) {
    if (!(arr instanceof Array)) throw new Error("请确保第一个参数类型为数组")
    fromIndex = (fromIndex < 0 ? (fromIndex + arr.length < 0 ? 0 : fromIndex + arr.length) : fromIndex) || 0
    if (fromIndex > arr.length) return -1
    let i = arr.length - 1
    while (i > -1) {
      if ((arr[i] === value) || (value !== value && arr[i] !== arr[i])) {
        return i
      }
      i--
    }
    /* for (var i = arr.length - 1; i > fromIndex; i--) {
      // 检测NaN
      if ((arr[i] === value) || (value !== value && arr[i] !== arr[i])) {
        return i
      }
    } */
    return -1
  },
  map: function (arr, fn) {
    if (!(arr instanceof Array)) throw new Error("请确保参数类型为数组")
    var results = []
    for (var i = 0; i < arr.length; i++) {
      results[i] = fn(arr[i], i)
    }
    return results
  },
  pop: function (arr) {
    if (!(arr instanceof Array)) throw new Error("请确保参数类型为数组")
    var el;
    if (arr.length) {
      el = arr[arr.length - 1]
      arr.length = arr.length - 1
    }
    return el
  },
  push: function (arr) {
    if (!(arr instanceof Array)) throw new Error("请确保参数类型为数组")
    for (var i = 1; i < arguments.length; i++) {
      arr[arr.length] = arguments[i]
    }
    return arr.length
  },
  reduce: function (arr, fn, initialValue) {
    if (!(arr instanceof Array)) throw new Error("请确保第一个参数类型为数组")
    var accumulator = initialValue !== undefined ? initialValue : arr[0]
    var j = initialValue !== undefined ? 0 : 1
    for (var i = j; i < arr.length; i++) {
      accumulator = fn(arr[i], accumulator, i + j)
    }
    return accumulator
  },
  reduceRight: function (arr, fn, initialValue) {
    if (!(arr instanceof Array)) throw new Error("请确保第一个参数类型为数组")
    var len = arr.length, accumulator = initialValue
    if (initialValue === undefined) {
      len = arr.length - 1
      accumulator = arr[len]
    }
    while (len) {
      accumulator = fn(arr[len - 1], accumulator, len - 1)
      len--
    }
    return accumulator
  },
  reverse: function (arr) {
    if (!(arr instanceof Array)) throw new Error("请确保参数类型为数组")
    var i = Math.ceil(arr.length / 2)
    for (var j = 0; j < i; j++) {
      var temp = arr[j]
      arr[j] = arr[arr.length - j - 1]
      arr[arr.length - j - 1] = temp
    }
    return arr
  },
  shift: function (arr) {
    if (!(arr instanceof Array)) throw new Error("请确保参数类型为数组")
    var el;
    if (arr.length > 0) {
      el = arr[0]
      for (var i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1]
      }
      arr.length = arr.length - 1
    }
    return el
  },
  slice: function (arr, begin, end) {
    if (!(arr instanceof Array)) throw new Error("请确保第一个参数类型为数组")
    var results = []
    begin = begin || 0
    end = end || arr.length
    if (begin < 0) begin += arr.length      // 如果begin < 0， begin = 数组长度+begin 
    if (begin < 0) begin = 0                // 如果还小于0， 则直接修正为0
    if (end < 0) end += arr.length          // 如果end < 0， end = 数组长度+end 
    if (end > arr.length) end = arr.length  // 如果end > 数组长度， end = 数组长度
    for (var i = begin; i < end; i++) {
      results[results.length] = arr[i]
    }
    return results
  },
  splice: function (arr, start, deleteCount) {
    if (!(arr instanceof Array)) throw new Error("请确保第一个参数类型为数组")
    start = start || 0
    var rest = []
    for (var j = 3; j < arguments.length; j++) {
      rest[rest.length] = arguments[j]
    }
    var results = []
    // 修正起始位置   小于0的话，就加上数组长度，如果还小于0，修正为0   大于数组长度的话 就修正为数组长度
    start = start < 0 ?
      (start + arr.length < 0 ? 0 : start + arr.length) :
      (start > arr.length ? arr.length : start)
    // 如果deleteCount数值过大，则修正为从起始位置到数组结尾的长度
    if (deleteCount > (arr.length - start)) { deleteCount = arr.length - start }
    // 获取删除的元素，并组成新的数组实例
    for (var i = start; i < (start + deleteCount); i++) {
      results[results.length] = arr[i]
    }
    // 元素删除之后，将所有数组元素响应的前置
    for (var i = start + deleteCount; i < arr.length; i++) {
      arr[i - deleteCount] = arr[i]
    }
    // 修正数组长度
    arr.length = arr.length - deleteCount
    // 将添加的元素填充到对应位置
    for (var i = rest.length - 1; i >= 0; i--) {
      for (var j = arr.length; j > start; j--) {
        arr[j] = arr[j - 1]
      }
      arr[start] = rest[i]
    }
    return results
  },
  unshift: function (arr) {
    if (!(arr instanceof Array)) throw new Error("请确保第一个参数类型为数组")
    let i = arguments.length - 1
    while (i) {
      for (var j = arr.length; j > 0; j--) {
        arr[j] = arr[j - 1]
      }
      arr[0] = arguments[i--]
    }
    return arr.length
  },
  zip: function (arr, others, fn) {
    if (!(arr instanceof Array)) throw new Error("请确保第一个参数类型为数组")
    if (!(others instanceof Array)) throw new Error("请确保第二个参数类型为数组")
    var results = []
    var min = Math.min(arr.length, others.length)
    for (var i = 0; i < min; i++) {


      results[results.length] = fn(arr[i], others[i])
    }
    return results
  },
  sort: function (arr, fn) {
    if (!(arr instanceof Array)) throw new Error("请传入数组类型的参数")
    if (!fn) {
      // 定义默认
      fn = function (a, b) { return a - b }
    }
    // 判断是否全都为数字
    let isAllNumber = true
    for (let i = 0; i < arr.length; i++) {
      isAllNumber = typeof arr[i] === "number"
      if (!isAllNumber) break
    }
    if (!isAllNumber) {
      // 如果有非数字元素，按Unicode码点升序
      fn = function (a, b) {
        return "" + a > "" + b
      }
    }
    // 冒泡排序
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - 1 - i; j++) {
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
}

