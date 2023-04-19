import React from 'react';
import { AppBar, Button, Box, Container, Toolbar } from '@mui/material';

export default () => {

  const pages = ['Home', 'About', 'Contact'];

  /**
   * From left to right:
   * logo
   * navigation links (aligned right)
   * call-to-action button (contact or view resume?)
   */

  return (
    // From App bar with responsive menu    
    <AppBar as='nav' position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                href='#'
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}