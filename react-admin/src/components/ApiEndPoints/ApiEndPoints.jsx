import { Box, Typography } from '@mui/material'
import React from 'react'
import TopAPIEndpoints from '../TopAPIEndpoints'
import { useTheme } from '@emotion/react';
import { tokens } from '../../theme';

function ApiEndPoints() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  
  return (
    <>
       <Box
          gridColumn="span 12"
          gridRow="span 2"
          backgroundColor={colors.primary[400]} 
          padding="30px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{
              gridColumn: { xs: 'span 12', sm: 'span 12', md: 'span 12', lg: 'span 8' },
              backgroundColor: colors.primary[400],
              
            }}
          >
            Top Api Endpoints
          </Typography>
          <Box height="200px">
            <TopAPIEndpoints isDashboard={true} />
          </Box>
        </Box>
    </>
  )
}

export default ApiEndPoints