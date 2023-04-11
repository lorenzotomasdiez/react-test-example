import { Box, Button, List, Stack, TextField, styled } from "@mui/material";
import React, { useState } from "react";
import Item from "./Item";
import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
  removeCompletedTasks,
  selectTasks,
} from "../../store/todoSlice";
import { Task } from "../../interfaces";

const TaskInput = styled(TextField)`
  margin-right: 16px;
`;

const exampleTask = {
  id: 0,
  text: "Example task here",
  completed: true,
};

export default function ToDoList() {
  return (
    <Box>
      <AddTaskForm />
      <ListComponent  />
    </Box>
  );
}

const ListComponent = React.memo(() => {
  const tasks = useSelector(selectTasks);
  return (
    <List>
      {tasks.map((task) => (
        <Item task={task} key={task.id} />
      ))}
      {/* <Item task={exampleTask} /> */}
    </List>
  );
});

const AddTaskForm = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim() !== "") {
      dispatch(addTask(inputValue.trim()));
      setInputValue("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <Stack direction={"row"} spacing={"16px"}>
      <TaskInput
        label="New task"
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        fullWidth
      />
      <Button variant="contained" color="primary" onClick={handleAddTask}>
        Add Task
      </Button>
    </Stack>
  );
};
