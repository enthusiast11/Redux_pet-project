import { createSlice,  } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

 export interface ITodo {
  id: string,
  value: string,
  complete: boolean
}

interface Todos {
  list: ITodo[]
}

const initialState: Todos = {
  list: []
}

export const counterSlice = createSlice({
  name: 'counter',

  initialState,
  reducers: {
    addTodo: (state: Todos, action: PayloadAction<string>) => {
      state.list.push({
        id: Date.now().toString(),
        value: action.payload,
        complete: false
      })
    },
    deleteTodo: (state: Todos, action: PayloadAction<string>) => {
      state.list = state.list.filter(todo => todo.id !== action.payload);
    },

    toggleTodo: (state, action: PayloadAction<string>) => {
      const toggleTodo=  state.list.find(todo => todo.id === action.payload)
      if(toggleTodo) toggleTodo!.complete=!toggleTodo!.complete
      
      
    },
  
  },
})

export const { addTodo, deleteTodo, toggleTodo } = counterSlice.actions



export default counterSlice.reducer