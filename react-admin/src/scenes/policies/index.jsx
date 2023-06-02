import { Box, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
// import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
// import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { useState } from "react";
import Header from "../../components/Header";
import PolicyList from "../../components/policies/policyList";
import PoliciesModal from "./policiesModal/PoliciesModal";

const PoliciesDashboard = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="Policies"
          subtitle="Refine your traffic using Zero Trust Policy"
        />
        <Box>
          <Button
            onClick={handleOpen}
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            Create Policy
          </Button>
        </Box>
      </Box>

      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        <Box
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
            Policy Details
          </Typography>
          <Box height="200px">
            <PolicyList isDashboard={true} />
          </Box>
        </Box>
      </Box>

      {/* modal start */}
      <PoliciesModal open={open} handleClose={handleClose} />
      {/* modal end */}
    </Box>
  );
};
export default PoliciesDashboard;
