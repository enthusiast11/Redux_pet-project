import React from 'react'
import TodoItem from './TodoItem'
import { useAppSelector } from '../store/hooks'

const TodosList = () => {
    const todos = useAppSelector(state => state.todos.list);
  return (
    <ul>
        {todos.map(todo=> (
            <TodoItem key={todo.id} {...todo} />
        ))}
    </ul>
  )
}

export default TodosList