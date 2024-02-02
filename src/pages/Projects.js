import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Paper, Typography } from '@mui/material'
import React from 'react'

const Projects = () => {
  return (
    <Container maxWidth="lg" sx={{ m: "auto" }}>
      <Paper sx={{ p: '10px' }}>
        <Typography sx={{ textAlign: "center", letterSpacing: "1px", fontWeight: "bold", fontSize: "25px", lineHeight: "50px" }}>Projects</Typography>
        <Typography sx={{ textAlign: "center", letterSpacing: "1px", lineHeight: { xs: "28px" } }}>Here you will find some of my personal projects that I created with each project containing its project stack</Typography>

        <Grid container spacing={2}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <Grid item key={item.id} md={4} lg={4}>
              <Card sx={{ p: "10px", cursor: "pointer" }} className='card-project'>
                <CardMedia src='https://satyam-pund.netlify.app/static/media/header.099918eca3da108afee8.png' component={'img'} width={'100%'} height={200} sx={{ objectFit: "contain", boxShadow: "0 0 2px", background: "white", borderRadius: "5px" }} />
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography sx={{ letterSpacing: "1px", fontWeight: "bold", fontSize: "25px", lineHeight: "50px", color: "white" }}>Quick Shop</Typography>
                  <Typography sx={{ mt: "10px", color: "white" }}>Road To JS is a platform that contains the collection of JavaScript begineers friendly projects in one place</Typography>
                </CardContent>
                <CardActions sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <Button variant='contained'>Code</Button>
                  <Button variant='contained'>Demo</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  )
}

export default Projects 