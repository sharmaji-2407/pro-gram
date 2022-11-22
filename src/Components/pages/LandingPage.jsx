import { Button, Card, CardContent, Typography } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AvailableJobs from "../../lists/AvailableJobs";
import "../../styles/LandingPage.css";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { auth } from "../../firebase";

const LandingPage = () => {
  const [alertPopup, setAlertPopup] = useState(true);
  const navigate = useNavigate();

  const handleJobSeekerLogin = () => {
    navigate("/signup");
  };

  const HeadingStyle = {
    marginLeft: "3rem",
    backgroundColor: "#f3ec78",
    backgroundImage: "linear-gradient(120deg, #DB0B5F, #6F00ED)",
    backgroundSize: "100%",
    "-webkit-background-clip": "text",
    "-moz-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    "-moz-text-fill-color": "transparent",
  };

  const actionCard = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // background: "linear-gradient(to bottom, #fbc9da 0%, #fbc9da 100%)",
    backdropFilter: "blur(2.5px)",
  };

  console.log("auth-----------", auth);
  return (
    <div className="mainComponent">
      <div
        style={{
          height: "80vh",
          width: "100vw",
          display: "flex",
          marginTop: "2rem",
        }}
      >
        <Grid
          container
          component="main"
          sx={{
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
            <Typography variant="h1" className="w-9/12" sx={HeadingStyle}>
              Jobify helps to you find your dream job.
            </Typography>
          </Grid>
          <Grid
            sm={false}
            md={4}
            item
            component={Paper}
            elevation={5}
            sx={actionCard}
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
      <div
        className="sec-2 mt-20 flex items-center justify-between overflow-y-auto max-w-full"
        // style={{ overflowX: "scroll" }}
      >
        <div className="jobs flex justify-center">
          {AvailableJobs.map((job, index) => {
            return (
              <Card
                className="card"
                key={index}
                sx={{
                  mx: 5,
                  width: "15rem",
                  height: "15rem",
                  p: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                // onMouseOver={() => setIsElivated(true)}
                // onMouseOut={() => setIsElivated(false)}
              >
                <img src={job.icon} alt={job.title} />
                <CardContent>
                  <Typography
                    className="card-heading"
                    sx={{ fontSize: 16 }}
                    color="text.primary"
                    gutterBottom
                  >
                    {job.title}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
      <Grid
        container
        component="main"
        sx={{
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
          <Typography variant="h5" className="w-9/12" sx={HeadingStyle}>
            Choose amoung 1000+ posted jobs.
          </Typography>
        </Grid>
        <Grid sm={false} md={4} item sx={actionCard}>
          <Button
            variant="outlined"
            size="large"
            sx={{ p: "2rem", width: "20rem" }}
            onClick={handleJobSeekerLogin}
          >
            Find a job
          </Button>
        </Grid>
      </Grid>
      {alertPopup && (
        <div className="alert flex justify-center items-center ">
          <IconButton
            aria-label="close"
            onClick={() => setAlertPopup(false)}
            sx={{
              position: "absolute",
              right: 5,
              color: "white",
            }}
          >
            <CloseIcon />
          </IconButton>

          <Typography className="alert-text text-white">Alert</Typography>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
