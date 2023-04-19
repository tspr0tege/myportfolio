import React from 'react';
import { Container, CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';


import Nav from './Nav/Index';
import Header from './Header/Index';
import Projects from './Projects/Index';
import About from './About/Index';
import Testimonials from './Testimonials/Index';
import Education from './Education/Index';
import Technology from './Technology/Index';
import Contact from './Contact/Index';
import Footer from './Footer/Index';

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
});

export default () => {

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Nav />
      <div className="main-container">
        <Header />      
        <Projects />
        <About />
        <Testimonials />
        <Education />
        <Technology />
        <Contact />
      </div> 
      <Footer />
    </ThemeProvider>
  );
}
