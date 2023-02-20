import React from 'react';
import { Box } from '@mui/material';

export default ({ children, value, index, ...other }) => {

  const panelStyle = (value === index) ? {flexGrow: 1, display: 'grid'} : {};

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      style={panelStyle}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, pt: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          {children}
        </Box>
      )}
    </div>
  )
}
