import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import '../../styles/LandingPage.css'

const LandingPage = () => {
  const navigate = useNavigate();

  const handleJobSeekerLogin = () => {
    navigate("/signup");
  };

  return (
    <div className="mainComponent">
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
        <Grid
          item
          xs={false}
          sm={4}
          md={4}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
          }}
        >
          <Typography
            variant="h1"
            className="w-9/12"
            sx={{ marginLeft: "3rem" }}
          >
            Jobify helps to you find your dream job.
          </Typography>
        </Grid>
        <Grid
          sm={false}
          md={4}
          item
          component={Paper}
          elevation={5}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="flex flex-col items-center my-12">
            <Button
              variant="outlined"
              size="large"
              sx={{ p: "2rem", width: "20rem" }}
              onClick={handleJobSeekerLogin}
              
            >
              I'm an Employer
            </Button>
            <span className="my-5">OR</span>
            <Button
              variant="outlined"
              sx={{ p: "2rem", width: "20rem" }}
              onClick={handleJobSeekerLogin}
            >
              I'm a Job Seeker
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default LandingPage;
