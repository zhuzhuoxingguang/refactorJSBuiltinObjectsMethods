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


export {
  concat,
  push,
  pop,
  map,
  forEach,
  every,
  some,
  join,
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
}