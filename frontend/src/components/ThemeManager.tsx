"use client";

import React, { createContext, useContext, useMemo, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { PaletteMode } from "@mui/material";
import { GlobalHeader } from "./GlobalHeader";
import { GlobalContainer } from "./GlobalContainer";

const ThemeContext = createContext({
  mode: "light" as "light" | "dark",
  toggleColorMode: () => {},
});

export function ThemeManager({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<PaletteMode>("light");

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ mode, toggleColorMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalHeader
          title="タレントマネジメントシステム"
        />
        <GlobalContainer>{children}</GlobalContainer>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export const useThemeManager = () => useContext(ThemeContext);