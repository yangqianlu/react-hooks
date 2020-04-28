##

hook 解决的问题 1.复用困难，之前是高阶组件或者是 render-props 2.复杂组件变得难以理解在 componentDidMount 和 componentDidUpdate 中经常会写一些重复的代码或者不相关的逻辑 3.难以理解的 this

### useState

返回一个数组 第一个值是状态 第二个值是修改状态的方法
修改 state 的方法有两个特点：
  1.修改状态，
  2.修改完状态之后更新组件 
惰性初始化:如果初始 state 需要通过复杂计算获得，则可以传入一个函数，只会执行一次
函数式更新: 如果新的 state 需要通过使用先前的 state 计算得出，那么可以将函数传递给 setState。
注意：与 class 组件中的 setState 方法不同，useState 不会自动合并更新对象。你可以用函数式的 setState 结合展开运算符来达到合并更新对象的效果。
setState(prevState =>({...prevState, number:prevState.number+1}));
