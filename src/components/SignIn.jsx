import React, { useContext, useState } from "react";
import { AuthContext } from "../App";

const SignIn = () => {
  const { setIsAuthenticated, setUser, setAdmin, setAuthor } =
    useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log("Sending login for:", JSON.stringify(username));

    fetch(`${import.meta.env.VITE_API_URL}/users/login`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username.trim(),
        password_hash: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Login response:", data);
        setIsAuthenticated(true);
        console.log("User logged in:", data.username);
        setUser(data);
        setAdmin(data.is_admin);
        console.log("User ID admin?:", data.is_admin);
        setAuthor(data.is_author);
        console.log("User ID author?:", data.is_author);
        localStorage.setItem("token", data.created_at);
        // window.location.href = "/";
      });
  };

  return (
    <div className="sign-container">
      <h2>SignIn</h2>
      <form className="sign-form" onSubmit={handleSignIn}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input-style"
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
