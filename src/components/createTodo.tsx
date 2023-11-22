import React, {useState, FC} from 'react'
import { useAppSelector, useAppDispatch } from '../store/hooks'
import { addTodo } from '../store/createSlice'

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
        <TextField value={value} onChange={e=> setValue(e.currentTarget.value)}></TextField>
        <Button onClick={()=>createTodo()}> Create</Button>
      </Paper>: ''}
    </div>
  )
}

export default CreateTodo