import React from "react";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext, PostDataContext } from "../App";

const PostCard = () => {
  const { posts } = useContext(PostDataContext);
  //   const { postId } = useParams();
  //   console.log(PostDataContext);
  //   Overview: picture, title, short/teaser about text (cut?) book/char link,
  //       detail-button, like, ;
  return <div>PostCard</div>;
};

export default PostCard;
