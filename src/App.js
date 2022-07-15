import './App.css';
import React from 'react';
import Title from './components/Title';
import AddTodo from './components/AddTodo';

function App() {
  return (
    <div className="App">
      <div>
        <Title />
      </div>
      <div>
        <AddTodo />
      </div>
    </div>
  );
}

export default App;
