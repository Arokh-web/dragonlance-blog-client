import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import EditForm from "../components/EditForm";

const EditPage = ({ post }) => {
  const { id } = useParams();
  const [postEdit, setPostEdit] = useState(post);

  const loadPost = (id) => {
    fetch(`${import.meta.env.VITE_API_URL}/posts/${id}`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setPostEdit(data[0]));
  };

  const handlePostUpdate = (updatedPost) => {
    fetch(`${import.meta.env.VITE_API_URL}/posts`, {
      method: "PUT",
      headers: {
        mode: "cors",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPost),
    })
      .then((res) => res.json())
      .then(() => {
        alert("Post updated!");
        window.location.href = `/posts/${id}`;
      });
  };

  id === undefined ? (
    <div>
      Error Loading...
      <EditForm onSave={handlePostUpdate} />
    </div>
  ) : (
    loadPost(id)
  );

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <EditForm post={postEdit} onSave={handlePostUpdate} />
    </div>
  );
};

export default EditPage;
