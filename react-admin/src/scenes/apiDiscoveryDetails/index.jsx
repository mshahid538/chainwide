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
import RiskDetails from "../../components/apiDetails/RiskDetails";
import ProgressCircle from "../../components/ProgressCircle";
import ReportIcon from '@mui/icons-material/Report';
import GppBadIcon from '@mui/icons-material/GppBad';
import ApiIcon from '@mui/icons-material/Api';
import TopAPIEndpoints from "../../components/TopAPIEndpoints";
import ApiDiscoveryHostnameList from "../apidiscoveryHostnameList";
import PieChart from "../../components/PieChart";
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import ApiTabs from "../../components/apiDetails/ApiTabs";

const ApiDiscoveryDetails = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="API Details" subtitle="Granular view of the selected API" />
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
          sx={{
            gridColumn: { xs: 'span 12', sm: 'span 12', md: 'span 12', lg: 'span 8' },
            backgroundColor: colors.primary[400],
            
          }}
        >
          <Typography
            variant="h5"
            fontWeight="600"
          >
            Requests Hits
          </Typography>
          <Box height="250px">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
          sx={{
            gridColumn: { xs: 'span 12', sm: 'span 12', md: 'span 12', lg: 'span 4' },
            backgroundColor: colors.primary[400],
            
          }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              API Alerts
            </Typography>
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
        </Box>
      </Box>
      <Box
         marginTop={'20px'}
         backgroundColor={colors.primary[400]}
         padding="30px"   
         sx={{
          gridColumn: { xs: 'span 12', sm: 'span 10', md: 'span 10', lg: 'span 8' },
          backgroundColor: colors.primary[400],
          
        }}   
      >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Risk Details
          </Typography>
          <Box height="250px">
            <RiskDetails isDashboard={true} />
          </Box>
        </Box>
        <Box
         marginTop={'20px'}
         backgroundColor={colors.primary[400]}
         padding="30px"
         sx={{
          gridColumn: { xs: 'span 12', sm: 'span 10', md: 'span 10', lg: 'span 8' },
          backgroundColor: colors.primary[400],
          
        }}         
      >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Header Details
          </Typography>
          <Box height="550px">
            <ApiTabs isDashboard={true} />
          </Box>
        </Box>

    </Box>

    );
};

export default ApiDiscoveryDetails;