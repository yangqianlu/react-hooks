## 
hook解决的问题
1.复用困难，之前是高阶组件或者是render-props
2.复杂组件变得难以理解在componentDidMount和componentDidUpdate中经常会写一些重复的代码或者不相关的逻辑
3.难以理解的this

### useState 
返回一个数组 第一个值是状态 第二个值是修改状态的方法
修改state的方法有两个特点：1.修改状态，2.修改完状态之后更新组件
