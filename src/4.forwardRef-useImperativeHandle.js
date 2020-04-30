import React, { useState, useRef, useCallback, useEffect, useImperativeHandle, forwardRef } from 'react';
// const App = () => {
//   const inputRef = useRef(null)// 每次渲染返回同一个对象 {currnet:null}
//   const onFocus = () => {
//     inputRef.current.focus()//inputRef.current真实dom
//   }
//   return <div>
//     <input ref={inputRef} />
//     <button onClick={onFocus}>点击获取焦点</button>
//   </div>
// }
// export default App;
//给组件加ref 因为函数组件没有实例 所以给函数组件加forwardRef进行转发一下
//====================================================================
// const Child = (props, ref) => {
//   return <input ref={ref} />
// }
// const ForwardChild = forwardRef(Child)
// const App = () => {
//   const inputRef = useRef(null)
//   const onFocus = () => {
//     inputRef.current.focus()
//   }
//   return <>
//     <ForwardChild ref={inputRef} />
//     <button onClick={onFocus}>点击获取焦点</button>
//   </>
// }
// export default App

//====================================================================
//useImperativeHandle配合forwardRef一起使用
const Child = (props, ref) => {
  const inputRef = useRef(null)
  //子组件自定义暴露出去的方法
  useImperativeHandle(ref, () => ({
    hasfocus: () => inputRef.current.focus()
  }))

  return <input ref={inputRef} />
}
const ForwardChild = forwardRef(Child)
const App = () => {
  const inputRef = useRef(null)
  const onFocus = () => {
    inputRef.current.hasfocus()
    inputRef.current.value = 'hello'//子组件没有暴露这个方法
  }
  return <>
    <ForwardChild ref={inputRef} />
    <button onClick={onFocus}>点击获取焦点</button>
  </>
}
export default App