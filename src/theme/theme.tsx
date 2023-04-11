import {
  CssBaseline,
  ThemeOptions,
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material";
import { ReactNode, useMemo, useState } from "react";
import palette from "./palette";
import breakpoints from "./breakpoints";
import componentsOverride from "./overrides";

type Props = {
  children: ReactNode;
};

export default function ThemeProvider({ children }: Props) {
  const [themeMode, setThemeMode] = useState("dark");
  const isLight = themeMode === "light";

  const themeOptions: ThemeOptions = useMemo(
    () => ({
      palette: isLight ? palette.light : palette.dark,
      breakpoints,
      shape: { borderRadius: 8 },
    }),
    [isLight]
  );

  const theme = createTheme(themeOptions);

  theme.components = componentsOverride(theme);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}
