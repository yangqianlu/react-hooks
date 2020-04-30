import React, { useState, memo, useCallback, useRef, useMemo } from 'react';
function Child({ data, add }) {
  console.log('child render')
  return <div>
    <h1>{data.number}</h1>
    <button onClick={add}>add</button>
  </div>
}
const MemoChild = memo(Child)

function App() {
  const [state, setState] = useState({ number: 0 })
  const [value, setVal] = useState('')
  const changeVal = (e) => {
    setVal(e.target.value)
  }
  const add = useCallback(() => {
    setState(prevState => ({ number: prevState.number + 1 }))
  }, [])

  const data = useMemo(() => {
    let obj = { ...state }
    obj.name = "zhufeng"
    return obj
  }, [JSON.stringify(state)])

  return (
    <div className="App">
      <input value={value} onChange={changeVal} />
      <MemoChild data={data} add={add} />
    </div>
  );
}
//useMemo 也允许你跳过一次子节点的昂贵的重新渲染：
// function Parent({ a, b }) {
//   const child1 = useMemo(() => <Child1 a={a} />, [a]);
//   // Only re-rendered if `b` changes:
//   const child2 = useMemo(() => <Child2 b={b} />, [b]);
//   return (
//     <>
//       {child1}
//       {child2}
//     </>
//   )
// }
// 注意这种方式在循环中是无效的，因为 Hook 调用 不能 被放在循环中。但你可以为列表项抽取一个单独的组件，并在其中调用 useMemo。


export default App;
