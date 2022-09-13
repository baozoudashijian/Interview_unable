# 记录讯盟面试中的问题

## ajax和fetch的区别
+ ajax是利用XMLHttpRequest对象来请求数据的，而fetch是window的一个方法
+ ajax基于原生XHR进行开发，XHR本生架构不清晰，已经有了fetch替代方案
+ fetch有着比ajax更好的写法
+ fetch只对网络请求报错，对400，500都当作成功请求，需要封装去处理
+ fetch没有办法原生监测请求进度，而XHR可以

## 受控组件和非受控组件
+ 受控组件：状态由开发者维护（value，onchange中setState更新状态）
+ 非受控组件：状态由自身维护（通过ref类似获取DOM的行为）

## 函数组件和class组件的区别
+ 函数组件没有this，类组件有
+ 函数组件没有生命周期，类组件有
+ 函数组件没有state，类组件有

## hooks
常见的hooks
+ State Hook 维护state状态
+ Effect Hook 书写一些组件的副作用ajax请求
+ Ref Hook 操作DOM
+ Memo Hook 缓存组件状态
+ Callback Hook 缓存方法

useRef的其他作用

## 执行上下文
【定义】函数执行前的准备工作
【简介】运行JavaScript代码时，当代码执行进入一个环境时，就会为该环境创建一个执行上下文，它会在你运行代码前做一些准备工作，如确定作用域，创建局部变量对象等

+ JavaScript执行环境分为全局环境和函数环境，因此对应的执行上下文分为全局执行上下文和函数执行上下文。
+ 函数编程中，代码中会声明多个函数，对应的执行上下文也会存在多个。在JavaScript中通过栈的存取方式来管理执行上下文，我们可称其为执行栈，或函数调用栈（Call Stack）
+ 执行上下文的生命周期
    
    + 创建阶段
        + 创建变量对象（Arguments对象声明、函数声明、函数表达式声明）
        + 确定this指向
        + 确定作用域
    + 执行阶段 
        + 变量对象赋值
        + 调用函数
        + 顺序执行其他代码
[参考链接](https://www.cnblogs.com/yanjianjiang/p/13952739.html)

## postMessage

## :key

## hash和history模式的区别

## 什么是http

## 介绍路由
路由如何跳转

## 什么是webpack

## loader和plugin的区别

## 生命周期
从React实例创建、运行、到销毁期间，伴随着各种事件，这些事件统称为生命周期。
+ constructor
+ getDerivedStateFromProps
+ render
+ componentDidMount
+ shouldComponentUpdate
+ getSnapshotBeforeUpdate
+ componentDidUpdate
+ componentWillUnmount

## 判断数据类型
+ typeof
+ instanceof
+ constructor
+ Object.prototype.toString.call()