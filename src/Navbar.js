import React, { useState } from 'react';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import { Grid, TextField, Typography, Paper, Button, Drawer, List, ListItem, ListItemText, IconButton } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'mui-image';

export const Navbar = () => {
  const mobile = useMediaQuery('(max-width:600px)');
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navLinks = [
    { text: 'Our work', path: '/' , button: true},
    { text: 'Blog', path: '/blog1', button: true  },
   
    { text: 'Hire us', path: '/Hireus', button: true },
  ];

  const drawerLinks = navLinks.map((link) => (
	<ListItem button key={link.text} onClick={handleDrawerToggle}>
    <Link to={link.path} style={{ textDecoration: 'none' }}>
      <ListItemText primary={link.text} />
    </Link>
  </ListItem>
  ));

  return (
    <AppBar position="static" sx={{ backgroundColor: '#FFFFFF' }}>
      <Toolbar sx={{ flexGrow: 1 }}>
			  <Box sx={{ flexGrow: 0.4, color: '#1F2937', justifyContent: 'initial' }}>
				  <Link to='/'>
					  <Image src="https://drive.google.com/uc?export=view&id=175mDYDsRV9XKYulKbW1UgsrSOU63u2oD" style={{ width: '76px', height: '36px' }} />
					  
					  </Link>
        </Box>
        {mobile && (
          <Box sx={{ flexGrow: 2, color: '#1F2937', justifyContent: 'flex-end', display: 'flex' }}>
            <IconButton onClick={handleDrawerToggle}>
              {drawerOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Box>
        )}
        {!mobile && (
          <Box sx={{ flexGrow: 2, color: '#1F2937', justifyContent: 'end', display: 'flex' }}>
					  {navLinks.map((link) => (
				
              <Button
                key={link.text}
                component={link.button ? Link : undefined}
                to={link.button ? link.path : undefined}
                sx={{ color: link.button ? '#ffffff' : '#6B7280', bgcolor: link.button ? '#E64B18' : undefined, borderRadius: link.button ? '8px' : undefined, width: link.button ? '120px' : undefined, height: link.button ? '35px' : undefined, ml: 2 }}
              >
                {link.text}
							  </Button>
							  
            ))}
          </Box>
        )}
      </Toolbar>
      {mobile && (
        <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
          <List sx={{ width: '200px' }} onClick={handleDrawerToggle}>
            {drawerLinks}
          </List>
        </Drawer>
      )}
    </AppBar>
  );
};
