# 博彦（电话面试）

## hooks为什么不在if else中使用
React不允许hook处于条件语句是因为React把每次render中useState的顺序值0、1、2、3当成了key，方便后续render用key查找对应的state

## React生命周期为什么做调整
+ React v16之前是同步渲染的，v16之后是异步渲染的，在render函数之前的所有函数可能被执行多次
+ 原有生命周期会诱惑开发者在render之前的生命周期函数中做一些动作，这些动作还放在这些函数中的话，有可能会被调用多次

注：使用异步渲染后，带有will的生命周期都不能保证更新只调用一次，所以废弃（componentWillMount,componentWillUpdate,componentWillUnmount）

[参考链接](https://zhuanlan.zhihu.com/p/150929928)

## TS应用了哪些内容

注：如果项目中（类）出现一些奇怪语法，我们应该想到可能是Typescript在作怪

## 父组件调用子组件方法
+ 父组件定义方法接受一个参数
+ 通过props传递到子组件
+ 子组件在componentDidMount中调用传入方法，并且传入子组件this

[参考链接](https://www.cnblogs.com/hrrtop/p/15064896.html)

## React中保存页面状态
+ 手动保存状态：componentWillUnmount通过redux保存数据，componentDidMount恢复数据
+ 通过样式控制：列表和详情页在同一个页面，通过样式来控制显示与隐藏
+ 自动保存状态：实现类似vue的keepAlive（react-activation）