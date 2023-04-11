import { Box } from "@mui/material";
import { Body, Footer, Header } from "./components";
export default function Home() {
  return (
    <Box
      margin="auto"
      sx={(theme) => ({
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[10],
        borderRadius:"16px",
        minHeight:"90vh",
        position:"relative",
        maxWidth:theme.breakpoints.values.sm
      })}
    >
      <Header />
      <Body />
      <Footer />
    </Box>
  );
}
