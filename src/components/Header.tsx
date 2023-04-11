import { Box, Typography, styled } from "@mui/material";
import mydigitalnomads from "/cropped.jpg";

const ImageStyled = styled("img")(({ theme }) => ({
  width: "100%",
  height: "auto",
  maxWidth: "350px",
  position: "relative",
  left: "50%",
  transform: "translateX(-50%)",
}));

export default function Header() {
  return (
    <Box
      sx={(theme) => ({
        width: "100%",
        position: "relative",
        backgroundColor: theme.palette.common.white,
        padding:"10px 0",
        margin:0,
        boxShadow:theme.shadows[10],
      })}
    >
      <ImageStyled src={mydigitalnomads} alt="Vite logo" />
      <Typography component="h1" variant="h3" fontWeight={300} color="common.black" textAlign="center">
        To do List - Test
      </Typography>
    </Box>
  );
}
