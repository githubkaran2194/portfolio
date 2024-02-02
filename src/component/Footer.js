import { EmailRounded, GitHub, Instagram, LinkedIn } from '@mui/icons-material';
import { AppBar, Container, List, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
  return (
    <AppBar position="static" color="primary" style={{ marginTop: '20px' }}>
      <Container maxWidth="lg" sx={{p:"20px"}}>
        <Typography variant="body2" color="inherit" align="center">
          © {new Date().getFullYear()} <a href='https://www.linkedin.com/in/karan-chavan2194/' target="_blank" rel="noreferrer" style={{ color:"white"}}> Portfolio.</a> All rights reserved.
        </Typography>
        <List sx={{display:"flex", justifyContent:"center"}}>
        <a href="https://www.linkedin.com/in/karan-chavan2194/" rel="norefer noreferrer" target="_blank" style={{margin:"0 20px", textDecoration:"none",color:"white"}}><LinkedIn /></a>
                    <a href="https://github.com/githubkaran2194" target="_blank" style={{margin:"0 20px", textDecoration:"none",color:"white"}} rel="noreferrer"><GitHub /> </a>
        <a href="https://github.com" target="_blank" style={{margin:"0 20px", textDecoration:"none", color:"white"}} rel="noreferrer"> <Instagram /></a>
          <a href="https://github.com" target="_blank" style={{margin:"0 20px", textDecoration:"none", color:"white"}} rel="noreferrer"><EmailRounded /></a>
        </List>
      </Container>
    </AppBar>
  );
};

export default Footer;
