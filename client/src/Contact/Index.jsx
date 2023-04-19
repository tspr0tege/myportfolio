// Contact: contact form on left, picture on the right

import React from 'react';
import { Box, Container } from '@mui/material';

export default () => {
  return (
    <Box> 
      <h2>Contact Me</h2>
      <Container>
        <form>
          <label>Your Name</label>
          <input type="text" placeholder="NAME"/>
          <label>Your Email</label>
          <input type="email" placeholder="EMAIL"/>
          <label>Message to Send</label>
          <textbox></textbox>
          <button>SEND --&gt;</button>
        </form>
        <img />
      </Container>
    </Box>
  )
}
