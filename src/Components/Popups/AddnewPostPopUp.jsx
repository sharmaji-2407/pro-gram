import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Typography, Dialog } from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../../theme";
import "../../styles/dialogAnimation.css";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import NotesIcon from "@mui/icons-material/Notes";
import TitleIcon from "@mui/icons-material/Title";
import WorkIcon from "@mui/icons-material/Work";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { DatePicker } from "@material-ui/pickers";


const AddnewPostPopUp = (props) => {
  const { open, onClose, sendPostJson } = props;
  const [postData, setPostData] = useState({
    header: "",
    content: "",
    jobType: "",
    jobLocation: "",
    dop: "",
  });
  const [errorObj, setErrorObj] = useState({ header: "", content: "" });
  // const [dateOfPosting, setDateOfPosting] = useState(new Date());
  // const [addSnap, setAddSnap] = useState(false);

  const dropDownValueArr = ["Full-Time", "Contractual"];
  const [jobType, setJobType] = useState("");

  console.log();

  const createNewPost = () => {
    if (validateFields()) {
      const PostJson = {
        header: postData.header,
        content: postData.content,
        jobtype: jobType,
        jobLocation: postData.jobLocation,
        // dop: dateOfPosting.toLocaleString().split(",")[0],
      };
      console.log(PostJson);
      sendPostJson(PostJson);
      onClose();
    }
  };

  const handleDateofPosting = (date) => {
    console.log(date);
    // setDateOfPosting(date);
  };

  const validateFields = () => {
    if (postData.content.length > 5 && postData.content.length === 0) {
      setErrorObj({
        ...errorObj,
        content: "Field text should be less than 1024 characters",
      });
      console.log("inside validator  ", errorObj);
      return false;
    } else {
      setErrorObj({});
      return true;
    }
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    if (
      name === "content" &&
      (value.length === 0 || value.match(/^[a-zA-Z0-9]+$/i))
    ) {
      if (value.length <= 5) {
        setPostData({ ...postData, [name]: value });
      }
      return;
    }
    if (name === "jobLocation") {
      setPostData({ ...postData, [name]: value });
    }
    setPostData({ ...postData, [name]: value });
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Dialog
          fullWidth
          maxWidth="xs"
          open={open}
          onClose={onClose}
          sx={{ borderRadius: 10, minWidth: 200 }}
          className="px-10"
        >
          <DialogTitle sx={{ bgcolor: "primary.dark" }}>
            <div className="flex mt-3 item-center">
              <Typography color="#CEEDFF" variant="body">
                Create New Job Posting
              </Typography>
            </div>
          </DialogTitle>
          <DialogContent>
            <div className="flex flex-col mt-2">
              {/* <input
                accept="image/*"
                style={{ display: "none" }}
                id="raised-button-file"
                type="file"
                name="image"
                onChange={handleChange}
              />
              <label
                htmlFor="raised-button-file"
                className="flex justify-center"
              >
                <Button
                  variant="outlined"
                  component="span"
                  htmlFor="raised-button-file"
                  sx={{
                    color: "primary.main",
                    "&:hover": { backgroundColor: "#cce6ff" },
                  }}
                >
                 <AddAPhotoIcon /> <span className="ml-2"> Add Snap</span>
                </Button>
              </label>
              <img src={postData.image} alt="" /> */}

              <div className="flex mx-2 my-5 items-center">
                <TitleIcon color="primary" className="mr-5" />
                <TextField
                  required
                  className="w-3/4"
                  id="standard-basic"
                  name="header"
                  label="Job Title"
                  variant="outlined"
                  onChange={handleChange}
                />
                <p>{errorObj.header}</p>
              </div>
              <div className="flex mx-2 my-5 items-center">
                <NotesIcon color="primary" className="mr-5" />
                <TextField
                  required
                  className="w-3/4"
                  id="standard-basic"
                  label="Job Description"
                  name="content"
                  variant="outlined"
                  onChange={handleChange}
                  error={errorObj.content ? true : false}
                  helperText={errorObj?.content ? errorObj.content : ""}
                />
              </div>
              {/* <div className="flex mx-2 my-5 items-center">
                <CalendarMonthIcon color="primary" className="mr-5" />
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    // openTo="year"
                    format="dd/MM/yyyy"
                    inputVariant="outlined"
                    label=""
                    views={["year", "month", "date"]}
                    value={dateOfPosting}
                    onChange={(e) => handleDateofPosting(e)}
                    className="mb-24 w-full"
                  />
                </LocalizationProvider>
              </div> */}
              <div className="flex flex-row mx-2 my-5 items-center">
                <AddLocationAltIcon color="primary" className="mr-5" />
                <TextField
                  required
                  className="w-3/4"
                  id="standard-basic"
                  label="Job Location"
                  name="jobLocation"
                  variant="outlined"
                  onChange={handleChange}
                  error={errorObj.dop ? true : false}
                  helperText={errorObj?.dop ? errorObj.dop : ""}
                />
              </div>
              <div className="flex mx-2 my-5 items-center">
                <WorkIcon color="primary" className="mr-5" />
                <div>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel required id="demo-simple-select-label">
                        Job Type
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={jobType}
                        label="Job Type"
                        onChange={(e) => setJobType(e.target.value)}
                      >
                        {dropDownValueArr.map((data, index) => {
                          return (
                            <MenuItem key={index} value={data}>
                              {data}
                            </MenuItem>
                          );
                        })}
                      </Select>
                    </FormControl>
                  </Box>
                </div>
              </div>
            </div>
          </DialogContent>
          <div className="flex justify-center">
            <DialogActions>
              <Button
                variant="contained"
                sx={{ margin: "2rem" }}
                className="w-1/6 "
                onClick={createNewPost}
              >
                Post
              </Button>
            </DialogActions>
          </div>
        </Dialog>
      </ThemeProvider>
    </div>
  );
};

export default AddnewPostPopUp;
