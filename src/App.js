import React, { useEffect, useRef, useState } from 'react';
// function Counter() {
//   const [count, setCount] = useState(0);

//   const prevCountRef = useRef();
//   useEffect(() => {
//     prevCountRef.current = count;
//   });
//   const prevCount = prevCountRef.current;

//   return <>
//     <h1>Now: {count}, before: {prevCount}</h1>
//     <button onClick={() => setCount(count + 1)}>点击加1</button>
//   </>
// }
// export default Counter

// 可以将获取上一轮的 props 或 state抽取成一个自定义 Hook
function usePrevious(value) {
  let ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

function Counter() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);
  return <>
    <h1>Now: {count}, before: {prevCount}</h1>
    <button onClick={() => setCount(count + 1)}>点击加1</button></>;
}

export default Counter