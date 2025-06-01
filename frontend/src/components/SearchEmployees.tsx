"use client";
import { Paper, TextField, Button, ButtonGroup } from "@mui/material";
import { useState } from "react";
import { EmployeeListContainer } from "./EmployeeListContainer";

export function SearchEmployees() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const handleSortChange = (order: 'asc' | 'desc') => {
    setSortOrder(order);
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
      <ButtonGroup variant="outlined" aria-label="sort order buttons">
         <Button onClick={() => handleSortChange('asc')} disabled={sortOrder === 'asc'}>
          氏名 昇順
        </Button>
      <Button onClick={() => handleSortChange('desc')} disabled={sortOrder === 'desc'}>
          氏名 降順
        </Button>
      </ButtonGroup>
      <EmployeeListContainer
        key="employeesContainer"
        filterText={searchKeyword}
        sortOrder={sortOrder}
      />
    </Paper>
  );
}
