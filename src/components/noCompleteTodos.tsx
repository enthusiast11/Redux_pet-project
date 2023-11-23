import React, {useState} from 'react'
import TodoItem from './TodoItem'

import { useAppSelector } from '../store/hooks'


import { Paper, Typography, Button, TextField,  } from '@mui/material'


const NocompleteTodos = () => {
  const [vis, setVis] = useState(false)

  const todos = useAppSelector(state => state.todos.list.filter(todo => todo.complete !== true));
  return (
    <Paper sx={{backgroundColor: 'red' }}>
      <div style={{display:'flex'}}>
        <Button onClick={() => setVis(!vis)} sx={{color:'white'}}><Typography color={'white'}>Complete todos</Typography></Button>
      </div>
      
    {vis ? <Paper>
      {todos.map(todo=> (
        <TodoItem key={todo.id} {...todo} />
      ))}
      </Paper>: ''}
    </Paper>
  )
}

export default NocompleteTodos