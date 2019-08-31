import {foo, bar} from './math'
import data from '../data/test.json' // import引入一个json会自动转换成js原生对象或者是数组
import '../css/test.css'

document.write('entry.js is working<br />')
document.write(foo(3) + '<br />')
document.write(bar(3) + '<br />')
document.write(JSON.stringify(data) + '<br />')