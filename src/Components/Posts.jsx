import LocationOnIcon from "@mui/icons-material/LocationOn";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ShareIcon from "@mui/icons-material/Share";
import WorkIcon from "@mui/icons-material/Work";
import { Button, Card, Typography } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import React, { useState } from "react";

const Posts = ({ data }) => {
  const { header, content, jobLocation, dop, jobtype } = data;
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [liked, setLiked] = useState(false);

  function randomColor() {
    let hex = Math.floor(Math.random() * 0xffffff);
    let color = "#" + hex.toString(16);

    return color;
  }

  const handleApplyButton = (e) => {
    e.preventDefault();
    if (!liked) setLiked(true);
    else setLiked(false);
  };

  return (
    <div className="mx-5 my-2.5 shadow-md">
      <Card sx={{ maxWidth: 300, minWidth: 300 }}>
        <CardHeader
          sx={{backgroundColor: 'primary.light', color: 'white', marginBottom: '1rem'}}
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={header}
          // subheader={`posted on ${dop}`}
        />
        <div className="flex items-center">
          <div className="flex mx-4 items-center">
            <WorkIcon />
            <Typography
              sx={{ marginLeft: "0.5rem" }}
              className="ml-10"
              variant="body2"
              color="text.secondary"
            >
              {jobtype}
            </Typography>
          </div>
          <div className="flex mx-4 items-center">
            <LocationOnIcon />
            <Typography
              sx={{ marginLeft: "0.5rem" }}
              variant="body2"
              color="text.secondary"
            >
              {jobLocation}
            </Typography>
          </div>
        </div>

        <CardContent>
          <Typography  variant="body2" color="text.secondary">
            {content}
          </Typography>
        </CardContent>
        <CardActions disableSpacing className="flex justify-between ">
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <Button variant="contained" >Apply for Job</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Posts;
