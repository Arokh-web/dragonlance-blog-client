import React from "react";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext, PostDataContext } from "../App";
import { useNavigate } from "react-router-dom";


const ButtonsBar = () => {



  return (
    <div className="buttonbar">
      {/* FOR OVERVIEW / POSTS PAGE - BUTTON BAR 1 */}
      {/* BUTTONS for every user */}
      <div className="buttons-every-user">
        <button className="buttonStyle">Read on & Details</button>
        <button className="buttonStyle">Like</button>
        <button className="buttonStyle">Share</button>
        <button className="buttonStyle">Copy Link to Post</button>
      </div>

      {/* FOR DETAIL PAGE BUTTON BAR 2*/}
      {/* BUTTONS for every user */}
      <div className="buttons-every-user">
        <button className="buttonStyle">Comment</button>
        <button className="buttonStyle">Like</button>
        <button className="buttonStyle">Share</button>
        <button className="buttonStyle">Copy Link to Post</button>
      </div>
      {/* BUTTONS for post-author*/}
      <div className="buttons-post-author">
        <button className="buttonStyle">Edit</button>
        <button className="buttonStyle">Delete</button>
      </div>

      {/* BUTTONS for admin */}
      <div className="buttons-admin">
        <button className="buttonStyle">block/report</button>
        <button className="buttonStyle">moderate</button>
        <button className="buttonStyle">change category/tags</button>
        <button className="buttonStyle">See backend origin</button>
      </div>
    </div>
  );
};

export default ButtonsBar;
