import React, { useContext } from "react";
import { BookDataContext } from "../App";
import BookCard from "../components/BookCard";

const Books = () => {
  const { books } = useContext(BookDataContext);

  return (
    <div className="page-container">
      <h1 className="page-title"></h1>
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default Books;
