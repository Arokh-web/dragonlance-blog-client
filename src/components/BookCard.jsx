import React from "react";

const BookCard = ({ book }) => {
  return (
    <div className="post-card">
      <img src={book.cover} alt="Book Cover" className="post-image" />
      <div className="post-content">
        <h2 className="post-title">{book.title}</h2>
        <p className="post-excerpt">{book.description}</p>
        <p className="post-meta">Published: {book.published_year}</p>
        <p className="post-meta">{book.authors}</p>
      </div>
    </div>
  );
};

export default BookCard;
