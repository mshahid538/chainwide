import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/UploadFileOutlined";
import EmailIcon from "@mui/icons-material/Email";
// import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
// import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import ReportIcon from '@mui/icons-material/Report';
import GppBadIcon from '@mui/icons-material/GppBad';
import ApiIcon from '@mui/icons-material/Api';
import TopAPIEndpoints from "../../components/TopAPIEndpoints";
import ApiDiscoveryHostnameList from "../apidiscoveryHostnameList";
import PieChart from "../../components/PieChart";

const ApiDiscovery = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="API DISCOVERY" subtitle="List of registered and unregistered API that our system identified" />
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Problems Identified
          </Typography>
          <Box height="250px">
            <PieChart isDashboard={true} />
          </Box>
        </Box>

        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Response Status
          </Typography>
          <Box height="250px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
    </Box>

      <Box
         marginTop={'20px'}
         backgroundColor={colors.primary[400]}
         padding="30px"      
      >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Unidentified APIs
          </Typography>
          <Box height="450px">
            <ApiDiscoveryHostnameList isDashboard={true} />
          </Box>
        </Box>
    </Box>

    );
};

export default ApiDiscovery;