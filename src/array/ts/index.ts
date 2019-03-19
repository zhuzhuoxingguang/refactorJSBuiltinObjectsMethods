/**
 * 重构所有数组方法
 * 不挂载在数组原型上，原有需要第三个参数作为this值绑定的方法，我们这里也没有传递
 * 所以所有方法的第一个参数都是需要操作的数组
 */
import concat from './concat'
import push from './push'
import pop from './pop'
import map from './map'
import forEach from './forEach'
import every from './every'
import some from './some'
import join from './join'
import fill from './fill'
import filter from './filter'
import find from './find'
import findIndex from './findIndex'
import flat from './flat'
import includes from './includes'
import indexOf from './indexOf'
import lastIndexOf from './lastIndexOf'
import reduce from './reduce'
import reduceRight from './reduceRight'
import reverse from './reverse'
import sort from './sort'
import unshift from './unshift'
import shift from './shift'
import slice from './slice'
import splice from './splice'


export {
  concat,
  push,
  pop,
  map,
  forEach,
  every,
  some,
  join,
  fill,
  filter,
  find,
  findIndex,
  flat,
  includes,
  indexOf,
  lastIndexOf,
  reduce,
  reduceRight,
  reverse,
  sort,
  unshift,
  shift,
  slice,
  splice,
}

export default {
  concat,
  push,
  pop,
  map,
  forEach,
  every,
  some,
  join,
  fill,
  filter,
  find,
  findIndex,
  flat,
  includes,
  indexOf,
  lastIndexOf,
  reduce,
  reduceRight,
  reverse,
  sort,
  unshift,
  shift,
  slice,
  splice,
}