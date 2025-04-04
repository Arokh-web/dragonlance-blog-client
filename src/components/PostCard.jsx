import React from "react";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext, PostDataContext } from "../App";
import { useNavigate } from "react-router-dom";
import ButtonsBar from "./ButtonsBar";

const PostCard = ({ post }) => {
  const { isAuthenticated } = useContext(AuthContext);
  const { auth } = useContext(AuthContext);
  //   Overview: picture, title, short/teaser about text (cut?) book/char link,
  //       detail-button, like, ;
  return (
    <div>
      <div className="post-card">
        <img src={post.cover} alt="Post Cover" className="post-image" />

        <div className="post-content">
          <div>
            <h2 className="post-title">{post.title}</h2>
            <p className="post-meta">
              {post.author_id} · {post.date}
            </p>
            <p className="post-excerpt">{post.content}</p>
          </div>
          <ButtonsBar postId={post.id} />
        </div>
      </div>
    </div>
  );
};

export default PostCard;
