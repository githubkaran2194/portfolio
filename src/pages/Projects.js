import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { projects } from '../ProjectsData';
import { Link } from 'react-router-dom';

const Projects = () => {

  return (
    <Container maxWidth="lg" sx={{ m: "auto" }}>
      <Paper sx={{ p: '10px' }}>
        <Typography sx={{ textAlign: "center", letterSpacing: "1px", fontWeight: "bold", fontSize: "25px", lineHeight: "50px" }}>Projects</Typography>
        <Typography sx={{ textAlign: "center", letterSpacing: "1px", lineHeight: { xs: "28px" }, m: "10px 0" }}>Here you will find some of my personal projects that I created with each project containing its project stack</Typography>

        <Grid container spacing={2}>
          {projects.map((item) => (
            <Grid item key={item.id} md={4} lg={4}>
              <Card sx={{ p: "10px", cursor: "pointer", height: "100%" }} className='card-project'>
                <Link to={`/ProjectDetail/${item.id}`} style={{ textDecoration: "none" }}>
                  <CardMedia src={item.image} component={'img'} width={'100%'} height={200} sx={{ objectFit: "contain", boxShadow: "0 0 2px", background: "white", borderRadius: "5px" }} />
                  <CardContent sx={{ textAlign: "center" }}>
                    <Typography sx={{ letterSpacing: "1px", fontWeight: "bold", fontSize: "25px", lineHeight: "50px", color: "white" }}>{item.title}</Typography>
                    <Typography sx={{ mt: "10px", color: "white" }}>{item.description}</Typography>
                  </CardContent>
                </Link>
                <CardActions sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <Button variant='contained'>
                    <a href={item.link}  style={{ color: "white" }} target='_blank' rel="noreferrer">Link</a>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
};

export default Projects;
