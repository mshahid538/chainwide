import { Box, Button } from "@mui/material";
import React from "react";
import { ToggleButtonStyle } from "./ToggleButtonStyle";

const ToggleButton = ({ firstTile, secondTile }) => {
  const [subType, setSubType] = React.useState(`${firstTile}`);

  return (
    <Box sx={{ ...ToggleButtonStyle }}>
      <Box sx={{ display: "flex" }}>
        <Box className="mask-box">
          <Box
            className="mask"
            style={{
              transform: `translateX(${subType === firstTile ? 0 : "100px"})`,
            }}
          />
          <Button
            disableRipple
            variant="text"
            sx={{
              color: subType === firstTile ? "#ffffff" : "#5316AE",
            }}
            onClick={() => setSubType(firstTile)}
          >
            enabled
          </Button>
          <Button
            disableRipple
            variant="text"
            sx={{
              color: subType === "yearly" ? "#ffffff" : "#5316AE",
            }}
            onClick={() => setSubType("yearly")}
          >
            {secondTile}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ToggleButton;
