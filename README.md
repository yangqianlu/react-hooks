##

hook 解决的问题 1.复用困难，之前是高阶组件或者是 render-props 2.复杂组件变得难以理解在 componentDidMount 和 componentDidUpdate 中经常会写一些重复的代码或者不相关的逻辑 3.难以理解的 this

### useState

返回一个数组 第一个值是状态 第二个值是修改状态的方法
修改 state 的方法有两个特点： 1.修改状态， 2.修改完状态之后更新组件
惰性初始化:如果初始 state 需要通过复杂计算获得，则可以传入一个函数，只会执行一次
函数式更新: 如果新的 state 需要通过使用先前的 state 计算得出，那么可以将函数传递给 setState。
注意：与 class 组件中的 setState 方法不同，useState 不会自动合并更新对象。你可以用函数式的 setState 结合展开运算符来达到合并更新对象的效果。
setState(prevState =>({...prevState, number:prevState.number+1}));

### memo-useMemo

memo：如果子组件的 props 和 state 不改变 子组件就不更新
useMemo：返回一个 memoized 值

### useReducer

useState 是 useReducer 的语法糖
当计算新状态的逻辑比较复杂的时候用

### useContext

### useEffect-useLayoutEffect

是组件渲染到屏幕之后执行的
componentDidMount componentDidUpdate componentWillUnMount
useLayoutEffect 绘制之前执行
useEffect 在渲染之后执行（元素呈现出来之后执行）
//调接口
useEffect(() => {
async function fetchData() {
const result = await axios('https://hn.algolia.com');
setData(result.data);
}
fetchData();
}, [query]);

### forwardRef-useImperativeHandle

函数组件加 ref 子组件需要 forwardRef 包裹 并且第二个参数是 ref
为了避免父组件滥用子组件的方法，可以使用 useImperativeHandle 自定义暴露给父组件的实例值
useImperativeHandle 应当与 forwardRef 一起使用



### useRef 获取上一轮的props或state？
function Counter() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();
  useEffect(() => {
    prevCountRef.current = count;
  });
  return <h1>Now: {count}, before: {prevCountRef.current}</h1>;
}

### 自定义hook复用的是逻辑 而不是状态
