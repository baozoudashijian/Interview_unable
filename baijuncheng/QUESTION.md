# 武汉佰钧成

## 闭包的三种形式
+ 函数包含另一个函数
+ DOM事件绑定（如果DOM有监听事件，删除DOM元素时候要把元素设置为null）

闭包应用
+ 累加器
+ 私有变量
+ 防抖节流

[参考](https://stackoverflow.com/questions/12528049/if-a-dom-element-is-removed-are-its-listeners-also-removed-from-memory)

## CommonJs和ESModule的区别
+ 导入导出语法不同
+ commonjs是运行时加载模块，ESModule是在静态编译期间就确定模块依赖
+ ESModule在编译期间会将所有import提升到顶部，commonjs不会提升到顶部
+ commonjs导出的是一个值拷贝，ESModule导出的是一个引用
+ commonjs中顶层的this指向这个模块本身，而ESModule中顶层this指向undefined
+ commonjs加载的是整个模块，将所有接口全部加载进来，而ESModule可以单独加载某个接口（是否能tree shaking的原因）

## exports和module.exports的区别
exports只是module.exports的一个引用，exports === module.exports