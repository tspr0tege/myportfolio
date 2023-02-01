import React, { useState, useRef, useEffect } from 'react';
import { Alert, AlertTitle, Box, CssBaseline, Link, Paper, Tabs, Tab } from '@mui/material';
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
  const [ portfolioTab, setPortfolioTab ] = useState(0);
  const [ experienceTab, setExperienceTab ] = useState(0);
  const [ projectsTab, setProjectsTab ] = useState(0);

  let educationBox = useRef(null);
  let experienceBox = useRef(null);
  let projectBox = useRef(null);

  useEffect(() => {
    // console.log(educationBox.current.offsetTop);
    // console.log(experienceBox.current.offsetTop);
    // console.log(projectBox.current.offsetTop);
    function onScroll() {
      if (window.scrollY > (projectBox.current.offsetTop - 150)) {
        setPortfolioTab(2);        
      } else if (window.scrollY > (experienceBox.current.offsetTop - 150)) {
        setPortfolioTab(1);
      } else if (window.scrollY > (educationBox.current.offsetTop - 150)) {
        setPortfolioTab(0);
      }
    }
    window.addEventListener('scroll', onScroll);

    return () => { window.removeEventListener('scroll', onScroll) }
  });

  function changePortfolioTab(event, newValue) {
    setPortfolioTab(newValue);
  };

  function changeExperienceTab(event, newValue) {
    setExperienceTab(newValue);
  }

  function changeProjectsTab(event, newValue) {
    setProjectsTab(newValue);
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
        <Tabs centered maxwidth="xl" value={portfolioTab} onChange={changePortfolioTab} aria-label="nav tabs example">
          <LinkTab label="Education" href="#education-list" />
          <LinkTab label="Technical Experience" href="#experience-list" />
          <LinkTab label="Projects" href="#project-list" />
        </Tabs>
      </Box>
      {/* Hero Header */}
      {/* <Paper elevation={3}> */}
      <Box maxwidth="xl" sx={portfolioBoxStyle}>
        <Alert severity="warning">
          <AlertTitle>Webpage Under Construction</AlertTitle>
          Please forgive the appearance, while I work to awesome-itize this page.
        </Alert>
        
        <div ref={educationBox} id="education-list" className="portfolio-list">
          <h2>Education</h2>
          {educations.map((education, index) => {
            return <PortfolioItem key={index} detailObject={education}/>
          })}
        </div>

        <div ref={experienceBox} id="experience-list" className="portfolio-list">
          <h2>Technical Experience</h2>
          <Paper elevation={6}>
          <Box sx={{minHeight: 'calc(100vh - 120px)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'}}>
            {experiences.map((experience, index) => {
              return (
                <PortfolioTab  key={index} index={index} value={experienceTab}>
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
        
        <div ref={projectBox} id="project-list" className="portfolio-list">
          <h2>Projects</h2>
          <Paper elevation={6}>
          <Box sx={{minHeight: 'calc(100vh - 120px)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'}}>
            {projects.map((project, index) => {
              return (
                <PortfolioTab  key={index} index={index} value={projectsTab}>
                  <PortfolioItem key={index} detailObject={project}/>
                </PortfolioTab>
              );
            })}
            <Box sx={{maxWidth: '50%', margin: '0 auto'}}>
            <Tabs
              // centered
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
            </Box>
          </Box>
          </Paper>
        </div>
      </Box>
      {/* </Paper> */}
    </ThemeProvider>
  );
}

const LinkTab = (props) => <Tab component={Link} {...props}/>

const PortfolioTab = ({ children, value, index, ...other }) => (
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

