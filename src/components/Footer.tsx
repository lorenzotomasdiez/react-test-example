import { Box, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { removeCompletedTasks } from "../store/todoSlice";

export default function Footer() {
  const dispatch = useDispatch();
  const handleToggleTheme = () => {};
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          bottom: 15,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Button
          variant="contained"
          color="secondary"
          onClick={() => dispatch(removeCompletedTasks())}
        >
          Remove Completed Tasks
        </Button>
      </Box>
      <Box
        sx={{
          position:"absolute",
          bottom:-40,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Button
          variant="contained"
          onClick={handleToggleTheme}
          size="small"
        >
          Toogle Theme
        </Button>
      </Box>
    </>
  );
}
