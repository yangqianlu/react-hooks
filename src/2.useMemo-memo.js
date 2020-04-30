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
export default App;
