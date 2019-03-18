/**
 * 重构所有数组方法
 * 不挂载在数组原型上
 * 所以所有方法的第一个参数都是需要操作的数组
 */
import concat from './concat'
import push from './push'


export {
  concat,
  push
}

export default {
  concat,
  push
}