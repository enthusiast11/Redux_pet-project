import React, {useState, FC} from 'react'
import { useAppSelector, useAppDispatch } from '../store/hooks'
import { addTodo } from '../store/slices/createTodoSlice'

import { Button, TextField, Typography, Paper } from '@mui/material'
const CreateTodo = () => {
    const [vis, setVis] = useState(false)
    const [value, setValue] = useState('')
    const dispatch = useAppDispatch()

    const createTodo = () => {
      
      dispatch(addTodo(value))
      setValue('')
    }
  return (
    <div>
      <Button onClick={() => setVis(!vis)}>Create todo</Button>
      {vis ? <Paper>
        <TextField size='small' value={value} onChange={e=> setValue(e.currentTarget.value)}></TextField>
        <Button sx={{mt:'auto',mb:'auto'}} onClick={()=>createTodo()}> Create</Button>
      </Paper>: ''}
    </div>
  )
}

export default CreateTodo