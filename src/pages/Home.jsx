import React from "react";
import Posts from "../pages/Posts";
import { useContext } from "react";
import { AuthContext } from "../App";

const Home = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div>
      <div>
        Welcome to the Dragonlance Blog! You are currently
        {isAuthenticated ? "Logged in" : "Not logged in"}
      </div>

      <Posts />
    </div>
  );
};

export default Home;
