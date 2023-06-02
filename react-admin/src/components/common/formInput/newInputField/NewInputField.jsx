import { TextField } from "@mui/material";
import React from "react";

function NewInputField() {
  return (
    <TextField
      size="small"
      fullWidth
      style={{
        border: "1px solid grey",
        borderRadius: "5px",
      }}
      InputProps={{
        style: {
          color: "black",
        },
      }}
    />
  );
}

export default NewInputField;
