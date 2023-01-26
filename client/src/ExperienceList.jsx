import React from 'react';
import { Paper, Box } from '@mui/material';

import { experiences } from '../database';

export default () => {
  
  
  return (
    <div id="experience-list">
      {experiences.map((experience, index) => {
        const { 
          title, 
          company, 
          status, 
          tech_used, 
          description, 
          highlight } = experience;

        return (
          <Paper key={index} elevation={3}>
            <Box sx={{p: 2}}>
              <h3>{title}</h3>
              <p>{company}</p>
              <p>{status}</p>
              {/* tech_used */}
              {(tech_used?.length > 0) && 
              <ul>Tech Used:
                {tech_used.map((tech, index) => {
                  return <li key={index}>{tech}</li>
                })}
              </ul>}
              <pre>{description}</pre>
              <h4>What I'm most proud of:</h4>
              <p>{highlight}</p>
            </Box>
          </Paper>
        )
      })}
    </div>
  );
}
