import React from "react";
import { useContext } from "react";
import { AuthContext } from "../App";

const Characters = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const { auth } = useContext(AuthContext);
  return <div>Characters</div>;
};

export default Characters;
