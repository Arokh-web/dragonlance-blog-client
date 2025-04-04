import React from "react";
import { Link } from "react-router-dom";

const ButtonsBar = ({ postId }) => {
  return (
    <div className="buttonbar-container">
      {/* FOR OVERVIEW / POSTS PAGE - BUTTON BAR 1 */}
      {/* BUTTONS for every user */}
      <div className="buttons-every-user-container">
        <Link to={`/posts/${postId}`}>
          <button>Read more</button>
        </Link>

        <button>Like </button>
        <button>Share</button>
        <button>Copy Link to Post</button>
      </div>
      {/* FOR DETAIL PAGE BUTTON BAR 2*/}
      {/* BUTTONS for every user */}
      {postId ? (
        <>
          <div className="buttons-every-user-container">
            <button>Comment</button>
            <button>Like</button>
            <button>Share</button>
            <button>Copy Link to Post</button>
          </div>
          {/* BUTTONS for post-author*/}
          <div className="buttons-post-author-container">
            <button>Edit</button>
            <button>Delete</button>
          </div>

          {/* BUTTONS for admin */}
          <div className="buttons-admin-container">
            <button>Block</button>
            <button>Moderate</button>
            <button>Change Tags</button>
            <button>See Origin</button>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default ButtonsBar;
