import React from 'react';
import { CssBaseline, Link, Tab } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';


import Nav from './Nav';
import Header from './Header/Index';
import Projects from './Projects/Index';
import About from './About/Index';
import Testimonials from './Testimonials/Index';
import Education from './Education/Index';
import Technology from './Technology/Index';
import Contact from './Contact/Index';

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
});


export default () => {

  return (
    <ThemeProvider  theme={darkTheme}>
      <CssBaseline />
      {/* <Nav /> */}
      <Header />      
      <Projects />
      <About />
      <Testimonials />
      <Education />
      <Technology />
      <Contact />
    </ThemeProvider>
  );
}

const LinkTab = (props) => <Tab component={Link} {...props}/>

