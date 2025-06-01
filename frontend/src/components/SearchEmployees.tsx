"use client";
import { Paper, TextField } from "@mui/material";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { green } from "@mui/material/colors";
import { useState, useRef } from "react";
import { SxProps } from "@mui/system";
import Papa from "papaparse";
import { EmployeeListContainer } from "./EmployeeListContainer";
import { Employee } from "../models/Employee";

async function uploadToBackend(data: Employee[]) {
  console.log("Uploading data to backend:");
  try {
    const response = await fetch("/api/upload/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ employees: data }),
    });

    if (!response.ok) {
      throw new Error("Failed to upload data");
    }

    console.log("search: Uploaded successfully");
  } catch (error) {
    console.error("Upload error:", error);
  }
}

export function SearchEmployees() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const fabStyle = {
    position: "absolute",
    bottom: 16,
    right: 16,
  };
  const fabGreenStyle = {
    color: "common.white",
    bgcolor: green[500],
    "&:hover": {
      bgcolor: green[600],
    },
  };
  const fab = {
    color: "inherit" as const,
    sx: { ...fabStyle, ...fabGreenStyle } as SxProps,
    icon: <AddIcon />,
    label: "Add",
  };

  const handleAddEmployees = () => {
    console.log("Add Employees clicked");

    if (inputRef.current == null) return;
    inputRef.current.click();
  };
  const onFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files == null) return;
    const file = event.target.files[0];
    console.log("Selected file:", file);
    Papa.parse(file, {
      header: true, // ヘッダー行を自動的にキーにする
      skipEmptyLines: true,
      complete: async (results) => {
        const data = results.data as Employee[]; // CSV→JSONの配列
        console.log("Parsed JSON:", data);
        await uploadToBackend(data); // JSONをバックエンドへ送信（前述の関数）
      },
      error: (err) => {
        console.error("CSV parsing failed:", err);
      },
    });
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
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchKeyword(e.target.value)
        }
      />
      <EmployeeListContainer
        key="employeesContainer"
        filterText={searchKeyword}
      />
      <Fab
        sx={fab.sx}
        aria-label={fab.label}
        color={fab.color}
        onClick={handleAddEmployees}
      >
        {fab.icon}
      </Fab>
      <input
        type="file"
        className="hidden"
        accept=".csv"
        ref={inputRef}
        onChange={onFileInputChange}
      />
    </Paper>
  );
}
/*
reactでjsonに変換してからアップロードした方がよさげ
papaase：csv -> jsonへの変換が簡単かも
dymano DBでcsvでのファイルアップロードをしたい
*/

/*


*/
