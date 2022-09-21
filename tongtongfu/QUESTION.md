# 统统付

## React合成事件
React在原生DOM事件上的一层封装，称为SyntheticEvent

合成事件的优点
+ 兼容各种主流浏览器的DOM事件（类似jquery兼容各个浏览器DOM api）
+ 减少内存消耗，提升性能，不需要注册那么多事件，一种事件类型只在Root上注册一次 

合成事件和原生事件的区别
+ 事件名称命名方式不同（原生：纯小写、合成事件：驼峰）
+ 事件处理函数写法不同（原生事件处理函数为字符串，合成事件传入函数作为事件处理函数）
+ 阻止默认行为方式不同（原生：return false，合成事件：e.prevDefault()）

执行顺序
原生事件-React事件-document事件

阻止冒泡
如果在onDOMClick中调用evt.stopPropagation()方法，由于DOM事件被阻止冒泡了，无法到达document，所以合成事件自然不会被触发

## rem公式

## 事件循环
由于javascript是单线程。单线程意味着所有任务需要排队，前一个任务结束，才会执行后一个任务。如果前一个任务耗时很长，后一个任务就不得不等着，于是js的任务分两种：同步任务和异步任务，同步任务调用就会得到结果，而异步任务无法立即得到结果，将它放入到任务队列，等到执行完同步任务后，再去任务队列中去处理异步任务的返回结果。

## 宏任务和微任务
+ 宏任务：script代码、setTimeout、setInterval、I/O、UI Rendering
+ 微任务：Process.nextTick、promise、MutationObserver

## promise同步？then异步？
+ promise同步
+ then异步

## 输入url到看到页面过程
+ 输入网址
+ 缓存解析
+ 域名解析（域名到ip的转换过程）
+ tcp连接，三次握手
+ 页面渲染
    + 构建DOM树
    + 构建CSSOM树
    + 加载js

## 重绘和重排（回流）
+ 重绘：例如div改变背景颜色，字体颜色
+ 回流：改变宽高，内边距，外边距，float，position

注意：回流必将引起重绘，而重绘不一定引起回流