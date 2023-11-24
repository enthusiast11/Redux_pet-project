import { configureStore } from "@reduxjs/toolkit"
import { addTodo, deleteTodo } from "./createSlice"
import todoReducer from './createSlice';
import { todosApi } from "../rtk";
interface IAction {
    type: string
}

  
  export const store = configureStore({
    reducer: {
     todos: todoReducer,
     [todosApi.reducerPath]: todosApi.reducer,
     
    },
    middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(todosApi.middleware)
    
  })
  console.log(store);
  
  export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch