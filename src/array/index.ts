import Utils from './ts/index'

let items = [
  { name: "zhuliaz", age: 23 },
  { name: "jiang", age: 21 },
  { name: "web", age: 12 }
]
let resultConcat = Utils.concat(items, [1, 2], [4, 3])
console.log(items, resultConcat)
let resultPush = Utils.push(items, 234)
console.log(items, resultPush);
