// 引入其他的模块

// 语法 import xxx from '路径'

// 注意引入第三方的库要写在自定义库上面
import $ from 'jquery'

import {foo, bar} from './module1'
import {fun, fun2} from './module2'
import module3 from './module3'

// console.log(module1, module2)
foo()
bar()
fun()
fun2()
module3()
$('body').css('backgroundColor', 'pink')