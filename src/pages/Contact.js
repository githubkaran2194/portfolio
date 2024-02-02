import { Container, Grid, Paper, TextField, Typography,Button} from '@mui/material';
import React from 'react';

const Contact = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: '20px' }}>
      <Paper elevation={3} sx={{ padding: '20px',border:"1px solid black", boxShadow:"0 0 107px" }}>
        <Typography variant="h4" gutterBottom textAlign={'center'}>
          Contact
        </Typography>
        <Typography variant="body1" paragraph textAlign={'center'}>
          Feel free to contact me by submitting the form below, and I will get back to you as soon as possible.
        </Typography>
        <Grid container spacing={4}>
          <Grid item md={6}>
            <Paper elevation={3} sx={{ padding: '20px',border:"1px solid black" ,width:"100%"}}>
              <TextField label="Enter Your Name" fullWidth margin="dense" />
              <TextField label="Enter Your Email" fullWidth margin="dense" />
              <TextField
                label="Enter Your Message"
                multiline
                rows={4}
                fullWidth
                margin="dense"
                variant="outlined"
              />
              <Button variant="contained" sx={{mt:"10px"}}>Submit</Button>
            </Paper>
          </Grid>
          <Grid item md={6}>
          <img src="https://satyam-pund.netlify.app/static/media/header.099918eca3da108afee8.png" height={350} width={"100%"}/>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Contact;
