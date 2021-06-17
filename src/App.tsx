import React from 'react';
import './App.css';
import CounterContainer from './containers/CounterContainer';
import TodoContainer from './containers/TodoContainer';

const App: React.FC = () => {
  return (
    <TodoContainer />
  );
}

export default App;
