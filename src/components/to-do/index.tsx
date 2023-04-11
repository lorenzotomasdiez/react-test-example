import { Box, Button, List, TextField, styled } from "@mui/material";
import { useState } from "react";
import Item from "./Item";
import { useDispatch, useSelector } from "react-redux";
import { addTask, selectTasks } from "../../store/todoSlice";

const TaskInput = styled(TextField)`
  margin-right: 16px;
`;

export default function ToDoList() {
  const tasks = useSelector(selectTasks);
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
    <Box>
      <Box display="flex">
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
      </Box>
      <List>
        {tasks.map((task) => (
          <Item task={task} key={task.id} />
        ))}
      </List>
    </Box>
  );
}
