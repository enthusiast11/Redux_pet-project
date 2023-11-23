import React, {useEffect} from 'react';
import TodoItem from './TodoItem'
import { useAppSelector } from '../store/hooks'


const TodosList = () => {

    const todos = useAppSelector(state => state.todos.list);
    
  return (
    <div>
        {todos.map(todo=> (
            <TodoItem key={todo.id} {...todo} />
        ))}
    </div>
  )
}

export default TodosList