import { Box, Typography } from '@mui/material'
import TopApiHosts from '../ApiDiscovery/TopApiHosts'
import React from 'react'

function TopApiHosts() {
  return (
    <>
         <Box
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
        </Box>
    </>
  )
}

export default TopApiHosts