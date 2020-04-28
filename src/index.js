import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
ReactDOM.render(
  <App list={[{ name: 'zhufeng', age: 18 }, { name: 'yql', age: 10 }]} />,
  document.getElementById('root')
);

