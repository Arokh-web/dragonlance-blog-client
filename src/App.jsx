// Imports: Pages
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Books from "./pages/Books";
import Characters from "./pages/Characters";
import SignPage from "./pages/SignPage";
import Profile from "./pages/Profile";
import ProfilesAdmin from "./pages/ProfilesAdmin";
import Users from "./pages/Users";
import NotFound from "./pages/NotFound";
import Edit from "./pages/Edit";

// Imports: Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Imports: Modules
import { Routes, Route, Navigate } from "react-router-dom";
import { createContext, useContext, useEffect, useState } from "react";

// Imports: CSS
import "./styles/App.css";
import "./styles/Header.css";
import "./styles/Footer.css";
import "./styles/Home.css";
import "./styles/PostsButtons.css";
import "./styles/SignElements.css";

// Contexts
const AuthContext = createContext();
const PostDataContext = createContext();
const BookDataContext = createContext();
const CharacterDataContext = createContext();
const UserDataContext = createContext();

// Auth Provider
const AuthProvider = ({ children }) => {
  const storedToken = localStorage.getItem("token");
  const [isAuthenticated, setIsAuthenticated] = useState(!!storedToken);
  const [user, setUser] = useState([]);
  const [admin, setAdmin] = useState(user.is_admin || false);
  const [author, setAuthor] = useState(user.is_author || false);

  useEffect(() => {
    setIsAuthenticated(!!storedToken);
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

// Protected Layout
const ProtectedLayout = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? children : <Navigate to="/signpage" />;
};

function App() {
  const [posts, setPosts] = useState([]);
  const [books, setBooks] = useState([]);
  const [characters, setCharacters] = useState([]);

  // FETCHING DATA FROM API
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/posts`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(setPosts);
    fetch(`${import.meta.env.VITE_API_URL}/dragonlance_books`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(setBooks);
    fetch(`${import.meta.env.VITE_API_URL}/dragonlance_characters`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(setCharacters);
  }, []);

  return (
    <div>
      {/* PROVIDER starts here */}
      <AuthProvider>
        <PostDataContext.Provider value={{ posts }}>
          <BookDataContext.Provider value={{ books }}>
            <CharacterDataContext.Provider value={{ characters }}>
              {/* PROVIDER END */}
              <Header />
              <Routes>
                {/* HOME */}
                <Route path="/" element={<Home />} />
                <Route path="/signpage" element={<SignPage />} />

                {/* User Profile Page */}
                <Route path="/profile" element={<Profile />} />
                <Route path="/profile/:id" element={<Profile />} />

                <Route
                  path="/profiles"
                  element={
                    <ProtectedLayout>
                      <ProfilesAdmin />
                    </ProtectedLayout>
                  }
                />

                {/* BlogPosts can be seen by anybody, NOT edited (edit only by the author) */}
                <Route path="/posts" element={<Posts />} />
                <Route path="/posts/:id" element={<Posts />} />
                <Route path="/posts/:id/edit" element={<Edit />} />
                <Route path="/edit" element={<Edit />} />

                {/* Books and Characters can be seen by anybody, NOT edited /edit only by the admin */}
                <Route path="/dragonlance_books" element={<Books />} />
                <Route path="/dragonlance_books/:id" element={<Books />} />
                <Route
                  path="/dragonlance_characters"
                  element={<Characters />}
                />
                <Route
                  path="/dragonlance_characters/:id"
                  element={<Characters />}
                />

                {/* Users can be seen by admins only, specific user data for profile needed */}
                <Route
                  path="/users"
                  element={
                    <ProtectedLayout>
                      <Users />
                    </ProtectedLayout>
                  }
                />
                <Route path="/users/:id" element={<Users />} />

                {/* FALLBACK: Redirect to Home if no route matches */}
                <Route path="*" element={<NotFound />} />
              </Routes>
              <Footer />
            </CharacterDataContext.Provider>
          </BookDataContext.Provider>
        </PostDataContext.Provider>
      </AuthProvider>
    </div>
  );
}

export {
  AuthContext,
  PostDataContext,
  BookDataContext,
  CharacterDataContext,
  UserDataContext,
};
export default App;
