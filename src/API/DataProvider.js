import { useEffect, useState } from "react";
import { createContext } from "react";
import {
  fetchPosts,
  fetchBooks,
  fetchCharacters,
  fetchUsers,
  fetchBookCharacters,
} from "./fetchData.js";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  // State variables for posts, books, characters, users, and bookCharacters (join table)
  const [posts, setPosts] = useState([]);
  const [books, setBooks] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [users, setUsers] = useState([]);
  const [bookCharacters, setBookCharacters] = useState([]);

  // Fetch posts from the API; using functions from fetchData.js
  useEffect(() => {
    const fetchData = async () => {
      const postsData = await fetchPosts();
      const booksData = await fetchBooks();
      const charactersData = await fetchCharacters();
      const usersData = await fetchUsers();
      const bookCharactersData = await fetchBookCharacters();

      setPosts(postsData);
      setBooks(booksData);
      setCharacters(charactersData);
      setUsers(usersData);
      setBookCharacters(bookCharactersData);
    };

    fetchData().catch((error) => {
      console.error("Error fetching data:", error);
    });
  }, []); // Fetch on load!

  return (
    <DataContext.Provider
      value={{
        posts,
        setPosts,
        books,
        setBooks,
        characters,
        setCharacters,
        users,
        setUsers,
        bookCharacters,
        setBookCharacters,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
