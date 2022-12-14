# 常见面试背诵内容

## 盒模型
IE盒模型的宽高包括content和padding和border，标准盒模型不包括

## 闭包
闭包就是函数中包含另一个函数，可以让你在函数外部读取到内部的变量，让这些变量始终保存在内存中，可以达到延长变量生命周期的效果。

## 深拷贝
浅拷贝：如果属性是基本类型，拷贝的就是基本类型的值，如果属性是引用类型，拷贝的就是内存地址。

深拷贝：对象属性完全相同，但是对应两个不同地址，修改一个对象的属性不会改变另一个对象的属性

## 防抖节流
防抖：n秒后在执行该事件，若在n秒内被重复出发，则重新计时

节流：n秒内只运行一次，若在n秒内重复出发，只有一次生效

## 原型，原型链
当试图访问一个对象的属性时，它不仅在该对象上搜寻，还会搜寻该对象的原型，以及该对象的原型的原型，依次层层向上搜索，直至找到一个名字匹配的属性或到达原型链的末尾。

## 作用域链
变量取值到创建这个变量的函数作用域中取值，但是如果在当前作用域中没有查到值，就会到上级作用域去查，直到查到全局作用域，这个查找的过程形成的链条就叫做作用域链。


## typeof与instanceof的区别
typeof返回变量的基本类型 instanceof返回的是一个boolean值

instanceof可以判断复杂类型，但不能判断基础类型

typeof可以判断基础类型，但是不能判断复杂类型（除了function类型外）

## 事件委托
js事件委托利用冒泡原理，把本应该添加到某个元素的事件委托给它的父级

事件冒泡的三个阶段

+ 捕获阶段：从window对象传导到目标节点称为“捕获阶段”，捕获阶段不会响应任何事件
+ 目标阶段：在目标节点上触发称为“目标阶段“
+ 冒泡阶段：从目标节点传导回window对象，称为冒泡阶段

## 为什么使用虚拟DOM
+ 创建真实的DOM代价高：真实的DOM节点node实现的属性很多，而vnode仅仅实现一些必要的属性，相比起来，创建vnode的成本比较低
+ 出发多次浏览器重绘及回流：使用vnode，相当于加了一个缓冲，让一次数据变动所带来的所有node变化，现在vnode中进行修改，然后diff之后对所有产生差异的节点集中一次对DOM tree进行修改，已减少浏览器的重绘及回流。
+ 虚拟DOM由于本质上是一个js对象，因此天生具备跨平台能力，可以在不同平台准确显示

## vue生命周期
+ beforeCreated：实例刚在内存中被创建出来，此时还没有初始化好data和methods属性
+ created：实例已经在内存中创建出来，此时data和methods已经创建完成，但是还没有开始编译模版
+ beforeMounted：此时已经完成了模版的编译，但是还没有挂载到页面上
+ mounted：已经将编译好的模版挂载到了页面指定的容器中显示

+ beforeUpdate：将状态更新之前执行此函数，此时data中的状态值是最新的，但是界面上显示的数据还是旧的，因此此时还没有开始重新渲染DOM节点
+ updated：实例更新完毕调用此函数，此时data中的状态值和界面上显示的数据，都已经完成了更新，界面已经被重新渲染好了

+ beforeDesDestory：实例销毁之前调用，在这一步，实例仍然完全可用
+ destroyed：Vue实例销毁之后调用。调用后Vue实例指示的所有东西都会解除绑定，所有的事件监听器会被移除，所有的子实例也会被销毁

## v-show和v-if
+ v-show：原理是修改元素css属性display来决定显示还是隐藏
+ v-if：操作dom来切换显示

## 双向数据绑定
实现mvvm的双向绑定，是采用数据劫持结合发布者-订阅者模式的方式，通过Object.defineProperty来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调

## vue导航守卫的钩子函数有哪些
全局守卫

+ router.beforeEach
+ router.beforeResolve
+ router.afterEach

路由组件内守卫

+ beforeRouteEnter
+ beforeRouteUpdate
+ beforeRouteLeave

## vue编程式的导航跳转传递参数的方式有哪些
+ params 不会显示在地址栏中 使用.params接收 刷新参数会消失
+ query 会显示在地址栏中 使用.query接收 刷新不会消失

## vuex有哪几种属性
有五种，分别是State，Getter，Mutation，Action，Module

+ state：vuex的基本数据，用来存储变量
+ getter：从基本数据（state）派生的数据，相当于state的计算属性
+ mutation：提交数据更新的方法，必须是同步的（如果需要异步使用action）。每个mutation都有一个字符串的事件类型（type）和一个回调函数（handler）。回调函数就是我们实际更新状态的地方，并且他会接受state作为第一个参数，提交载荷作为第二个参数。
+ action：和mutation的功能大致相同，不同之处在于action提交的是mutation，而不是直接变更状态，action可以包含任意异步操作
+ modules：模块化vuex，可以让每一个模块拥有自己的state、getters、mutation、action、使得结构非常清晰，方便管理

[参考链接](https://blog.csdn.net/xi1213/article/details/123157905)

## C端和B端是什么意思
+ B，Business；通常为企业或商家为工作或商业目的而使用的系统型软件、工具或平台
+ C，Consumer；意为消费者、个人用户或终端用户。顾名思义就是面向个人用户提供服务的产品，是直接服务于用户的。
+ B端，面向企业客户，多为一个群体使用，本质是满足工作需求，多为多种功能的整合，讲究协同合作。使用B端往往是长时间、沉浸式，B端是服务于公司或企业用户
+ C端，面对个人用户，多为单个个体使用，讲究用户的使用感觉，有一个核心功能，其他的功能都是附加的，是为“碎片化时间服务的”，特点是数据量大，因为用户群体大，数据增常都是指数级的
