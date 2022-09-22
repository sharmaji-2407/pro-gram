import React from "react";
import { useState } from "react";
import AddnewPostPopUp from "../Popups/AddnewPostPopUp";
import Posts from "../Posts";
import Button from "@mui/material/Button";


const Home = () => {
  // const [show, setShow] = useState(false);
  // const [notification, setNotification] = useState({ title: "", body: "" });
  // const [isTokenFound, setTokenFound] = useState(false);
  const [profileArr, setProfileArr] = useState([]);
  const [newPostPopUp, setNewPostPopUp] = useState(false);

  const sendPostJson = (data) => {
    console.log(data);
    const dummyArr = profileArr;
    dummyArr.push(data);
    setProfileArr(dummyArr);
    console.log(profileArr);
  };

  return (
    <div className="flex">
      <div className="flex flex-col mt-10">
        <Button className="w-1/6 mx-auto" onClick={() => setNewPostPopUp(true)}>
          {" "}
          Add Post{" "}
        </Button>
        <AddnewPostPopUp
          open={newPostPopUp}
          onClose={() => setNewPostPopUp(false)}
          sendPostJson={sendPostJson}
        />
        <div className="flex flex-row flex-wrap justify-center">
          {profileArr.length !== 0 &&
            profileArr.map((elem, index) => {
              return (
                <div key={index}>
                  <Posts data={elem} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Home;
