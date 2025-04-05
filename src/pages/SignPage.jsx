import React, { useContext } from "react";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import { AuthContext } from "../App";
import { Link } from "react-router-dom";

const SignPage = () => {
  const { isAuthenticated, user } = useContext(AuthContext);

  if (isAuthenticated && user) {
    return (
      <div className="sign-page-container">
        <h2>Welcome back, {user.username}!</h2>
        <p>The winds of Krynn stir once more...</p>
        <p className="link-text">
          <Link to="/posts">Enter the Realm of Posts</Link>
        </p>
        {/* {user.is_admin && (
          <p className="link-text">
            <Link to="/users">Access the Hall of Users</Link>
          </p>
        )} */}
      </div>
    );
  }

  return (
    <div className="sign-page-container">
      <h2>Welcome, Seeker of Knowledge</h2>

      <section className="sign-section">
        <h3>Already sworn the Oath?</h3>
        <p>Then step forward and Sign In:</p>
        <SignIn />
      </section>

      <section className="sign-section">
        <h3>New to the world of Krynn?</h3>
        <p>Begin your journey by creating an account:</p>
        <SignUp />
      </section>
    </div>
  );
};

export default SignPage;
