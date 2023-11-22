import React, {FC} from 'react'
import { Paper, Checkbox, Typography, Button  } from '@mui/material'
import { ITodo } from '../store/createSlice'
import { useAppDispatch } from '../store/hooks'
import { toggleTodo } from '../store/createSlice'
import { deleteTodo } from '../store/createSlice'

const TodoItem: FC<ITodo> = ({id, value, complete}) => {
  const dispatch = useAppDispatch();
  return (
    <Paper key={id}>
        
        <Checkbox
          checked={complete}
          onChange={() =>dispatch(toggleTodo(id))}
        />
        <Typography>{value}</Typography>
        <Button onClick={()=>dispatch(deleteTodo(id))}>Delete</Button>
    </Paper>
  )
}

export default TodoItem
