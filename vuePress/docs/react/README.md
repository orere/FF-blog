---
title: React
---
## 主要依赖
react.js：react的核心，生成虚拟DOM的的函数等
react-dom.js：把虚拟DOM渲染成实际DOM等
babel.js：JS编译器，能够转换JSX语法，使用JSX时需要（`<script type="text/babel">`）

## 元素
元素是Resct应用的最小砖块。
React 元素是**不可变对象**。一旦被创建，你就无法更改它的子元素或者属性。一个元素就像电影的单帧：它代表了某个特定时刻的 UI。

### 更新元素
> 创建一个全新的元素，并将其传入 ReactDOM.render()
不推荐。在实践中，大多数 React 应用只会调用一次 ReactDOM.render()。

## 组件
组件是拆分UI后的独立可复用的代码片段。接受任意入参（propps），并返回React元素。  
当react元素为自定义组件时，会将JSX所接收的属性转换为对象(props)传递给组件。   
组件式(props接收)：`<Getgreeting user={user}></Getgreeting>`  
函数式(user接收)：`Getgreeting(user)`  
### 声明组件
JavaScript函数式：
```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
ES6-class：
```js
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```
### Props的只读性
组件无论是使用函数声明还是通过 class 声明，都决不能修改自身的 props。
> 所有 React 组件都必须像纯函数一样保护它们的 props 不被更改。

## State&生命周期
### State
State 与 props 类似，但是 state 是私有的，并且完全受控于当前组件。  