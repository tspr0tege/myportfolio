import React, { useState, useRef, useEffect } from 'react';
import { Alert, AlertTitle, Box, CssBaseline, Link, Paper, Tabs, Tab } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { projects, experiences, educations } from '../database';
// import vscodeImg from '../images/vscode.jpg'

import Nav from './Nav';
import ProjectList from './sections/ProjectList';
import ExperienceList from './sections/ExperienceList';
import EducationList from './sections/EducationList';

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

  let educationBox = useRef(null);
  let experienceBox = useRef(null);
  let projectBox = useRef(null);

  useEffect(() => {
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
          {/* <LinkTab label="Top" href="#" /> */}
          <LinkTab label="Education" href="#education-list" />
          <LinkTab label="Technical Experience" href="#experience-list" />
          <LinkTab label="Projects" href="#project-list" />
        </Tabs>
      </Box>
      {/* Hero Header */}
      <Box maxwidth="xl" sx={portfolioBoxStyle}>
        <div className="hero-header" style={{height: 'calc(100vh - 150px)', position: 'relative'}}>
          <img src="/public/images/vscode.jpg" alt="PC monitor showing VSCode" style={{height: '100%', width: '100%', objectFit: 'cover', overflow: 'hidden'}}/>
          <Alert severity="warning" sx={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
            <AlertTitle>Webpage Under Construction</AlertTitle>
            Please forgive the appearance, while I work to make things awesome.
          </Alert>
        </div>

        <EducationList educations={educations} educationBox={educationBox} />
        <ExperienceList experiences={experiences} experienceBox={experienceBox} allyProps={allyProps} />
        <h2>Projects</h2>
        <ProjectList projects={projects} projectBox={projectBox} allyProps={allyProps} />
        
      </Box>
    </ThemeProvider>
  );
}

const LinkTab = (props) => <Tab component={Link} {...props}/>

