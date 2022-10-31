# 快鱼

## 伪类和伪元素
+ 伪元素：用于创建一些不再文档树中的元素
    + :before
    + :after
+ 伪类：用于已有元素处于某个状态，为其添加对应的样式
    + :hover
    + :disabled
    + :selected

特点
+ 伪元素和伪类都不会出现在文档树中
+ 伪类允许出现在选择器的任何位置，而伪元素只能跟在选择器的最后一个简单选择器后面

区别
+ 伪类操作的对象是文档树中已有的元素
+ 伪元素创建了一个文档树外的元素
+ 伪类和伪元素的区别：有没有创建一个文档树之外的元素

## 流式布局（瀑布流布局）
————

## 持久化redux状态
redux-persist
+ 可以设置blacklist和whitelist

## 自己封装hooks

```
    import React, { useEffect } from 'react'

    const useChangeTitle = (title) => {
        useEffect(() => {
            document.title = title
        }, [title])
    }

    export default (props) => {
        useChangeTitle('自定义修改标题hooks')
        return (
            <div>
                测试自定义hooks
            </div>
        )
    }

```

## fiber
在数据更新时，react生成了一棵更大的虚拟dom树，给第二步的diff带来了很大压力——我们想找到真正变化的部分，这需要花费更长的时间。js占据主线程去做比较，渲染线程便无法做其他工作，用户的交互得不到响应，所以便出现了react fiber。

react fiber没法让比较的时间缩短，但它使得diff的过程被分成一小段一小段的，因为它有了“保存工作进度”的能力。js会比较一部分虚拟dom，然后让渡主线程，给浏览器去做其他工作，然后继续比较，依次往复，等到最后比较完成，一次性更新到视图上

## React长列表多优化
展示大型列表和表格数据，如城市列表和通讯录，会导致页面不流畅、卡顿等性能问题。

+ 懒加载：每次只加载一部分数据，加载更多时再渲染一部分数据
    + 优点：每次渲染一部分数据，数据快
    + 缺点：等数据量加载到非常多时，页面依然存在大量DOM节点
+ react-virtualized：只渲染可视区域节点


## 封装过哪些公共组件
+ 搜索栏
+ 表格
+ 分页
+ 模态框
+ 表单