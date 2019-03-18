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
let nums = [1, NaN, 2, 3, "at", NaN]
Utils.forEach(nums, (item, index) => {
  console.log(item * index)
})

console.log("every: ", Utils.every(items, item => (item.age > 3)));
console.log("some: ", Utils.some(items, item => (item.age == 211)));
console.log("join: ", Utils.join(nums, '==='));
// console.log("fill: ", Utils.fill(nums, '===', 1, 3));
console.log("filter: ", Utils.filter(items, item => (item.age > 13)));
console.log("find: ", Utils.find(items, item => (item.age < 15)));
console.log("findIndex: ", Utils.findIndex(items, item => item.age < 15));
let flats = [1, [22, 23, [25, 26]], 2, [3, 4, [5, 6, [7, 8], 9], 10], 11]
console.log("flat:", Utils.flat(flats, true));
console.log("includes: ", Utils.includes(nums, NaN));
console.log("indexOf: ", Utils.indexOf(nums, NaN));
console.log("lastIndexOf: ", Utils.lastIndexOf(nums, NaN));

let numsReduce = [1, 2, 3, 5]
console.log("reduce: ", Utils.reduce(numsReduce, (a, b, index) => (a + b)));

console.log("reduceRight: ", Utils.reduceRight(numsReduce, (a, b, index) => {
  return a + b
}));

console.log("reverse: ", Utils.reverse(numsReduce), numsReduce);


