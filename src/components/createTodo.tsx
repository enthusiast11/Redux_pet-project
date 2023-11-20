import React, {useState, FC} from 'react'
import { useAppSelector, useAppDispatch } from '../store/hooks'
import { addTodo } from '../store/createSlice'

import { Button, TextField, Typography } from '@mui/material'
const createTodo = () => {
    function add() {
        const count = useAppSelector((state) => state.counter.value)
        const dispatch = useAppDispatch()
    }
  return (
    <div>createTodo</div>
  )
}

export default createTodo