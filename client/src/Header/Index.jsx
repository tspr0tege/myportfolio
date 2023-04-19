// Header with nav, title, picture, subtitle text, and call-to-action button

import React from 'react';
import { Box, Alert, AlertTitle } from '@mui/material';

const headerBoxStyle = {
  height: 'calc(100vh - 4rem)', 
  position: 'relative',
  marginTop: '4rem',
  background: 'no-repeat url("https://i.ibb.co/kXkbJHK/vscode.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center'
};

const alertStyle = {
  position: 'absolute', 
  top: '50%', 
  left: '50%', 
  transform: 'translate(-50%, -50%)'
};

export default () => {

  return (
    <Box className="hero-header" sx={headerBoxStyle}>
      {/* <img src="https://i.ibb.co/kXkbJHK/vscode.jpg" alt="PC monitor showing VSCode" style={{height: '100%', width: '100%', objectFit: 'cover', overflow: 'hidden'}}/> */}
      <Alert severity="warning" sx={alertStyle}>
        <AlertTitle>Webpage Under Construction</AlertTitle>
        Please forgive the appearance, while I work to make things awesome.
      </Alert>
    </Box>
  );

}
