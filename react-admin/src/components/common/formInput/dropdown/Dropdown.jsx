import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import React, { useState } from "react";
import { FormInputLabel } from "../InputField/InputField";

const Dropdown = ({ data, label, multiple = false }) => {
  const [selectedData, setSelectedData] = useState("");
  const [multipleSelected, setMultipleSelected] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    if (multiple) {
      setMultipleSelected(typeof value === "string" ? value.split(",") : value);
    } else {
      setSelectedData(event.target.value);
    }
  };

  return (
    <Box sx={{ minWidth: 120, mt: 3 }}>
      <FormInputLabel>{label}</FormInputLabel>
      <FormControl fullWidth>
        <Select
          size="small"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={multiple ? multipleSelected : selectedData}
          onChange={handleChange}
          multiple={multiple && multiple}
          style={{
            border: "1px solid grey",
            borderRadius: "5px",
            color: "black",
          }}
          InputProps={{
            style: {
              color: "black",
            },
          }}
        >
          {data?.map((singleData) => (
            <MenuItem value={singleData?.id}>{singleData?.title}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default Dropdown;
