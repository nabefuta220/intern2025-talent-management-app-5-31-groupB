"use client";

import { AppBar, Box, Toolbar, Typography, IconButton } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Link from "next/link";
import { useThemeManager } from "./ThemeManager";

export interface GlobalHeaderProps {
  title: string;
}

export function GlobalHeader({ title }: GlobalHeaderProps) {
  const { mode, toggleColorMode } = useThemeManager();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar
          variant="dense"
          sx={{
            background:
              "linear-gradient(45deg, rgb(0, 91, 172), rgb(94, 194, 198))",
          }}
        >
          <Link href="/" passHref>
            <PeopleIcon fontSize={"large"} sx={{ mr: 2, color: "white" }} />
          </Link>
          <Link href="/" passHref>
            <Typography
              variant="h6"
              component="h1"
              sx={{ flexGrow: 1, color: "white" }}
            >
              {title}
            </Typography>
          </Link>
          <IconButton
            edge="end"
            color="inherit"
            onClick={toggleColorMode}
            sx={{ ml: 2 }}
          >
            {mode === "dark" ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
