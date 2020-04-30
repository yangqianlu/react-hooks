import React, { useState, useReducer, useContext, useRef, useCallback, useEffect } from 'react';

const initalState = {
  duty: [],
  skill: [],
  knowledge: [],
  dimensionList: []
} //初始值
function App() {
  function reducer(state, action) {
    switch (action.type) {
      case "INIT":
        return { ...action.playload }
      case "DDTY":
        return { ...state, duty: action.playload }
      case "SKILL":
        return { ...state, skill: action.playload }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, initalState)
  useEffect(() => {
    dispatch({
      type: 'INIT', playload: {
        duty: [{ name: 'duty1', id: 1 }, { name: 'duty2', id: 2 }],
        skill: [{ name: 'skill1', id: 1 }, { name: 'skill2', id: 2 }],
        knowledge: ['knowledge'],
        dimensionList: [{ name: 'list1', id: 1 }]
      }
    })
  }, [])
  return (
    <div className="App">
      duty:{
        state.duty.length > 0 && state.duty.map(item => <div>{item.name}</div>)
      }
      skill:{
        state.skill.length > 0 && state.skill.map(item => <div>{item.name}</div>)
      }
      <button onClick={() => dispatch({ type: 'DDTY', playload: [{ name: 'duty1', id: 1 }] })}>编辑duty</button>
      <button onClick={() => dispatch({ type: 'SKILL', playload: [{ name: 'skill1', id: 1 }] })}>编辑skill</button>
    </div>
  );
}
export default App

