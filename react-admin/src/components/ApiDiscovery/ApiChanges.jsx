import { Box, Button } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataApiDiscoveryHostnameList } from "../../data/mockData";
import Header from "../../components/Header";
import { InputLabel } from "@mui/material";
import Select from "@mui/material/Select/Select";
import OutlinedInput from "@mui/material/OutlinedInput/OutlinedInput";
import { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem/MenuItem";
import { useTheme } from "@mui/material";
import { useNavigate, Link } from 'react-router-dom';
import FormControl from '@mui/material/FormControl';
import * as React from 'react';
// on your component:

const ApiChangesList = () => {
  const theme = useTheme();
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8; 

  const colors = tokens(theme.palette.mode);
  const names =[
    'Register',
    'Block Request',
    'Block IP',
    'Block User',
    'Alert Only'
  ];

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const [personName, setPersonName] = React.useState([]);

  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

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
      headerAlign: "center",
      align: 'center'
    },
    {
      field: "details",
      headerName: "Details",
      flex: 0.5,
      headerAlign: "center",
      align: 'center',
      renderCell: ({
        row: { details } }) => {
          return (
            <Box width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center">
            <Link to={'/apidetails'}>
              <Button type="submit" color="secondary" variant="contained">
                Details
              </Button>
            </Link>
          </Box>
          );
        }
    },
    {
      field: "Actions",
      headerName: "Actions",
      flex: 0.5,
      headerAlign: "center",
      align: 'center',
      renderCell :({
        row: { actions }}) => {
          return (
            <Box>
              <FormControl sx={{width: 100 }}>
              <InputLabel id="demo-multiple-name-label">Action</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                value={personName}
                input={<OutlinedInput label="Name" />}
                //MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
              </FormControl>
            </Box>
          )
        }
    }
    
  ];

  return (
    <Box m="20px">
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

export default ApiChangesList;