'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

// 默认暴露 可以暴露任意数据类型，暴露什么数据接收到的就是什么数据

exports.default = function () {
    // 默认暴露只能写一次，当然可以暴露一个对象，里面想放什么放什么
    console.log('默认暴露');
};