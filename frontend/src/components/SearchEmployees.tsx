"use client";
import {
  Paper,
  TextField,
  Button,
  ButtonGroup,
  Select,
  MenuItem,
  InputLabel,
  Grid,
  FormControl,
} from "@mui/material";
import { useState } from "react";
import { EmployeeListContainer } from "./EmployeeListContainer";

export function SearchEmployees() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [selectedAffiliation, setSelectedAffiliation] = useState("");
  const [selectedPosition, setSelectedPosition] = useState("");

  const handleSortChange = (order: "asc" | "desc") => {
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
        <Button
          onClick={() => handleSortChange("asc")}
          disabled={sortOrder === "asc"}
        >
          氏名 昇順
        </Button>
        <Button
          onClick={() => handleSortChange("desc")}
          disabled={sortOrder === "desc"}
        >
          氏名 降順
        </Button>
      </ButtonGroup>
      <Grid container spacing={2}>
        <Grid size={6}>
          <FormControl fullWidth>
            <InputLabel id="affiliation-select-label">所属</InputLabel>
            <Select
              labelId="affiliation-select-label"
              id="affiliation-select"
              value={selectedAffiliation}
              label="Affiliation"
              onChange={(e) => setSelectedAffiliation(e.target.value)}
            >
              <MenuItem value="">
                <em>全て</em>
              </MenuItem>
              <MenuItem value="人事部">人事部</MenuItem>
              <MenuItem value="経理部">経理部</MenuItem>
              <MenuItem value="総務部">総務部</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid size={6}>
          <FormControl fullWidth>
            <InputLabel id="position-select-label">役職</InputLabel>
            <Select
              labelId="position-select-label"
              id="position-select"
              value={selectedPosition}
              label="Position"
              onChange={(e) => setSelectedPosition(e.target.value)}
            >
              <MenuItem value="">
                <em>全て</em>
              </MenuItem>
              <MenuItem value="部長">部長</MenuItem>
              <MenuItem value="課長">課長</MenuItem>
              <MenuItem value="社員">社員</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <EmployeeListContainer
        key="employeesContainer"
        filterText={searchKeyword}
        sortOrder={sortOrder}
        filterAffiliation={selectedAffiliation}
        filterPosition={selectedPosition}
      />
    </Paper>
  );
}
