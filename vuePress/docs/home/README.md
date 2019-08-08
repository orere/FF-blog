
## VuePress使用
> 官方文档：[VuePress](https://vuepress.vuejs.org/zh/)

### 侧边栏
#### 设置一整个侧边栏
```javascript
sidebar: [
    '/home/',
    {
        title: 'vue模块',
        children: [
            '/vue/',
            '/vue/one',
        ]
    },
],
```
#### 设置多个侧边栏
```javascript
sidebar: {
    '/home/':['/home/'],
    '/vue/':[
        '/vue/',
        {
            title: 'one',
            children: [
                '/vue/one/'
            ]
        }
    ]
},
```

<!-- <div>{{$site}}</div>
<p>{{$page}}</p> -->


### 在MD中使用Vue
> 指路文档：[使用组件](https://vuepress.vuejs.org/zh/guide/using-vue.html#%E4%BD%BF%E7%94%A8%E7%BB%84%E4%BB%B6)

#### 使用模板语法
```javascript
<span v-for="i in 3">{{ i }} </span>
```
> 输出结果：<span v-for="i in 3">{{ i }} </span>

#### 使用Vue组件
<!-- 在docs/.vuepress中新建components文件夹，在该目录中创建vue组件 -->
所有在 `.vuepress/components` 中找到的 `*.vue` 文件将会自动地被注册为全局的异步组件，
你可以直接使用这些组件在任意的 Markdown 文件中（组件名是通过文件名取到的）。
+ 创建组件demo1
```javascript
<template>
    <div>
        This is Demo1.
    </div>
</template>
```
+ 调用demo1
```javascript
<demo1/>
```
> 输出结果：<demo1/>
