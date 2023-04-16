/* 
3 projects highlight with picture and descriptions 
Catwalk, Quest Log, and Codewars
*/

import React from 'react';
import { Box, Container, Paper } from '@mui/material';

const containerStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: '50px',
  padding: '50px',
  minHeight: '50vh'
};

export default () => {
  return (
    <Box>
      <h2>Projects</h2>
      <Container sx={containerStyle}>
        <Paper elevation={6}>
          Catwalk
        </Paper>
        <Paper elevation={6}>
          Quest Log
        </Paper>
        <Paper elevation={6}>
          Codewars
        </Paper>
      </Container>
    </Box>
  );
}