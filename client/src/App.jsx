import React, { useState } from 'react';
import { Box, CssBaseline, Link, Tabs, Tab } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import ExperienceList from './ExperienceList';
import EducationList from './EducationList';
import ProjectList from './ProjectList';

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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider  theme={darkTheme}>
      <CssBaseline />
      <Nav />
      <Box sx={{ width: '100%', top: '69px', bgcolor: 'background.default', zIndex: 1 }} position="fixed">
        <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
          <LinkTab label="Projects" href="#project-list" />
          <LinkTab label="Technical Experience" href="#experience-list" />
          <LinkTab label="Education" href="#education-list" />
        </Tabs>
      </Box>
      {/* Hero Header */}
      <Box sx={boxStyle}>
        <ProjectList />
        <ExperienceList />
        <EducationList />
      </Box>
    </ThemeProvider>
  );
}

const LinkTab = (props) => {
  return (
    <Tab
      component={Link}
      // onClick={(event) => {
      //   event.preventDefault();
      // }}
      {...props}
    />
  );
}
