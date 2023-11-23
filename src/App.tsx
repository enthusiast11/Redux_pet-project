import React, {useEffect} from 'react';
import CreateTodo from './components/CreateTodo';
import TodosList from './components/TodosList';
import { Container } from '@mui/material';
import NocompleteTodos from './components/NocompleteTodos';
import CompleteTodos from './components/CompleteTodos';
import { fetchTodos } from './store/slices/createTodoSlice';
import { useAppDispatch } from './store/hooks';

function App() {
  
  const dispatch = useAppDispatch()
    useEffect(() =>{
      dispatch(fetchTodos())
    })
  return (
    <Container >
      <CreateTodo />
      <TodosList />
      <CompleteTodos />
      <NocompleteTodos />
    </Container>
  );
}

export default App;
