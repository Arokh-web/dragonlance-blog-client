import React from "react";
import Posts from "../pages/Posts";
import { useContext } from "react";
import { AuthContext } from "../App";

const Home = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const { auth } = useContext(AuthContext);

  return (
    <div>
      Home<Posts></Posts>
    </div>
  );
};

export default Home;
