import React from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../App";
import { useContext } from "react";

const Header = () => {
  const { setIsAuthenticated, isAuthenticated } = useContext(AuthContext);
  const { auth } = useContext(AuthContext);

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("token");
  };

  return (
    <div className="header-container flex-col">
      <div className="header-logo-container">
        {/* LOGO */}
        <div name="logo">
          <img src="/logo.webp" className="img-logo"></img>
        </div>
        {/* TITLE */}
        <div name="title">
          <h1 className="header-title ">
            The Dragonlance <br></br>Fan Blog!
          </h1>
        </div>
      </div>

      {/* NAVIGATION */}
      <nav>
        <ul className="header-nav">
          <li className="header-nav-li">
            <Link to="/">Home</Link>
          </li>
          <li className="header-nav-li">
            <Link to="posts">Main Blog</Link>
          </li>
          <li className="header-nav-li">
            {isAuthenticated || auth ? (
              <Link to="posts/new">Create Post</Link>
            ) : (
              <></>
            )}
          </li>
          <li className="header-nav-li">
            <Link to="dragonlance_books">Books</Link>
          </li>
          <li className="header-nav-li">
            <Link to="dragonlance_characters">Characters</Link>
          </li>

          <li className="header-nav-li">
            {isAuthenticated || auth ? (
              <>
                <Link to="profile">Profile</Link>
              </>
            ) : (
              <></>
            )}
          </li>
          <li className="header-nav-li">
            {isAuthenticated || auth ? (
              <>
                <Link to="/" onClick={handleLogout}>
                  Log out
                </Link>
              </>
            ) : (
              <Link to="signpage">Log in or SignUp</Link>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
