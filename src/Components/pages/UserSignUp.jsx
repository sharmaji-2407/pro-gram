import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../../theme";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Typography } from "@mui/material";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      <Link color="inherit" href="/">
        jobify
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const UserSignUp = () => {
  const defaultFormData = {
    email: "",
    password: "",
  };

  const defaultError = {
    email: { status: false, message: "" },
    password: { status: false, message: "" },
  };

  const [formData, setFormData] = useState(defaultFormData);
  const [passCheck, setPassCheck] = useState(false);
  const [errorObj, setErrorObj] = useState(defaultError);
  const [passwrodCheck, setPasswrodCheck] = useState("");
  const [finalErr, setfinalErr] = useState(true);

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { value, name } = event.target;
    if (value === "") setfinalErr(true);

    setFormData({ ...formData, [name]: value });
  };

  const validPasswordCheck = (event) => {
    const passwordCheck = event.target.value;
    setPasswrodCheck(passwordCheck);
    if (formData.password === passwordCheck) {
      console.log("inside pass check");
      setPassCheck(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { email, password } = formData;
    console.log(formData);
    if (passCheck) {
      console.log("inside api call");
      createUserWithEmailAndPassword(auth, email, password)
        .then((auth) => {
          navigate("/home");
        })
        .catch((err) => {
          handleError(err);
          console.error(err);
        });
    }
  };

  const handleError = (error) => {
    const { message } = error;
    if (message.includes("Password"))
      setErrorObj({
        ...errorObj,
        password: { status: true, message: "Invalid Email" },
      });
    else if (message.includes("email"))
      setErrorObj({
        ...errorObj,
        password: { status: true, message: "Invalid Password" },
      });
    else {
      setErrorObj({
        ...errorObj,
        password: { status: false, message: "" },
        email: { status: false, message: "" },
      });
    }
    return error ? setfinalErr(true) : setfinalErr(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="flex justify-center items-center">
        <CssBaseline />
        <Grid
          item
          xs={12}
          sm={8}
          md={4}
          component={Paper}
          elevation={10}
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#3636360d",
            height: "85vh",
            width: "60vw",
            // marginTop: "1rem",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              my: 3,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "primary.dark" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography
              component="h1"
              variant="h5"
              sx={{ marginBottom: "3.5rem" }}
            >
              Sign Up
            </Typography>
            <Box
              component="form"
              noValidate
              fullWidth
              sx={{
                mt: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "30vw",
              }}
            >
              <TextField
                fullWidth
                margin="normal"
                required
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                autoFocus
                error={errorObj?.email.status}
                helperText={
                  errorObj?.email.status ? errorObj.email.message : ""
                }
              />
              <TextField
                fullWidth
                margin="normal"
                required
                name="password"
                label="Password"
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                error={errorObj?.password.status}
                helperText={
                  errorObj?.password.status ? errorObj.password.message : ""
                }
              />
              <TextField
                fullWidth
                margin="normal"
                required
                name="passwordCheck"
                label="Re-enter Password"
                type="password"
                id="password_check"
                value={passwrodCheck}
                onChange={validPasswordCheck}
              />
              <div className="flex justify-center">
                <Button
                  fullWidth
                  onClick={handleSubmit}
                  className="w-3/4"
                  variant="outlined"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
              </div>
              <Grid container className="felx justify-center mt-12">
                <Grid item>
                  <Link href="/Login" variant="body2">
                    {"Have an account? Login"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </div>
    </ThemeProvider>
  );
};

export default UserSignUp;
