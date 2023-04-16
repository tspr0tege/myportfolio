import React from 'react';
import { CssBaseline, Link, Tab } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';


import Nav from './Nav';
import Header from './Header/Index';
import Projects from './Projects/Index';

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
      {/* Header with nav, title, picture, subtitle text, and call-to-action button */}
      <Projects />
      {/* About section with picture, title, 1-2 paragraph description and a cta button (to what?) */}
      {/* Social Proof: testimonials */}
      {/* Social Proof: education */}
      {/* Social Proof: list of technologies I've used */}
      {/* Contact: contact form on left, picture on the right */}
    </ThemeProvider>
  );
}

const LinkTab = (props) => <Tab component={Link} {...props}/>

