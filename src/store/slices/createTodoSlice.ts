
import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'


 export interface ITodo {
  id: string,
  title: string,
  complete: boolean

}

export interface ITodos {
  list: ITodo[],
  status?: null | string,
  error?: null | string
}

const initialState: ITodos = {
  list: []
}
export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async function() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
    const data = await response.json()
    return data as any
  }
)
export const todoSlice = createSlice({
  name: 'counter',

  initialState,
  reducers: {
    addTodo: (state: ITodos, action: PayloadAction<string>) => {
      state.list.push({
        id: Date.now().toString(),
        title: action.payload,
        complete: false
      })
    },
    deleteTodo: (state: ITodos, action: PayloadAction<string>) => {
      state.list = state.list.filter(todo => todo.id !== action.payload);
    },

    toggleTodo: (state: ITodos, action: PayloadAction<string>) => {
      const toggleTodo=  state.list.find(todo => todo.id === action.payload)
      if(toggleTodo) toggleTodo!.complete=!toggleTodo!.complete
      
      
    },
  
  },
  extraReducers: builder => {
    //  builder.addCase(fetchTodos.pending, (state,{ payload}) =>{
    //   state.status = 'loading';
    //   state.error= null;
    //  });
     builder.addCase(fetchTodos.fulfilled, (state, {payload}) =>{
      state.status = 'result';
      state.list=payload;
     });
    
    //  builder.addCase(fetchTodos.fulfilled, (state, {payload}) =>{})
  },
})

export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions



export default todoSlice.reducer