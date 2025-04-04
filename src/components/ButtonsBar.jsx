import React from "react";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../App";

const ButtonsBar = ({ postId }) => {
  const { isAuthenticated } = useContext(AuthContext);
  const { auth } = useContext(AuthContext);
  const { id } = useParams();

  return (
    <div className="buttonbar-container">
      {/* FOR OVERVIEW / POSTS PAGE - BUTTON BAR 1 */}
      {/* BUTTONS for every user */}
      <div className="buttons-every-user-container">
        <button>Like </button>
        <button>Share</button>
        <button>Copy Link to Post</button>
        {!id ? (
          <Link to={`/posts/${postId}`}>
            <button>Read more</button>
          </Link>
        ) : (
          <button className="mt-25">Back</button>
        )}
      </div>

      {/* FOR DETAIL PAGE BUTTON BAR 2*/}

      {/* BUTTONS for every user */}
      {id ? (
        <>
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
