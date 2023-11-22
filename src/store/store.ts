import { configureStore } from "@reduxjs/toolkit"
import { addTodo, deleteTodo } from "./createSlice"
import todoReducer from './createSlice';
interface IAction {
    type: string
}

  
  export const store = configureStore({
    reducer: {
     todos: todoReducer
    },
  })
  console.log(store);
  
  export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch