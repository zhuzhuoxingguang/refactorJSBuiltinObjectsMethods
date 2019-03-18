import Utils from './ts/index'

let items = [
  { name: "zhuliaz", age: 23 },
  { name: "jiang", age: 21 },
  { name: "web", age: 12 }
]
let x = Utils.concat(items, [1, 2], [4, 3])
console.log(items, x)