import React from "react";
import Posts from "../pages/Posts";
import { useContext } from "react";
import { AuthContext } from "../App";

const Home = () => {
  const { isAuthenticated, admin, author, user } = useContext(AuthContext);

  return (
    <div>
      <div className="home-container flex-col">
        Welcome to the Dragonlance Blog! You are currently
        {isAuthenticated ? " logged in" : "not logged in"}
        <p>
          Welcome {user.username}
          {admin && "Boss!"}
          {author && "author! What will be your next Blogpost?"}!
        </p>
      </div>

      <Posts />
    </div>
  );
};

export default Home;
