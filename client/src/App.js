import React, { useState } from 'react';
import { AppBar, Button, Box, Container, CssBaseline, Toolbar } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
});

export default () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  function handleCloseNavMenu() {
    setAnchorElNav(null);
  }

  const pages = ['Home', 'About', 'Contact'];

  return (
    // From App bar with responsive menu
    <ThemeProvider  theme={darkTheme}>
      <CssBaseline />
      <AppBar position="static">
        <Container> {/* maxWidth="xl" */}
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  href='#'
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
