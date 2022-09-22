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
import logo from '../../logo.svg'

const AddnewPostPopUp = (props) => {
  const { open, onClose, sendPostJson } = props;
  const [postData, setPostData] = useState({ header: "", content: "" });
  const [errorObj, setErrorObj] = useState({ header: "", content: "" });
  const [addSnap, setAddSnap] = useState(false);

  const createNewPost = () => {
    if (validateFields()) {
      const PostJson = {
        header: postData.header,
        content: postData.content,
        image: logo
      };
      sendPostJson(PostJson);
      onClose();
    }
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
    setPostData({ ...postData, [name]: value });
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Dialog
          open={open}
          onClose={onClose}
          sx={{ borderRadius: 10, minWidth: 200 }}
        >
          <DialogTitle sx={{ bgcolor: "primary.dark" }}>
            <div className="flex mt-3 item-center">
              <Typography color="White" variant="h5">
                Create New Post
              </Typography>
            </div>
          </DialogTitle>
          <DialogContent>
            <div className="postBody flex flex-col mx-10 mt-8">
              <input
                accept="image/*"
                style={{ display: "none" }}
                id="raised-button-file"
                type="file"
              />
              <label
                htmlFor="raised-button-file"
                className="flex justify-center"
              >
                <Button
                  variant="raised"
                  component="span"
                  htmlFor="raised-button-file"
                >
                  Add Snap
                </Button>
              </label>

              <div className="flex flex-col m-10">
                <TextField
                  id="standard-basic"
                  name="header"
                  label="Post Header"
                  variant="standard"
                  onChange={handleChange}
                />
                <p>{errorObj.header}</p>
              </div>
              <div className="flex flex-col m-10">
                <TextField
                  id="standard-basic"
                  label="Post Body"
                  name="content"
                  variant="standard"
                  onChange={handleChange}
                  error={errorObj.content ? true : false}
                  helperText={errorObj?.content ? errorObj.content : ""}
                />
              </div>
            </div>
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              className="w-1/6 m-10"
              onClick={createNewPost}
            >
              +
            </Button>
          </DialogActions>
        </Dialog>
      </ThemeProvider>
    </div>
  );
};

export default AddnewPostPopUp;
