import React, { useState, useRef } from 'react';
// 每次渲染都有自己的事件处理函数
// 每次渲染都有自己的state和props
let lastAdd;
function App(props) {
  let [state, setState] = useState({ number: 0 })
  //惰性初始化
  let [list, setList] = useState(() => {
    //惰性初始化只会执行一次
    return props.list.map(item => item.age + 10)
  })
  let newState = useRef(null) //useRef可以保存新值或者旧值
  const add = () => {
    setState({
      number: state.number + 1
    })
    newState.current = state.number + 1// //useRef可以保存新值
  }
  const showAdd = () => {
    console.log(newState.current, 'newState')
    setTimeout(() => {
      console.log(state.number) //打印的是当时的那个state
    }, 3000);
  }
  const asyncAdd = () => {
    setTimeout(() => {
      // setState传入的是函数，那么始终基于最新的状态上修改的
      setState(prevState => {
        return {
          number: prevState.number + 1
        }
      })
    }, 1000);
  }
  console.log(lastAdd === add, 'lastAdd==add') //false 每次渲染都有自己的事件处理函数
  lastAdd = add;
  return (
    <div className="App">
      {state.number}
      <button onClick={add}>add</button>
      <button onClick={showAdd}>show</button>
      <button onClick={asyncAdd}>asyncAdd</button>
      <ul>
        {list.map(item => {
          return <li>{item}</li>
        })}
      </ul>
    </div>
  );
}
export default App;
