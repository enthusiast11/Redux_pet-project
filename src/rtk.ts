import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ITodo } from "./store/createSlice";

export const todosApi = createApi({
    reducerPath: 'todosApi',
    tagTypes: ['Todos'],
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/'}),
    endpoints: (build) => ({
        getTodos: build.query<ITodo[],string>({
            query: (limit:string| void='') => `todos${limit && `?_limit=${limit}`}`,
            providesTags: (result) =>
            result
              ? [...result.map(({id}) => ({ type: 'Todos' as const, id })), {type:'Todos', id:'LIST'}]
              :  [{type:'Todos', id:'LIST'}],
        }),
        addTodo: build.mutation({
            query: (body) => ({
                url: 'todos',
                method: 'POST',
                body,
            }),
            invalidatesTags: [{type:'Todos', id:'LIST'}]
        }),
        deleteTodo: build.mutation({
            query:(id) => ({
                url: `todos/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags:  [{type:'Todos', id:'LIST'}]
        })
    })
})

export  const {useGetTodosQuery, useAddTodoMutation, useDeleteTodoMutation} = todosApi
