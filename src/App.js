import React, { useEffect, useCallback, useRef, useState } from 'react';

// 测量dom
// function MeasureExample() {
//   const [height, setHeight] = useState(0);

//   const measuredRef = useCallback(node => {
//     if (node !== null) {
//       setHeight(node.getBoundingClientRect().height);
//     }
//   }, []);

//   return (
//     <>
//       <h1 ref={measuredRef}>Hello, world</h1>
//       <h2>The above header is {Math.round(height)}px tall</h2>
//     </>
//   );
// }
//抽取出来 可复用的hook
function useClientRect() {
  const [rect, setRect] = useState(0);
  const ref = useCallback(node => {
    if (node !== null) {
      setRect(node.getBoundingClientRect());
    }
  }, []);
  return [ref, rect]
}
function MeasureExample() {
  let [ref, rect] = useClientRect()
  return (
    <>
      <h1 style={{ height: 60 }} ref={ref}>Hello, world</h1>
      <h2>The above header is {Math.round(rect.height)}px tall</h2>
    </>
  );
}

export default MeasureExample