import React from "react";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../App";

const ButtonsBar = ({ postId }) => {
  const { admin, author, user } = useContext(AuthContext);
  const { id } = useParams();

  console.log(admin, author, id);

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      console.log("Link copied to clipboard!");
    });
  };

  return (
    <div className="buttonbar-container">
      {/* FOR OVERVIEW / POSTS PAGE - BUTTON BAR 1 */}
      {/* BUTTONS for every user */}
      <div className="buttons-every-user-container">
        {!id ? (
          <Link to={`/posts/${postId}`}>
            <button>Read more</button>
          </Link>
        ) : (
          <Link to={`/`}>
            <button className="mt-25">Back</button>
          </Link>
        )}
        <button>Like </button>
        <button>Share</button>
        <button onClick={copyLink}>Copy Link to Post</button>
      </div>

      {/* FOR DETAIL PAGE BUTTON BAR 2*/}

      {id ? (
        <>
          {/* BUTTONS for post-author*/}
          {(author || admin) && (
            <div className="buttons-post-author-container">
              <Link to={edit} post={post}>
                <button>Edit</button>
              </Link>
              <button>Delete</button>
            </div>
          )}

          {/* BUTTONS for admin */}
          {admin && (
            <div className="buttons-admin-container">
              <button>Block</button>
              <button>Moderate</button>
              <button>Change Tags</button>
              <button>See Origin</button>
            </div>
          )}
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default ButtonsBar;
