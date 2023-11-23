import { configureStore, applyMiddleware } from "@reduxjs/toolkit"
import { addTodo, deleteTodo } from "./slices/createTodoSlice"
import todoReducer from './slices/createTodoSlice';
import thunk from "redux-thunk";
interface IAction {
    type: string
}

  
  export const store = configureStore({
    reducer: {
     todos: todoReducer,
    },
  },)
  console.log(store);
  
  export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch