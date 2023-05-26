import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const ProgressBar = ({ progress = "0.75", size = "60" }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const angle = progress * 360;
  return (
    <Box
      sx={{
        background: `linear-gradient(${colors.primary[400]} 55%, transparent 56%),
            ${colors.greenAccent[500]}`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};

export default ProgressBar;
