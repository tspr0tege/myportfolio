import React, { useState } from 'react';
import { CssBaseline } from '@mui/material';
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

export default () => {
  return (
    <ThemeProvider  theme={darkTheme}>
      <CssBaseline />
      <Nav />
      <ExperienceList />
      <EducationList />
      <ProjectList />
    </ThemeProvider>
  );
}
