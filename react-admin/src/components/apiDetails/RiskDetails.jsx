import { Box, Button, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataApiDetails } from "../../data/mockData";
import { useTheme } from "@mui/material";
import { useNavigate, Link } from 'react-router-dom';
// on your component:

const RiskDetails = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    {
      field: "hostHeader",
      headerName: "Host header",
      flex: 0.5,
      headerAlign: "center",
      align: 'center'
    },
    {
      field: "userAgent",
      headerName: "User Agent",
      flex: 0.5,
      headerAlign: "center",
      align: 'center'
    },
    {
      field: "httpMethod",
      headerName: "HTTP Method",
      flex: 0.5,
      headerAlign: "center",
      align: 'center'
    },
    {
      field: "url",
      headerName: "URL",
      flex: 0.5,
      headerAlign: "center",
      align: 'center'
    },
    {
      field: "posture",
      headerName: "Posture",
      flex: 0.5,
      headerAlign: "center",
      headerAlign: "center",
      align: 'center'
    },
    {
      field: "riskScore",
      headerName: "Risk",
      flex: 0.5,
      headerAlign: "center",
      align: 'center',
      renderCell: ({
        row: { riskScore } }) => {
          return (
            <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
                riskScore === "5"
                ? colors.redAccent[600]
                : riskScore === "4"
                ? colors.blueAccent[700]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {riskScore === "5"}
            {riskScore === "4"}
            {riskScore === "3"}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {riskScore}
            </Typography>
          </Box>
          );
        }
    },
  ];

  return (
    <Box m="20px">
      <Box
        m="40px 0 0 0"
        height="35vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
        //   "& .hostname-column--cell": {
        //     color: colors.greenAccent[300],
        //   },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataApiDetails}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default RiskDetails;