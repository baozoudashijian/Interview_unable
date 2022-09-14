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

useRef的其他作用（保存变量）

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
作用是：在diff算法中判断元素是最新创建的还是被移动来的，从而减少不必要的diff，也就是提高diff同级比较的效率

## hash和history模式的区别
hash就是url中#以及后面的字符，改变hash值不会向后端发送请求，不会重新加载页面hash不需要服务器配置

history以/开头，当history发生改变时会重新加载页面，服务器配置回调路由

hash通过监听浏览器onhashchange事件变化，查找对应路由应用。通过改变location.hash改变页面路由

history利用pushState和replaceState方法改变页面路径

## 什么是http
http协议是基于TCP/IP的超文本互联网传输协议，http协议就是用户客户端与web服务器之间的协议，制定了传输规则。超文本就是就是把超文本转成二进制通过http发送，在互联网早期，文本只是简单的文字信息，发展到今天已经包含图片、音频、视频等

+ 无连接：客户端请求完成之后，服务端会直接断开连接
+ 无状态：无状态表示对事物处理没有记忆能力，缺少状态意味着，如果后面的数据需要处理前一次发送的数据，需要重新发送，导致数据量增大


## 介绍路由
路由如何跳转

## 什么是webpack
webpack是一个模块打包工具，可以使用它管理项目中的模块依赖，并编译输出模块所需的静态文件。它可以很好的管理、打包开发中所用到的HTML、CSS、Javascript和静态资源等，让开发更高效。对于不同类型的依赖，webpack有对应的模块加载器，而且分析模块间的依赖关系，最后合并生成优化的静态资源。

+ 代码转换：TypeScript编译成JavaScript，SCSS编译成CSS等
+ 文件优化：压缩JavaScript、CSS、HTML代码
+ 代码分割：提取多个页面的公共代码、提取首屏不需要执行部分的代码让其异步加载
+ 模块合并：在采用模块化的项目有很多模块和文件，需要构建功能把模块分类合并成一个文件
+ 自动刷新：监听本地源代码的变化，自动构建，刷新浏览器

## loader和plugin的区别
loader：是用来告诉webpack如何转化某一类型的文件，并且引入到打包的文件中
plugin：可以打包优化，资源管理和注入环境变量

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