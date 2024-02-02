import React from 'react';
import { Container, Typography, Paper, Button } from '@mui/material';
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
        <img src={project.image && "https://img.freepik.com/free-vector/html5-programming-internet-website-development-web-application-engineering-script-writing-html-code-optimization-programmer-fixing-bugs_335657-2678.jpg?w=740&t=st=1706870078~exp=1706870678~hmac=097b603603fe31469d53b94719e8af99629ef1d939574d464dc47413ee26e59a"} alt={project.title} style={{ width: '100%', height:'190px', marginBottom: '20px', objectFit:"contain" }} />
        <Typography variant="body1" paragraph>
          {project.description}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Technologies used: {project.technologies.join(', ')}
        </Typography>
       <Link to='/projects'>
       <Button variant="contained" color="primary" sx={{ marginTop: '10px' }}>
       Back to Projects
     </Button>
       </Link>
      </Paper>
    </Container>
  );
};

export default ProjectDetail;
