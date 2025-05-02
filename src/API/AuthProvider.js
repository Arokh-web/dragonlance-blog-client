import { useEffect, useState, createContext } from "react";


const AuthContext = createContext();

// Auth Provider
const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!storedToken);
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(false);
  const [author, setAuthor] = useState(false);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setIsAuthenticated(!!storedToken);

    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
      setAdmin(storedUser.is_admin);
      setAuthor(storedUser.is_author);
    } else {
      setUser(null);
      setAdmin(false);
      setAuthor(false);
    }
  }, [storedToken]);

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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
// Auth Provider END

export { AuthContext, AuthProvider };
