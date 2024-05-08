/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import About from "./About";
import '../App.css';
import Projects from "./Projects";
import Contact from "./Contact";
import { Link } from "react-router-dom";


const Home = () => {
  const containerSx = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: {xs:"100%", md:"100vh"},
  };

  const textSx = {
    margin: { xs: "60px 0" },
    textAlign: { xs: "center", md: "center" },
  };

  const textName= {
    fontFamily: "playfair display",
    color:"orange",
    fontStyle:"normal",
    fontWeight:"800"
   }
  const titleSx = {
    fontWeight: "700",
    fontFamily: "playfair display sarif",
    color: "white",
    letterSpacing: "2px",
    fontSize: { xs: "24px", md: "28px", lg: "42px" },
    lineHeight: { xs: "36px", md: "42px", lg: "48px" },
    m: "20px 0",
  };

  const subtitleSx = {
    color: "white",
    fontFamily: "playfair display",
    fontWeight: "400",
    fontSize: "21px",
    m: "10px 0",
    fontStretch:"100%"
  };

  const buttonSx = {
    margin:{xs:"20px", md:"20px 120px"},
    gap:"10px",
    "& button": {
      mr: { xs: 0, md: 2 },
      fontWeight: "500",
      padding: "10px 35px",
    },
    display:{xs:"grid", md:"flex"},
  };

  return (
    <>
      <Container className="home-bg" maxWidth="xl" >
        <Box sx={containerSx}>
          <Grid container spacing={4}>
            <Grid item md={6} data-aos="fade-right">
              <Box sx={textSx}>
                <Typography sx={titleSx}>
                  Hi! I Am <br />
                  <span style={textName}>Karan Chavan.</span>
                </Typography>
                <Typography sx={subtitleSx}>
                A Frontend Developer Passionate About Coding. Always ready to try Hands-on New and Emerging Technologies.
                </Typography>
                <Box sx={buttonSx}>
                <Link to={'/contact'}>
                <Button
                    variant="contained"
                    sx={{ backgroundColor: "greenyellow", color: "black" }}
                  >
                    Hire Me
                  </Button>
                </Link>
                  
                 <Link to={'/projects'}>
                 <Button
                 variant="contained"
                 sx={{ backgroundColor: "ButtonShadow", color: "black" }}
               >
                 See My Work
               </Button>
                 </Link>
                </Box>
              </Box>
            </Grid>

            <Grid item md={6} data-aos="fade-left">
         <Box>
         <img src="https://satyam-pund.netlify.app/static/media/header.099918eca3da108afee8.png" width={"100%"} height={400} style={{objectFit:"contain"}} className="img"/>
         </Box>
          </Grid>
          </Grid>
        </Box>
      </Container>
    
      <About />
   <Projects/>
   <Contact/>
    </>
  );
};

export default Home;
