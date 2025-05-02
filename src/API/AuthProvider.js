import { useEffect, useState, createContext } from "react";
import { fetchUser } from "./fetchData";

const AuthContext = createContext();

// Auth Provider
const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [author, setAuthor] = useState(false);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []); // Runs once the site loads

  // function for loading the userdata only when needed, e.g. for the profile page or authorization; ID needed
  const loadUser = async (userID) => {
    try {
      const storedUser = await fetchUser(userID);

      if (storedUser) {
        setUser(storedUser.is_user);
        setAdmin(storedUser.is_admin);
        setAuthor(storedUser.is_author);
      } else {
        setUser(false);
        setAdmin(false);
        setAuthor(false);
        console.error("User not found:", error);
      }
    } catch (error) {
      console.error("Fetching failed:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        user,
        setUser,
        admin,
        setAdmin,
        author,
        setAuthor,
        // offers the loadUser function for all the children components
        loadUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
// Auth Provider END

export { AuthProvider };
