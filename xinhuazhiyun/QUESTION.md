# 记录新华智云面试中的问题

## 微信小程序实现登陆

## 微信小程序面试题

## 权限控制
+ 接口权限：一般采用jwt的形式验证，没有通过的话一般返回401 Authentication Required。登陆完拿到token，将token存起来（cookie和storage），每次登陆的时候携带token就行了（axios请求拦截器实现）
+ 按钮权限：提前和后端约定好按钮的名字（可以通过后台管理系统添加），后端会返回一个按钮权限列表。然后绑定disabled属性达到相应权限效果。
+ 页面权限（菜单权限）：获取菜单权限列表，动态递归生成菜单
+ 路由权限：菜单权限虽然做到能看不见菜单，但是我可以直接输入url的方式去没有权限的页面，这种情况需要靠我们路由权限去阻止。每次跳转路由判断是否在权限列表中，在的话就放行，不在的话提示权限不够（Router.beforeEach）。

[参考连接](https://www.cnblogs.com/wwyydd/p/14356207.html)

## 登录方式
+ Cookie + Session登录
    + Http是无状态协议，每次和后端重新建立连接的话，后端无法判断请求是否来自同一个用户，所以诞生了Cookie，会随着Http请求一起发送
    + 首次登录：用户输入账户密码，前端发送Http请求，后端验证时会创建sessionId，并保存sessionId和session的映射关系，然后通过Set-Cookie头将sessionId种到Cookie种，存到前端
    + 后续登录：请求携带包含了sessionId的Cookie到后端，后端通过比较sessionId即可判断哪个用户发送的请求
    + 缺点：存储了大量session，一旦访问量激增，服务器压力大，维护成本高。
+ Token 登录
    + token是后端生成的一串字符串。第一次登录时，后端生成一个token返回给前端，前端后续访问时携带token进行身份验证即可。
    + 首次登录：用户输入账号密码，前端发送http请求，后端收到后以JWT形式生成token，然后返还给客户端，前端收到存在本地（token可以放在cookie中发送，但这样没法跨域，更好的方法是放在请求字段Authorization）
    + 后续登录：请求会携带token
    + 优点
        + 可以避开同源策略
        + 避免CSRF攻击
[参考连接](https://blog.csdn.net/qq_43510829/article/details/119298522?spm=1001.2101.3001.6650.6&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-6-119298522-blog-126567276.pc_relevant_recovery_v2&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-6-119298522-blog-126567276.pc_relevant_recovery_v2&utm_relevant_index=7)