import React from 'react';
import CreateTodo from './components/CreateTodo';
import TodosList from './components/TodosList';

function App() {
  return (
    <div >
      <CreateTodo />
      <TodosList />
    </div>
  );
}

export default App;
