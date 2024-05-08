import { Hive, MenuRounded } from '@mui/icons-material';
import { AppBar, Button, Container, Drawer, IconButton, List, ListItem, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Container maxWidth="md">
        <AppBar variant='elevation' color='primary'>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between", background: "#fff", color: "#333", borderBottom: "1px solid #ddd" }}>
            <Link to={'/'} style={{ fontWeight: "800", fontFamily: "playfair display", fontSize: "1.5rem", textDecoration: "none", color: "#333" }}>
              <Typography> <Hive color='secondary' /> Port<span style={{ color: "#007bff" }}>Folio</span></Typography>
            </Link>

            <List sx={{ display: { xs: "none", md: "flex", sm: "flex", lg: "flex" } }}>
              <ListItem><Link to={'/'} className='text-red-500 hover:text-gray-500'>Home</Link></ListItem>
              <ListItem><Link to={'/about'}  className='hover:text-gray-500'>About</Link></ListItem>
              <ListItem><Link to={'/projects'} className='hover:text-gray-500'>Projects</Link></ListItem>
            </List>

            <List sx={{ display: "flex", alignItems: "center" }}>
              <Link to={'/contact'} style={{ textDecoration: "none" }}>
                <Button color='primary' variant='contained' sx={{display:{xs:"none",sm:"block",md:"block"},fontSize:{sm:"12px"}}}>Contact us</Button>
              </Link>
              <IconButton onClick={() => setOpen(true)} sx={{ display: { xs: "block", md: "none", sm: "none", lg: "none" } }}>
                <MenuRounded />
              </IconButton>
            </List>
          </Toolbar>
        </AppBar>
      </Container>

      <Drawer open={open} onClose={() => setOpen(false)}>
        <Toolbar sx={{ display: "grid", background: "#fff", color: "gray", fontWeight:"bold",m:"20px 0" }}>
          <Link to={'/'} style={{ fontWeight: "800", fontFamily: "playfair display", fontSize: "1.5rem", textDecoration: "none", color: "gray", fontWeight:"bold" }} onClick={()=>setOpen(false)}>
            <Typography sx={{borderBottom:"1px solid grey"}}> <Hive color='secondary' /> Port<span style={{ color: "#007bff" }}>Folio</span></Typography>
          </Link>
          <List sx={{ marginTop: 3 }}>
            <ListItem><Link to={'/'} style={{ textDecoration: "none", color: "#333" }} onClick={()=>setOpen(false)}>Home</Link></ListItem>
            <ListItem><Link to={'/about'} style={{ textDecoration: "none", color: "#333" }} onClick={()=>setOpen(false)}>About</Link></ListItem>
            <ListItem><Link to={'/projects'} style={{ textDecoration: "none", color: "#333" }} onClick={()=>setOpen(false)}>Projects</Link></ListItem>
          </List>

          <List sx={{ marginTop: 3 }}>
            <Link to={'/contact'} style={{ textDecoration: "none" }}>
              <Button color='secondary' variant='contained' onClick={()=>setOpen(false)}>Contact us</Button>
            </Link>
          </List>
        </Toolbar>
      </Drawer>
    </>
  );
}

export default Header;
