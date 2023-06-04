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
import TopApiHosts from "../../components/ApiDiscovery/TopApiHosts";
import ReportIcon from '@mui/icons-material/Report';
import GppBadIcon from '@mui/icons-material/GppBad';
import ApiIcon from '@mui/icons-material/Api';
import TopAPIEndpoints from "../../components/TopAPIEndpoints";
import SwaggerUpload from "../../components/Homepage/swaggerFile";
import ApiEndPoints from "../../components/ApiEndPoints/ApiEndPoints";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="API VISIBILITY" subtitle="Last 24 hours" />
        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "15px" }} />
            Upload Swagger
          </Button>
        </Box>
      </Box>

      

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}

        <Box
  sx={{
    gridColumn: { xs: 'span 12', sm: 'span 6', md: 'span 4', lg: 'span 3' },
    backgroundColor: colors.primary[400],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}
>
  <Grid container>
    <Grid item xs={12}>
      <StatBox
        title="6"
        subtitle="Unidentified APIs"
        progress="0.75"
        increase="+14%"
        icon={<ApiIcon sx={{ color: colors.greenAccent[600], fontSize: '30px' }} />}
      />
    </Grid>
  </Grid>
</Box>

        
          {/* <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Grid container>
          <Grid items lg={4}>
          <StatBox
            title="6"
            subtitle="Unidentified APIs"
            progress="0.75"
            increase="+14%"
            icon={
              <ApiIcon
                sx={{ color: colors.greenAccent[600], fontSize: "30px" }}
              />
            }
          />
           </Grid>
         </Grid>
        </Box> */}
         
       
        <Box
          sx={{
            gridColumn: { xs: 'span 12', sm: 'span 6', md: 'span 4', lg: 'span 3' },
            backgroundColor: colors.primary[400],
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
           <Grid container>
    <Grid item xs={12}>
          <StatBox
            title="7"
            subtitle="OWASP 10 Attacks"
            progress="0.50"
            increase="+21%"
            icon={
              <GppBadIcon
                sx={{ color: colors.greenAccent[600], fontSize: "30px" }}
              />
            }
          />
          </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            gridColumn: { xs: 'span 12', sm: 'span 6', md: 'span 4', lg: 'span 3' },
            backgroundColor: colors.primary[400],
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
           <Grid container>
    <Grid item xs={12}>
          <StatBox
            title="7"
            subtitle="Recent Alerts"
            progress="0.30"
            increase="+5%"
            icon={
              <ReportIcon
                sx={{ color: colors.greenAccent[600], fontSize: "30px" }}
              />
            }
          />
          </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            gridColumn: { xs: 'span 12', sm: 'span 6', md: 'span 12', lg: 'span 3' },
            backgroundColor: colors.primary[400],
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
           <Grid container>
    <Grid item xs={12}>
          <StatBox
            title="1,325,134"
            subtitle="Traffic Received"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "30px" }}
              />
            }
          />
          </Grid>
           </Grid>
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          sx={{
            gridColumn: { xs: 'span 12', sm: 'span 12', md: 'span 12', lg: 'span 8' },
            backgroundColor: colors.primary[400],
            
          }}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Daily OWASP Attacks
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                593
              </Typography>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
          sx={{
            gridColumn: { xs: 'span 12', sm: 'span 12', md: 'span 12', lg: 'span 4' },
            backgroundColor: colors.primary[400],
            // display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          
          <Grid container>
            <Grid items lg={12} md={12} sm={12}>
              <Typography color={colors.grey[100]} variant="h5" fontWeight="600" sx={{display: 'flex', textAlign: 'center' , justifyContent: 'center' , marginTop: '20px'}}>
              Recent Alerts
            </Typography>
            <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h6"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                {transaction.cost}
              </Box>
            </Box>
          ))}
            </Grid>
          </Grid>
       
        </Box>
        
       
      
        <ApiEndPoints />
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
          sx={{
            gridColumn: { xs: 'span 12', sm: 'span 12', md: 'span 12', lg: 'span 12' },
            backgroundColor: colors.primary[400],
            // display: 'flex',
            // alignItems: 'center',
            // justifyContent: 'center',
          }}
        >
          <Typography color={colors.grey[100]} variant="h5" fontWeight="600" sx={{  margin: '25px'}}>
          Top Hosts
            </Typography>
           <TopApiHosts />
        </Box>
      
        {/* <TopApiHosts /> */}
        

        {/* Include This */}
        {/* ROW 3 */}
        {/* API Endpoint */}
        {/* <Box
          gridColumn="span 12"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Top Api Endpoints
          </Typography>
          <Box height="200px">
            <TopAPIEndpoints isDashboard={true} />
          </Box>
        </Box> */}
        {/* <Box>
            <SwaggerUpload isDashboard={true}/>
        </Box> */}
            {/* Include This */}
        {/* <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
          height="400px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Top Hosts
          </Typography>
          <Box height="300px">
            <TopApiHosts isDashboard={true} />
          </Box>
        </Box> */}
      </Box>
    </Box>
  );
};

export default Dashboard;