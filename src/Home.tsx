import { Box } from "@mui/material";
import { Body, Header } from "./components";
import breakpoints from "./theme/breakpoints";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <Box
      margin="auto"
      maxWidth={breakpoints.values.sm}
      sx={(theme) => ({
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[10],
        borderRadius:"16px",
        minHeight:"90vh",
        position:"relative"
      })}
    >
      <Header />
      <Body />
      <Footer />
    </Box>
  );
}
