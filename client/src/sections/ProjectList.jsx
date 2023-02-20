import React, { useState } from 'react';
import { Box, Paper, Tabs, Tab } from '@mui/material';

import PortfolioItem from '../components/PortfolioItem';
import PortfolioTab from '../components/PortfolioTab';

export default ({ projects, projectBox, allyProps }) => {
  
  const [ projectsTab, setProjectsTab ] = useState(0);

  function changeProjectsTab(event, newValue) {
    setProjectsTab(newValue);
  }

  return (
    <div ref={projectBox} id="project-list" className="portfolio-list">
      <Paper elevation={6}
        sx={{minHeight: 'calc(100vh - 120px)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'}}
      >
        <Tabs
          sx={{maxWidth: '50%', margin: '0 auto'}}
          value={projectsTab}
          onChange={changeProjectsTab}
          variant="scrollable"
          scrollButtons="auto"
          indicatorColor="secondary"
          textColor="inherit"
          aria-label="basic tabs example"
          >
          {projects.map(({ title }, index) => {
            return <Tab key={index} label={title} {...allyProps(index)} />
          })}
        </Tabs>
        {projects.map((project, index) => {
          return (
            <PortfolioTab key={index} index={index} value={projectsTab}>
              <PortfolioItem key={index} detailObject={project}/>
            </PortfolioTab>
          );
        })}
      </Paper>
    </div>
  );
}