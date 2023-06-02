import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { Box, Checkbox, FormControlLabel } from "@mui/material";
import React from "react";

function InputCheckbox({ label }) {
  return (
    <Box>
      <FormControlLabel
        control={
          <Checkbox
            defaultChecked
            icon={
              <CheckBoxOutlineBlankIcon
                sx={{ width: "30px", height: "30px" }}
              />
            }
            checkedIcon={
              <CheckBoxIcon sx={{ width: "30px", height: "30px" }} />
            }
            sx={{
              color: "#8400ed",
              "&.Mui-checked": {
                color: "#8400ed",
              },
              "& .MuiSvgIcon-root": { fontSize: 50 },
            }}
          />
        }
        label={label}
      />
    </Box>
  );
}

export default InputCheckbox;
