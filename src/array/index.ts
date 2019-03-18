import Utils from './ts/index'

let items = [
  { name: "zhuliaz", age: 23 },
  { name: "jiang", age: 21 },
  { name: "web", age: 12 }
]
let resultConcat = Utils.concat(items, [1, 2], [4, 3])
console.log("concat: ", items, resultConcat)
let resultPush = Utils.push(items, 234)
console.log("push: ", items, resultPush);
let resultPop = Utils.pop(items)
console.log("pop: ", items, resultPop);
let resultMap = Utils.map(items, item => item.name)
console.log("map: ", resultMap);
let nums = [1, 2, 3]
Utils.forEach(nums, (item, index) => {
  console.log(item * index)
})

console.log("every: ", Utils.every(items, item => (item.age > 3)));
console.log("some: ", Utils.some(items, item => (item.age == 211)));
console.log("join: ", Utils.join(nums, '==='));


