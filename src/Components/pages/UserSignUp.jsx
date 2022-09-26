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
        Pro-gram
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const UserLogin = () => {
  const defaultFormData = {
    username: "",
    email: "",
    phone_number: "",
    password: "",
    fname: "",
  };

  const defaultError = {
    username: { status: false, message: "" },
    email: { status: false, message: "" },
    phone_number: { status: false, message: "" },
    password: { status: false, message: "" },
    fname: { status: false, message: "" },
    passCheck: { status: false, message: "" },
  };

  const [formData, setFormData] = useState(defaultFormData);
  const [passCheck, setPassCheck] = useState("");
  const [errorObj, setErrorObj] = useState(defaultError);

  const validatePhone = (value) => {
    var phoneno = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    console.log("Inside validation  ", value, phoneno.test(value));
    if (value.match(phoneno)) {
      return true;
    } else {
      setErrorObj({
        ...errorObj,
        phone_number: { ...errorObj.phone_number, status: true },
      });
      return false;
    }
  };

  const errorMessage = (name) => {
    if (name === "email") return "Enter Valid Email";
    return "other";
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    if (name === "phone_number") {
      if (value.length > 10) {
        setFormData(formData);
        // setErrorObj({
        //   ...errorObj,
        //   phone_number: {
        //     ...errorObj.phone_number,
        //     status: true,
        //     message: "Phone Numbers are of 10 digits",
        //   },
        // });
		return;
      } else
        setErrorObj({
          ...errorObj,
          phone_number: { ...errorObj.phone_number, status: false },
        });

      setFormData({ ...formData, [name]: value });
    }
  };

  // setFormData({ ...formData, [name]: value });

  const handleSubmit = (event) => {
    event.preventDefault();

    // const data = new FormData(event.currentTarget);
    // let data;

    //   validatePhone(value)
    //     ? ""
    //     : "";
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "80vh" }}>
        <CssBaseline />
        <Grid
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
        />
        <Grid
          item
          xs={12}
          sm={8}
          md={6}
          component={Paper}
          elevation={6}
          sx={{ backgroundColor: "" }}
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
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
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
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
                margin="normal"
                required
                fullWidth
                name="fullname"
                label="Full Name"
                type="text"
                id="fname"
                value={formData.fname}
                onChange={handleChange}
                // autoComplete="current-password"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="username"
                label="UserName"
                type="text"
                id="uname"
                value={formData.username}
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="passwordCheck"
                label="Re-enter Password"
                type="password"
                id="password_check"
                value={passCheck}
                onChange={handleChange}
              />
              <div className="flex justify-center">
                <Button
                  type="submit"
                  className="w-3/4"
                  variant="outlined"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
              </div>
              <Grid container>
                <Grid item xs>
                  {/* <Link href="#" variant="body2">
                    Forgot password?
                  </Link> */}
                </Grid>
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
      </Grid>
    </ThemeProvider>
  );
};

export default UserLogin;
