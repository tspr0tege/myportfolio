import React, { useState } from 'react';
import { Box, CssBaseline, Link, Tabs, Tab } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// import ExperienceList from './ExperienceList';
// import EducationList from './EducationList';
// import ProjectList from './ProjectList';
import PortfolioItem from './PortfolioItem';
import { projects, experiences, educations } from '../database';

import Nav from './Nav';

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
});

const boxStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  p: 2,
  mt: '120px'
};

export default () => {
  const [value, setValue] = useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  };

  return (
    <ThemeProvider  theme={darkTheme}>
      <CssBaseline />
      <Nav />
      <Box sx={{ width: '100%', top: '69px', bgcolor: 'background.default', zIndex: 1 }} position="fixed">
        <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
          <LinkTab label="Education" href="#education-list" />
          <LinkTab label="Technical Experience" href="#experience-list" />
          <LinkTab label="Projects" href="#project-list" />
        </Tabs>
      </Box>
      {/* Hero Header */}
      <Box sx={boxStyle}>
        <div id="education-list" className="portfolio-list">
          {educations.map((education, index) => {
            return <PortfolioItem key={index} detailObject={education}/>
          })}
        </div>
        <div id="experience-list" className="portfolio-list">
        {experiences.map((experience, index) => {
            return <PortfolioItem key={index} detailObject={experience}/>
          })}
        </div>
        <div id="project-list" className="portfolio-list">
          {projects.map((project, index) => {
            return <PortfolioItem key={index} detailObject={project}/>
          })}
        </div>
      </Box>
    </ThemeProvider>
  );
}

const LinkTab = (props) => <Tab component={Link} {...props}/>
