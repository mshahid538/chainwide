import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataApiDiscoveryHostnameList } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";

const ApiDiscoveryHostnameList = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    {
      field: "hostname",
      headerName: "Hostname",
      flex: 0.5,
      cellClassName: "hostname-column--cell",
      headerAlign: "center",
      align: 'center'
    },
    {
      field: "basepath",
      headerName: "Base path",
      headerAlign: "center",
      align: "center",
      flex: 1,
    },
    {
      field: "dateFirstSeen",
      headerName: "Date First Seen",
      flex: 0.5,
      headerAlign: "center",
      align: 'center'
    },
    {
      field: "format",
      headerName: "Format",
      flex: 0.5,
      headerAlign: "center",
      align: 'center'
    },
    {
      field: "requestsInLast24Hours",
      headerName: "Requests in Last 24 Hours",
      flex: 0.5,
      headerAlign: "center",
      align: 'center'
    },
    {
      field: "totalErrors",
      headerName: "Total Errors",
      flex: 0.5,
      headerAlign: "center",
      align: 'center'
    },
  ];

  return (
    <Box m="20px">
      {/* <Header
        title="API Discovery"
        subtitle="List of registered and unregistered API that our system identified"
      /> */}
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .hostname-column--cell": {
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
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataApiDiscoveryHostnameList}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default ApiDiscoveryHostnameList;