import React, { use } from "react";
import { useContext, useEffect, useState } from "react";
import { BookDataContext, CharacterDataContext } from "../App";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import ButtonsBar from "./ButtonsBar";

const PostDetail = ({ post }) => {
  const { books } = useContext(BookDataContext);
  const { characters } = useContext(CharacterDataContext);
  const [author, setAuthor] = useState([]);

  // const { id } = useParams();
  // const isEditMode = id === "new";
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (isEditMode) {
  //     setPost({
  //       title: "",
  //       content: "",
  //       cover: "",
  //       ref_book_id: null,
  //       ref_character_id: null,
  //     });
  //     return;
  //   }
  // }, [id, isEditMode]);

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

  if (!post) {
    return <div>Loading...</div>;
  }

  const rawDate = new Date(post.date);
  const [date, time] = [
    rawDate.toISOString().slice(0, 10),
    rawDate.toTimeString().slice(0, 5),
  ];

  const current_book_ref =
    post.ref_book_id && books?.length
      ? books.find((book) => book.id === post.ref_book_id)
      : null;
  const current_char_ref =
    post.ref_character_id && characters?.length
      ? characters.find((character) => character.id === post.ref_character_id)
      : null;

  return (
    <div className="post-detail-container">
      <div className="post-detail-header">
        <img
          src={`/${post.cover}`}
          alt={post.title}
          className="post-detail-image"
        />
        <div className="post-detail-meta">
          <ButtonsBar postId={post.id} />
          <p>
            by Author {author.username} · {date}, {time} o'clock
          </p>
        </div>
      </div>

      <div className="post-detail-content">
        <h1 className="post-detail-title">{post.title}</h1>

        <p className="post-detail-body">{post.content}</p>

        {post.ref_book_id && (
          <div className="mt-6">
            <span className="font-semibold text-sm text-gray-700">
              Book Reference: {current_book_ref.title}
            </span>
          </div>
        )}

        {post.ref_character_id && (
          <div>
            <span className="font-semibold text-sm text-gray-700">
              Character Reference:{" "}
              <Link to={"/characters"}> {current_char_ref.name}</Link>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostDetail;
