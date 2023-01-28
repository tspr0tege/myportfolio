import React, { useState } from 'react';
import { Box, CssBaseline, Link, Paper, Tabs, Tab } from '@mui/material';
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

const portfolioBoxStyle = {
  display: 'flex',
  margin: 'auto',
  flexDirection: 'column',
  gap: 2,
  p: 2,
  mt: '120px'
};

const tabsBoxStyle = {
  width: '100%', 
  margin: 'auto', 
  top: '69px', 
  bgcolor: 'background.default', 
  zIndex: 1, 
};

export default () => {
  const [portfolioTab, setPortfolioTab] = useState(0);
  const [experienceTab, setExperienceTab] = useState(0);

  function changePortfolioTab(event, newValue) {
    setPortfolioTab(newValue);
  };

  function changeExperienceTab(event, newValue) {
    setExperienceTab(newValue);
  }

  function allyProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  return (
    <ThemeProvider  theme={darkTheme}>
      <CssBaseline />
      <Nav />
      <Box sx={tabsBoxStyle} position="fixed">
        <Tabs centered maxWidth="xl" value={portfolioTab} onChange={changePortfolioTab} aria-label="nav tabs example">
          <LinkTab label="Education" href="#education-list" />
          <LinkTab label="Technical Experience" href="#experience-list" />
          <LinkTab label="Projects" href="#project-list" />
        </Tabs>
      </Box>
      {/* Hero Header */}
      {/* <Paper elevation={3}> */}
      <Box maxWidth="xl" sx={portfolioBoxStyle}>
        
        <div id="education-list" className="portfolio-list">
          <h2>Education</h2>
          {educations.map((education, index) => {
            return <PortfolioItem key={index} detailObject={education}/>
          })}
        </div>

        <div id="experience-list" className="portfolio-list">
          <h2>Technical Experience</h2>
          <Paper elevation={6}>
          {/* <Box sx={{p: 1}}> */}
            {experiences.map((experience, index) => {
              return (
                <ExperienceTab  key={index} index={index} value={experienceTab}>
                  <PortfolioItem detailObject={experience}/>
                </ExperienceTab>
              );
            })}
            <Tabs
              centered
              value={experienceTab}
              onChange={changeExperienceTab}
              indicatorColor="secondary"
              textColor="inherit"
              // variant="fullWidth"
              aria-label="basic tabs example"
              >
              {experiences.map(({ title }, index) => {
                return <Tab label={title} {...allyProps(index)} />
              })}
            </Tabs>
          {/* </Box> */}
          </Paper>
        </div>
        
        <div id="project-list" className="portfolio-list">
          <h2>Projects</h2>
          {projects.map((project, index) => {
            return <PortfolioItem key={index} detailObject={project}/>
          })}
        </div>
      </Box>
      {/* </Paper> */}
    </ThemeProvider>
  );
}

const LinkTab = (props) => <Tab component={Link} {...props}/>

const ExperienceTab = ({ children, value, index, ...other }) => (
  <div
    role="tabpanel"
    hidden={value !== index}
    id={`full-width-tabpanel-${index}`}
    aria-labelledby={`full-width-tab-${index}`}
    {...other}
  >
    {value === index && (
      <Box sx={{ p: 3, pb: 0 }}>
        {children}
      </Box>
    )}
  </div>
)

