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
  
  const handleToggleCompletion = () => {
    dispatch(toggleCompletion(task.id));
  }

  const handleRemoveTask = () => {
    dispatch(removeTask(task.id));
  }

  return (
    <ListItem>
      <Checkbox
        checked={task.completed}
        onChange={handleToggleCompletion}
      />
      <ListItemText primary={task.text} />
      
      {/* <Details here ></Details> */}
      
      <ListItemSecondaryAction>
        <IconButton onClick={handleRemoveTask}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default Item;
