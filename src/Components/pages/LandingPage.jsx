import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleJobSeekerLogin = () => {
    navigate("/signup")

  }

  return (
    <>
      <Grid
        container
        component="main"
        sx={{
          height: "80vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          marginTop: "3rem",
        }}
      >
        <CssBaseline />
        <Grid item xs={false} sm={4} md={6}>
          <Box
            sx={{
              width: "60%",
              my: 8,
              mx: 4,
              ml: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              justifyContent: "center",
              // backgroundColor: 'black'
            }}
          >
            <Typography variant="h1">
              Jobify helps to you find your dream job.
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={8}
          md={6}
          component={Paper}
          elevation={5}
          sx={{ backgroundColor: "", justifyContent: "center" }}
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              variant="outlined"
              size="large"
              sx={{ p: "2rem", width: "20rem" }}
              onClick={handleJobSeekerLogin}
            >
              I'm an Employer
            </Button>
            <span className="my-5">OR</span>
            <Button variant="outlined" sx={{ p: "2rem", width: "20rem" }} onClick={handleJobSeekerLogin}>
              I'm a Job Seeker
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default LandingPage;
