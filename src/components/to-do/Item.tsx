import { Checkbox, IconButton, ListItem, ListItemSecondaryAction, ListItemText } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { Task } from "../../interfaces";

interface Props{
  task: Task
}

function Item({task}:Props){
  const handleToggleCompletion = () => {}
  const handleRemoveTask = () => {}
  return (
    <ListItem>
      <Checkbox
        checked={task.completed}
        onChange={handleToggleCompletion}
      />
      <ListItemText primary={task.text} />
      {/* {
        <>Details Component here</>
      } */}
      <ListItemSecondaryAction>
        <IconButton onClick={handleRemoveTask}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default Item;