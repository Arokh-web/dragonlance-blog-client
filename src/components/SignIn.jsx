import React, { useContext, useState } from "react";
import { AuthContext } from "../App";

const SignIn = () => {
  const { setIsAuthenticated } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();

    fetch(`${import.meta.env.VITE_API_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password_hash: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          setIsAuthenticated(true);
          localStorage.setItem("token", data.token);
          console.log("You are now logged in!");
          window.location.href = "/posts";
        } else {
          alert(data.error);
        }
      });
  };

  return (
    <div className="sign-container">
      <h2>SignIn</h2>
      <form className="sign-form" onSubmit={handleSignIn}>
        <input
          type="text"
          name="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-style"
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          className="input-style"
        />
        <button className="button-style" type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
