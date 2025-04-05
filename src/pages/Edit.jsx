import React, { useState } from "react";

const PostEditForm = ({ post, onSave }) => {
//   const [title, setTitle] = useState(post.title);
//   const [content, setContent] = useState(post.content);
//   const [cover, setCover] = useState(post.cover);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      ...post,
      title,
      content,
      cover,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="edit-form">
      <h2>Edit Post</h2>

      <label className="form-label">Title</label>
      <input
        className="input-style"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label className="form-label">Content</label>
      <textarea
        className="input-style"
        rows="10"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <label className="form-label">Cover Image Filename</label>
      <input
        className="input-style"
        type="text"
        value={cover}
        onChange={(e) => setCover(e.target.value)}
      />

      <button className="button-style mt-4" type="submit">
        Save Changes
      </button>
    </form>
  );
};

export default PostEditForm;
