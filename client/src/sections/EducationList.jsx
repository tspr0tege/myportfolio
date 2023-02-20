import React from 'react';
import { Box, Paper } from '@mui/material';

import PortfolioItem from '../components/PortfolioItem';

export default ({ educations, educationBox }) => {
  return (

    <div ref={educationBox} id="education-list" className="portfolio-list">
      <Paper elevation={6}>
      <Box>
      <h2>Education</h2>
        {educations.map((education, index) => {
          return <PortfolioItem key={index} detailObject={education}/>
        })}
      </Box>
      </Paper>
    </div>
  );
}