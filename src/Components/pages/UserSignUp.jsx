import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../../theme";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Typography } from "@mui/material";
import formLogo from "../../Media/Background.jpeg";
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
      {/* {'Copyright © '} */}
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
    username: "",
    email: "",
    phone_number: "",
    password: "",
    fname: "",
  };

  const defaultError = {
    email: { status: false, message: "" },
    password: { status: false, message: "" },
    // username: { status: false, message: "" },
    // phone_number: { status: false, message: "" },
    // fname: { status: false, message: "" },
    // passCheck: { status: false, message: "" },
  };

  const [formData, setFormData] = useState(defaultFormData);
  const [passCheck, setPassCheck] = useState(false);
  const [errorObj, setErrorObj] = useState(defaultError);
  const [passwrodCheck, setPasswrodCheck] = useState("");

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const validPasswordCheck = (event) => {
    const password = event.target.value;
    setPasswrodCheck(password);
    if (formData.password === password) {
      setPassCheck(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = formData;
    if (passCheck) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((auth) => {
          navigate("/home");
        })
        .catch((err) => {
          handleError(err);
        });
    }
  };

  const handleError = (error) => {
    const { message } = error;
    console.log(error.message);
    if(message.includes("Password"))
    setErrorObj({...errorObj, password : { status : true , message : message}})
    else if(message.includes("email"))
    setErrorObj({...errorObj, password : { status : true , message : message}})
    else{
      setErrorObj({...errorObj, password : { status : false , message : ''} , email : { status : false , message : ''}})
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="flex justify-center items-center">
        {/* <Grid container component="main" sx={{ height: "50vh", width: "80vw" }}> */}
        <CssBaseline />
        {/* <Grid
            item
            xs={false}
            sm={4}
            md={6}
            sx={{
              background: `url(${formLogo})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "left",
            }}
          /> */}
        <Grid
          item
          xs={12}
          sm={8}
          md={4}
          component={Paper}
          elevation={10}
          sx={{
            backgroundColor: "#3636360d",
            height: "90vh",
            width: "60vw",
            marginTop: "1rem",
          }}
        >
          <Box
            sx={{
              my: 3,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "primary.dark" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <Box
              component="form"
              noValidate
              fullWidth
              onSubmit={handleSubmit}
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
                helperText={errorObj?.email.status ? errorObj.email.message : ''}
              />
              {/* <TextField
                fullWidth
                margin="normal"
                required
                name="phone_number"
                label="Phone Number"
                type="text"
                id="phno"
                error={errorObj.phone_number.status}
                helperText={
                  errorObj.phone_number.status
                    ? errorObj.phone_number.message
                    : ""
                }
                onChange={handleChange}
                value={formData.phone_number}
                // autoComplete="current-password"
              />
              <TextField
                fullWidth
                margin="normal"
                required
                name="fullname"
                label="Full Name"
                type="text"
                id="fname"
                value={formData.fname}
                onChange={handleChange}
                // autoComplete="current-password" 
              />
              <TextField
                fullWidth
                margin="normal"
                required
                name="username"
                label="UserName"
                type="text"
                id="uname"
                value={formData.username}
                onChange={handleChange}
              /> */}
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
                helperText={errorObj?.password.status ? errorObj.password.message : ''}
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
                  type="submit"
                  className="w-3/4"
                  variant="outlined"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
              </div>
              <Grid container className="felx justify-center">
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
        {/* </Grid> */}
      </div>
    </ThemeProvider>
  );
};

export default UserSignUp;
