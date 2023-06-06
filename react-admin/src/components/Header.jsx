import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        // sx={{ m: "0 0 5px 0"  }},
        sx={{m: "0 0 5px 0" , '@media screen and (max-width: 600px)': {
          fontSize: "20px",
          fontWeight: "bold",
          padding: "5px 10px",
        }}}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]} 
       sx={{m: "0 0 5px 0" , '@media screen and (max-width: 600px)': {
        fontSize: "15px",
        fontWeight: "bold",
        padding: "5px 10px",
      }}}
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;