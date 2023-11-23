import React, {FC, useState} from 'react'
import { Paper, Checkbox, Typography, Button  } from '@mui/material'
import { ITodo } from '../store/slices/createTodoSlice'
import { useAppDispatch } from '../store/hooks'
import { toggleTodo } from '../store/slices/createTodoSlice'
import { deleteTodo } from '../store/slices/createTodoSlice'

const TodoItem: FC<ITodo> = ({id, title, complete}) => {
  const dispatch = useAppDispatch();
  const [locComplete, setLocComplete] = useState(complete)
  return (
    <Paper key={id} sx={{display:'flex'}}>
        
        <Checkbox
          checked={locComplete}
          onChange={() =>{dispatch(toggleTodo(id)); setLocComplete(!locComplete)}}
        />
        <Typography sx={{marginTop:'auto', marginBottom:'auto'}}>{title}</Typography>
        <Button onClick={()=>dispatch(deleteTodo(id))}>Delete</Button>
    </Paper>
  )
}

export default TodoItem
