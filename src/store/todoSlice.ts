import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import { Task } from '../interfaces';

interface TodoState {
  tasks: Task[];
}

const initialState: TodoState = {
  tasks: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTask: () => {
    },
    removeTask: () => {
    },
    toggleCompletion: () => {
    },
    removeCompletedTasks: () => {
    },
  },
});

export const { addTask, removeTask, toggleCompletion, removeCompletedTasks } = todoSlice.actions;

export const selectTasks = (state: RootState) => state.todo.tasks;

export default todoSlice.reducer;