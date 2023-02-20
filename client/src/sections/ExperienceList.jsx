import React, { useState } from 'react';
import { Box, Paper, Tabs, Tab } from '@mui/material';

import PortfolioItem from '../components/PortfolioItem';
import PortfolioTab from '../components/PortfolioTab';

export default ({ experiences, experienceBox, allyProps }) => {

  const [ experienceTab, setExperienceTab ] = useState(0);

  function changeExperienceTab(event, newValue) {
    setExperienceTab(newValue);
  }

  return (
    <div ref={experienceBox} id="experience-list" className="portfolio-list">
      <Paper elevation={6}>
      <Box sx={{minHeight: 'calc(100vh - 120px)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'}}>
        <h2>Technical Experience</h2>
        {experiences.map((experience, index) => {
          return (
            <PortfolioTab key={index} index={index} value={experienceTab}>
              <PortfolioItem detailObject={experience}/>
            </PortfolioTab>
          );
        })}
        <Box sx={{maxWidth: '50%', margin: '0 auto'}}>
        <Tabs
          centered
          value={experienceTab}
          onChange={changeExperienceTab}
          indicatorColor="secondary"
          textColor="inherit"
          aria-label="basic tabs example"
          >
          {experiences.map(({ title }, index) => {
            return <Tab key={index} label={title} {...allyProps(index)} />
          })}
        </Tabs>
        </Box>
      </Box>
      </Paper>
    </div>
  );
}