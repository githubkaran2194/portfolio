import { Container, Grid, Paper, TextField, Typography,Button} from '@mui/material';
import React, { useState } from 'react';
import databaseURL from '../firebase/firebase';
import { push, ref } from 'firebase/database';

const Contact = () => {
  const [user, setUser]=useState({
    name:'',
    email:'',
    message:''
  });

  const handleChange =(e)=>{
  const {name, value}=e.target;
  setUser((prev)=>({
   ...prev,
    [name]:value
  }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.name === '' || user.email === '' || user.message === '') {
      alert("Please fill in all fields");
    } else {
      try {
        await push(ref(databaseURL, 'contact'),user);
        alert("Message sent successfully!");
        setUser({
          name: '',
          email: '',
          message: ''
        });
      } catch (error) {
        console.error("Error sending message:", error);
        alert("Error sending message. Please try again later.");
      }
    }
  };
  
  console.log(user)
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
            <Paper elevation={3} sx={{ padding: '20px',border:"1px solid black" ,width:"100%"}} component={'form'} onSubmit={handleSubmit}>
              <TextField label="Enter Your Name" name="name" fullWidth margin="dense" value={user.name} 
              onChange={handleChange}/>
              <TextField label="Enter Your Email" name="email" fullWidth margin="dense" value={user.email}
              onChange={handleChange}/>
              <TextField
                label="Enter Your Message"
                multiline
                rows={4}
                fullWidth
                name="message"
                margin="dense"
                variant="outlined" value={user.message}
                onChange={handleChange}
              />
              <Button variant="contained" sx={{mt:"10px"}} type='submit'>Submit</Button>
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
