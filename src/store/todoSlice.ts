import { PayloadAction, createSlice } from '@reduxjs/toolkit';
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
    addTask: (state, action: PayloadAction<string>) => {
      state.tasks.push({ id: Date.now(), text: action.payload, completed: false });
    },
    removeTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    toggleCompletion: (state, action: PayloadAction<number>) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    removeCompletedTasks: (state) => {
      state.tasks = state.tasks.filter((task) => !task.completed);
    },
  },
});

export const { addTask, removeTask, toggleCompletion, removeCompletedTasks } = todoSlice.actions;

export const selectTasks = (state: RootState) => state.todo.tasks;

export default todoSlice.reducer;