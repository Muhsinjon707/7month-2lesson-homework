import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: Date.now(),
                text: action.payload,
                completed: false
            };
            state.push(newTodo);
        },
        toggleComplete: (state, action) => {
            const todos = state.find(todo => todo.id === action.payload);
            if (todos) todos.completed = !todos.completed;
        },
        deleteTodo: (state, action) => {
            const index = state.findIndex(todo => todo.id === action.payload);
            if (index !== -1) state.splice(index, 1);
        }
    }
})

export default todoSlice.reducer;
export const {addTodo, toggleComplete, deleteTodo} = todoSlice.actions;