import React from "react";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext, PostDataContext } from "../App";
import { useNavigate } from "react-router-dom";
import ButtonsBar from "./ButtonsBar";

const PostCard = ({ post }) => {
  const { isAuthenticated } = useContext(AuthContext);
  const { auth } = useContext(AuthContext);
  const [author, setAuthor] = useState([]);
  //   Overview: picture, title, short/teaser about text (cut?) book/char link,
  //       detail-button, like, ;

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/users/${post.author_id}`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data) {
          console.error("Author not found");
          return;
        }
        setAuthor(data[0]);
      });
  }, [post]);

  const rawDate = new Date(post.date);
  const [date, time] = [
    rawDate.toISOString().slice(0, 10),
    rawDate.toTimeString().slice(0, 5),
  ];

  return (
    <div>
      <div className="post-card">
        <img src={post.cover} alt="Post Cover" className="post-image" />

        <div className="post-content">
          <div>
            <h2 className="post-title">{post.title}</h2>
            <p className="post-meta">
              {author.username} · {date}, {time} o'clock
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
