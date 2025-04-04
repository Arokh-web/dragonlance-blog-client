import React from "react";
import { useContext } from "react";
import { AuthContext } from "../App";

const Books = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const { auth } = useContext(AuthContext);
  return <div>Books</div>;
};

export default Books;
