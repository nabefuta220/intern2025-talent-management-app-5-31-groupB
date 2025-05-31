"use client";
import { Paper, TextField } from "@mui/material";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { green } from '@mui/material/colors';
import { useState } from "react";
import { SxProps } from '@mui/system';
import { EmployeeListContainer } from "./EmployeeListContainer";

export function SearchEmployees() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const fabStyle = {
    position: 'absolute',
    bottom: 16,
    right: 16,
  };
  const fabGreenStyle = {
    color: 'common.white',
    bgcolor: green[500],
    '&:hover': {
      bgcolor: green[600],
    },
  };
  const fab = 
    {
      color: 'inherit' as 'inherit',
      sx:{ ...fabStyle, ...fabGreenStyle } as SxProps,
      icon: <AddIcon />,
      label: 'Add',
    }
  
  const handleAddEmployees = () =>
    {
      console.log("Add Employees clicked");
    };

  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        flex: 1,
        p: 2,
      }}
    >
      <TextField
        placeholder="検索キーワードを入力してください"
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
      />
      <EmployeeListContainer
        key="employeesContainer"
        filterText={searchKeyword}
      />
      <Fab sx={fab.sx} aria-label={fab.label} color={fab.color} onClick={ handleAddEmployees }>
        {fab.icon}
          </Fab>
  
    </Paper>
  );
}
