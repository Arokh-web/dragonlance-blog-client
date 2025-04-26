import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const EditForm = (post) => {
  const [title, setTitle] = useState(post.title || "");
  const [content, setContent] = useState(post.content || "");
  const [cover, setCover] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData object to handle file upload
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("cover", cover);

    // Check if all fields are filled
    if (!title || !content || !cover) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const res = await fetch(`http://localhost:3000/posts/${post.id}`, {
        method: "PUT",
        body: formData,
      });
      if (!res.ok) {
        throw new Error("Failed to update post");
      }

      const result = await res.json();
      console.log("Post updated successfully:", result);
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="edit-form-container">
      <h1>Edit Post</h1>

      <label>Title</label>
      <input
        className="input-style"
        type="text"
        placeholder={post.title}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label>Content</label>
      <textarea
        rows="10"
        placeholder={post.content}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <label>Cover Image Filename</label>
      <input
        className="input-style"
        type="file"
        placeholder={post.cover}
        value={cover}
        onChange={(e) => setCover(e.target.value)}
      />

      <button className="button-style " type="submit">
        Save Changes
      </button>
    </form>
  );
};

export default EditForm;
