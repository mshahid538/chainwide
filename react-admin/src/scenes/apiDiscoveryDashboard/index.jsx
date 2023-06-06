import { Box, Button, Grid, IconButton, Typography, useTheme } from "@mui/material";
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
    <Box  m="20px"  sx={{width: '110% !important' ,gridColumn: { xs: 'span 12', sm: 'span 6', md: 'span 4', lg: 'span 12' , xl:'span 12', '@media screen and (min-width: 1200px)': {
      justifyContent: 'center',
    }, } }}>
      <Box>
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="API DISCOVERY" subtitle="List of registered and unregistered API that our system identified" />
      </Box>
      <Box
      >
        <Grid container >
          <Grid items lg={6} md={10} sm={6} m={2} >
          <Box
          // gridColumn="span 6"
          // gridRow="span 2"
          gridTemplateColumns="repeat(12, 1fr)"
          backgroundColor={colors.primary[400]}
          padding="30px"
          
          sx={{
            '@media screen and (min-width: 1200px)': {
              // width:'500px'
            }
          }}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Problems Identified
          </Typography>
          <Box height="250px"   >
            <PieChart isDashboard={true} />
          </Box>
        </Box>
          </Grid>
       
       
        
          <Grid items lg={5} md={10} sm={6} m={2}  >
        <Box
          // gridColumn="span 6"
          // gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
            gridTemplateColumns="repeat(12, 1fr)"
         
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Response Status
          </Typography>
          <Box height="250px" >
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        </Grid>
    </Grid>
    </Box>
    
    <Grid container m={2}>
  <Grid item lg={10} md={8} sm={6}>
    <Box
      marginTop="20px"
      backgroundColor={colors.primary[400]}
      padding="30px"
    >
      <Typography variant="h5" fontWeight="600" sx={{ marginBottom: "15px" }}>
        Unidentified APIs
      </Typography>
      <Box>
        <ApiDiscoveryHostnameList isDashboard={true} style={{height: '100px'}} />
      </Box>
    </Box>
  </Grid>
</Grid>

    {/* <Grid container sx={{ display: 'flex' , justifyContent: 'center'}}>
      <Grid item lg={10} md={8} sm={4}>
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
          <Box >
            <ApiDiscoveryHostnameList isDashboard={true} />
          </Box>
        </Box>
      </Grid>
    </Grid> */}

     

        {/* <Box
         marginTop={'20px'}
         backgroundColor={colors.primary[400]}
         padding="30px"      
      >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Recent Changes API
          </Typography>
          <Box height="650px">
            <ApiDiscoveryHostnameList isDashboard={true} />
          </Box>
        </Box> */}
        </Box>
    </Box>

    );
};

export default ApiDiscovery;