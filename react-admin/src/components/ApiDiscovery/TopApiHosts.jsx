import { Box, Typography, useTheme} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTopHosts } from "../../data/mockData";
import { useNavigate, Link } from 'react-router-dom';
import { Button } from "@mui/material";


const TopApiHosts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    {
      field: "hostName",
      headerName: "Hosts",
      flex: 1,
      cellClassName: "api-endpoints-column--cell",
      headerAlign: "center"
    },
    {
      field: "numberOfRequests",
      flex: 0.5,
      headerName: "Requests Count",
      type: "number",
      headerAlign: "center",
      align: "center"
    },
    {
        field: "trafficPercent",
        headerName: "Traffic %",
        type: "float",
        headerAlign: "center",
        align: "center"
    }
  ];

  return (
    <Box m="20px">
      <Box
        m="0px 0 0 0"
        // height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .api-endpoints-column--cell": {
            color: colors.greenAccent[300],
          },
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
        }}
      >
        <DataGrid rows={mockDataTopHosts} columns={columns} />
      </Box>
    </Box>
  );
};

export default TopApiHosts;