import Utils from './ts/index'

let items = [
  { name: "zhuliaz", age: 23 },
  { name: "jiang", age: 21 },
  { name: "web", age: 12 }
]
let resultConcat = Utils.concat(items, [1, 2], [4, 3], 9)
console.log("concat: ", items, resultConcat)
let resultPush = Utils.push(items, 234)
console.log("push: ", items, resultPush);
let resultPop = Utils.pop(items)
console.log("pop: ", items, resultPop);
let resultMap = Utils.map(items, item => item.name)
console.log("map: ", resultMap);
let nums = [1, NaN, 2, 3, "at", NaN]
Utils.forEach(nums, (item, index) => {
  console.log(item, index)
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

let numsReduce = [1, 4, 2, 6, 3, 5]
console.log("reduce: ", Utils.reduce(numsReduce, (a, b, index) => (a + b)));

console.log("reduceRight: ", Utils.reduceRight(numsReduce, (a, b, index) => {
  return a + b
}));

console.log("reverse: ", Utils.reverse(numsReduce), numsReduce);

let numsSort = [1, 4, "a", "c", "b", 23, 6, 3, 5]
console.log("sort:", Utils.sort(numsSort, (a, b) => (a - b)));

let numsUnshift = ["a", "b", "c"]
console.log("unshift:", Utils.unshift(numsUnshift, 23, 34, 56, ['3'], { key: "ttt" }), numsUnshift);
let numsUnshiftArray: any[] = ["a", "b", "c"]

console.log("unshift:", numsUnshiftArray.unshift(23, 34, 56, ['3'], { key: "ttt" }), numsUnshift);


console.log("shift:", Utils.shift(numsUnshift), numsUnshift);
console.log("shift:", numsUnshiftArray.shift(), numsUnshift);

console.log("slice: ", Utils.slice(numsUnshift, 1, 4));
let arrSplice: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
let spliceRes = Utils.splice(arrSplice, 1, 2, "23", "sdf", "sdfsdf", "00000")

console.log(arrSplice, spliceRes);

let arrSplicePro: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
let resArrSplicePro = arrSplicePro.splice(1, 2, "23", "sdf", "sdfsdf", "00000")
console.log(arrSplicePro, resArrSplicePro);

let zips1 = [{ name: 'zhangziyi', age: 34 }, { name: "毛不易", age: 45 }], zip2 = [{ job: "actor" }, { job: "singer" }]
let res = Utils.zip(zips1, zip2, (a, b) => {
  return {
    ...a, ...b
  }
})
console.log("zip:", res);
