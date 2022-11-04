# 记录紫蝶面试中的问题

## 页面中有左中右三列，左右两列列宽固定，中间列自适应，请写代码
+ 浮动
+ 绝对定位
+ flex布局

## css样式在不同类型的浏览器之间的显示差异如何解决
css hack
+ css属性hack
+ css选择器hack
+ css条件注释hack

## 页面事件和鼠标事件有哪些
+ 页面事件
    + load：页面全部资源加载完毕
    + scroll：浏览器滚动的时候触发
    + resize：页面大小事件
+ 鼠标事件
    + onclick
    + onmouseenter/onmouseleave
    + onmouseover/onmouseout
    + onmousedown/onmouseup
    + onmousemove
+ 表单事件
    + onfocus
    + onblur
    + onchange
    + onreset
    + onsubmit
    + oninput
+ 键盘事件
    + onkeydown
    + onkeyup
    + onkeypress

## 如何提升页面加载速度
+ 减少DNS查找
+ CSS优先加载，JS延迟加载
+ 减少HTTP请求
+ 缩小文件
+ 善于利用缓存

## 判断字符串组成，第一个必须是字母，后面可以是数字、下划线，总长度为20
正则表达式

##  截取字符串 “abcdefgd” 的efg
+ "abcdefgd".substring(4,7)
+ "abcdefgd".substr(4,3)

## 如何隐藏请求的数据
不能隐藏只能通过下面技术实现
+ SSR
+ 后端渲染

## vendor.js文件体积过大，影响首屏体验。列举几种常用的优化方法？
+ CDN：依赖包通过CDN引入
+ 路由懒加载
+ 开启GZip
