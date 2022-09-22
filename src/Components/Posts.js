import React, { useState } from "react";
import { Card, Typography, Button, Box } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Posts = ({ data }) => {
  const { image, content } = data;
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [liked, setLiked] = useState(false);

  function randomColor() {
    let hex = Math.floor(Math.random() * 0xffffff);
    let color = "#" + hex.toString(16);

    return color;
  }

  const handleLikeButton = (e) => {
    e.preventDefault();
    if (!liked) setLiked(true);
    else setLiked(false);
  };

  return (
    <div className="mx-5 my-2.5 shadow-md">
      <Card sx={{ maxWidth: 500, minWidth: 300 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: randomColor() }} aria-label="recipe">
              {chars[Math.floor(Math.random() * chars.length)]}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="194"
          image={image}
          alt="sharmaji's post"
        />
        <CardActions disableSpacing className="flex justify-between ">
          <div className="flex flex-row items-center">
            <IconButton onClick={handleLikeButton} aria-label="like post">
              <FavoriteIcon style={{ color: liked ? "red" : "" }} />
            </IconButton>
            <span className="text-xs antialiased">6969 likes</span>
          </div>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
        </CardActions>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            <span className="font-black text-sm">sharmaji </span> {content}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Posts;
