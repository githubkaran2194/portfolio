import React from 'react';
import { Container, Typography, Paper, Button, CardActions } from '@mui/material';
import { Link, useParams } from 'react-router-dom'; // Assuming you're using React Router for routing
import { projects } from '../ProjectsData';

const ProjectDetail = () => {

  const { id } = useParams();
  const project = projects.find(item => item.id === parseInt(id));

  if (!project) {

    return <div>Project not found</div>;
  }

  return (
    <Container maxWidth="lg" sx={{ marginTop: '20px' }}>
      <Paper elevation={3} sx={{ padding: '20px', border: '1px solid black', boxShadow: '0 0 10px' }}>
        <Typography variant="h4" gutterBottom textAlign={'center'}>
          {project.title}
        </Typography>
        <img src={project.image} alt={project.title} style={{ width: '100%', height: '190px', marginBottom: '20px', objectFit: "contain" }} />
        <Typography variant="body1" paragraph>
          {project.description}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Technologies used: {project.technologies.join(', ')}
        </Typography>

        <CardActions sx={{ display: "flex", justifyContent: "start", alignItems: "center" }}>
          <Link to='/projects'>
            <Button variant="contained" color="secondary" >
              Back to Projects
              </Button>
              </Link>
            <Button variant='contained'>
              <a href={project.link} style={{ color: "white" }} target='_blank' rel="noreferrer">Link</a>
            </Button>
        </CardActions>
    </Paper>
    </Container >
  );
};

export default ProjectDetail;
