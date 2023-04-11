import React, { useCallback } from "react";
import { Checkbox, IconButton, ListItem, ListItemSecondaryAction, ListItemText } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { Task } from "../../interfaces";
import {removeTask, toggleCompletion} from '../../store/todoSlice';
import { useDispatch } from "react-redux";

interface Props{
  task: Task
}

function Item({task}:Props){
  const dispatch = useDispatch();
  const handleToggleCompletion = useCallback(() => {
    dispatch(toggleCompletion(task.id));
  }, [dispatch, task.id]);

  const handleRemoveTask = useCallback(() => {
    dispatch(removeTask(task.id));
  }, [dispatch, task.id]);

  // const handleToggleCompletion = () => {
  //   dispatch(toggleCompletion(task.id));
  // }

  // const handleRemoveTask = () => {
  //   dispatch(removeTask(task.id));
  // }

  return (
    <ListItem>
      <Checkbox
        checked={task.completed}
        onChange={handleToggleCompletion}
      />
      <ListItemText primary={task.text} />
      <ListItemSecondaryAction>
        <IconButton onClick={handleRemoveTask}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default React.memo(Item)
// export default Item;
