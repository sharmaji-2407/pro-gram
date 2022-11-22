import { ThemeProvider } from "@material-ui/core/styles";
import { Dialog, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import "../../styles/dialogAnimation.css";
import theme from "../../theme";
// import DatePicker from "react-datepicker";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import NotesIcon from "@mui/icons-material/Notes";
import TitleIcon from "@mui/icons-material/Title";
import WorkIcon from "@mui/icons-material/Work";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "react-datepicker/dist/react-datepicker.css";

const AddnewPostPopUp = (props) => {
  const { open, onClose, sendPostJson } = props;
  const [postData, setPostData] = useState({
    header: "",
    content: "",
    jobType: "",
    jobLocation: "",
    dop: "",
  });
  const contentCharLengthLimit = 1024;
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
      sendPostJson(PostJson);
      onClose();
    }
  };

  const handleDateofPosting = (date) => {
    console.log(date);
    // setDateOfPosting(date);
  };

  const validateFields = () => {
    let dummyErrorObject = {};
    if (postData.content.length > contentCharLengthLimit) {
      dummyErrorObject = {
        ...dummyErrorObject,
        content: "Field text should be less than 1024 characters.",
      };
    }
    if (!postData.content.length) {
      dummyErrorObject = {
        ...dummyErrorObject,
        content: "Give this job a description.",
      };
    }
    if (!postData.header.length) {
      dummyErrorObject = {
        ...dummyErrorObject,
        title: "Title Cannot Be Blank",
      };
    }
    setErrorObj(dummyErrorObject);
    return Reflect.ownKeys(dummyErrorObject).length ? false : true;
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    if (
      name === "content" &&
      (value.length === 0 || value.match(/^[a-zA-Z0-9]+$/i))
    ) {
      if (value.length <= contentCharLengthLimit) {
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
                  error={!!errorObj?.title?.length}
                  helperText={errorObj?.title?.length ? errorObj.title : ""}
                />
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
                  error={errorObj?.content?.length ? true : false}
                  helperText={errorObj?.content?.length ? errorObj.content : ""}
                />
              </div>
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
