import { EmailRounded, GitHub, Instagram, LinkedIn } from '@mui/icons-material';
import { Box, Button, Card, CardContent, CardMedia, Container, Grid, IconButton, List, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import databaseURL from '../firebase/firebase';
import { get, ref } from 'firebase/database';
import { technologies } from '../Technology';

const sxAbout = {
  margin: { xs: "60px 0", md: "0" },
  textAlign: { xs: "start", md: "center" },
  padding: "20px",
  borderRadius: "5px",
  backgroundColor: "white"
};

const imgStyle = {
  objectFit: "cover",
  borderRadius: "5px",
  transition: "0.3s"
}

const webTechnology = {
  backgroundColor: "white",
  border: '2px solid black',
  padding: '5px 20px',
  color: 'black',
  textAlign: "center",
}

const skillCard = {
  height: "100%",
  width: "100%",
  p: "10px",
  boxShadow: "none",
  '&:hover': {
    boxShadow: "0 0 10px ",
  },
  position: "sticky",
}

const About = () => {
  const [technology, setTechnology] = useState(technologies);
return (
  <>
    <Container maxWidth="xl">
      <Box sx={{ m: "70px 0" }}>
        <Grid container spacing={1}>
          <Grid item md={4} xs={12} sm={6}>
            <Box sx={imgStyle}>
              <iframe width="100%" height="315" src="https://www.youtube.com/embed/NLjgYW1S9I4?si=jdEgZ0MGx-AdHWcR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

              <Card sx={skillCard}>
                <CardMedia src="https://media.licdn.com/dms/image/D4D03AQEHcEl-theIIA/profile-displayphoto-shrink_800_800/0/1686940570729?e=1712188800&v=beta&t=0K3jptcrQe8sOZh06l4YJNiCwJdWbs0NKL2trf3RLAw" component={'img'} width={"100%"} height={150} sx={{ objectFit: "contain", borderRadius: "100%" }} />
                <CardContent>
                  <Typography sx={{
                    fontWeight: "500",
                    fontSize: { xs: "17px", md: "20px", lg: "17px" },
                    letterSpacing: "2px",
                  }} textAlign={'center'}>karan chavan</Typography>
                  <Typography sx={{ letterSpacing: "1px", fontWeight: "400" }} textAlign={'center'}>Frontend React Developer</Typography>
                  <hr />

                  <List sx={{ display: "flex", justifyContent: "center" }}>
                    <a href="https://www.linkedin.com/in/karan-chavan2194/" rel="norefer noreferrer" target="_blank" style={{ margin: "0 20px", textDecoration: "none" }}><LinkedIn /></a>
                    <a href="https://github.com/githubkaran2194" target="_blank" style={{ margin: "0 20px", textDecoration: "none" }} rel="noreferrer"><GitHub /> </a>
                    <a href="https://github.com" target="_blank" style={{ margin: "0 20px", textDecoration: "none" }} rel="noreferrer"> <Instagram /></a>
                    <a href="https://github.com" target="_blank" style={{ margin: "0 20px", textDecoration: "none" }} rel="noreferrer"><EmailRounded /></a>
                  </List>
                </CardContent>
              </Card>
            </Box>
          </Grid>
          <Grid item md={8} xs={12} sm={6}>
            <Box sx={sxAbout}>
              <Typography
                sx={{
                  fontWeight: "900",
                  fontSize: { xs: "24px", md: "28px", lg: "32px" },
                  lineHeight: { xs: "36px", md: "42px", lg: "48px" },
                  m: "20px 0",
                  borderBottom: "2px solid red"
                }}
              >
                About Me<br />
              </Typography>
              <Typography
                sx={{
                  fontWeight: "500",
                  fontSize: { xs: "17px", md: "20px", lg: "17px" },
                  letterSpacing: "2px",
                  m: "20px 0",
                }}
              >
                Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology
              </Typography>
              <Box>
                <Button sx={webTechnology}>WEB DEVELOPMENT</Button>
                <Grid container spacing={1} sx={{ m: "10px 0" }}>
                  {technology.frontend.map((item) => (
                    <Grid item md={3} sm={6} xs={6} key={item.id}>
                      <Card sx={skillCard}>
                        <CardMedia src={item.image} component={'img'} width={"90%"} height={50} sx={{ objectFit: "contain" }} />
                        <CardContent>
                          <Typography sx={{ letterSpacing: "1px", fontWeight: "500" }} textAlign={'center'}>{item.title}</Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>


                <Button sx={webTechnology}>Tools</Button>
                <Grid container spacing={2} sx={{ mt: "10px" }}>
                  {technologies.tools.map((item) => (
                    <Grid item md={3} sm={6} xs={6} key={item.id}>
                    <Card sx={skillCard}>
                      <CardMedia src={item.image} component={'img'} width={"90%"} height={50} sx={{ objectFit: "contain" }} />
                      <CardContent>
                        <Typography sx={{ letterSpacing: "1px", fontWeight: "500" }} textAlign={'center'}>{item.title}</Typography>
                      </CardContent>
                    </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  </>
);
};

export default About;
