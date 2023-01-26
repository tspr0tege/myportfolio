import React from 'react';
import { Paper, Box } from '@mui/material';

import { educations } from '../database';

export default () => {  
  
  return (
    <div id="education-list">
      {educations.map((education, index) => {
        const { title, status, description } = education;

        return (
          <Paper key={index} elevation={3}>
            <Box sx={{p: 2}}>
              <h3>{title}</h3>
              <p>{status}</p>
              <pre>{description}</pre>
            </Box>
          </Paper>
        )
      })}
    </div>
  );
}