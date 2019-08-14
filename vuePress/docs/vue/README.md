## 关于Vue
### 特点
VUE是一个MVVM的框架，以数据为驱动，既有angular的数据绑定，也有react的虚拟DOM和组件化。
> 简洁、轻量、快速、组件化、数据驱动、SEO友好  
+ 与React比较：React更适用于app、兼容webpp、数据交互频繁的项目

### 构建项目
1. 使用vue-cli脚手架工具进行整个项目的构建
2. 使用vue-router来实现vue中的路由切换
3. 使用vuex进行状态集的管理
4. 使用axios或者fetch或者vue-resouce进行数据的交互
5. 使用template模板引擎进行组件化开发

### 生命周期  
我们往往在mounted时进行对dom的操作以及数据的请求，因为beforeMount时期可能会有多次渲染
1. 组件创建时 beforeCreate/created，实例化对象后/组件接收data后
2. 模板渲染时 beforeMount/mounted
3. 数据更新时 beforeUpdate/updated
4. 组件卸载时 beforeDestory/destory   