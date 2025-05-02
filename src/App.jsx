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

// Imports: Contexts
import { AuthProvider, AuthContext } from "./API/AuthProvider";
import { DataProvider } from "./API/DataProvider";

// Imports: CSS
import "./styles/App.css";
import "./styles/Header.css";
import "./styles/Footer.css";
import "./styles/Home.css";
import "./styles/PostsButtons.css";
import "./styles/SignElements.css";

// Contexts

// Protected Layout
const ProtectedLayout = ({ children, requiredRoles }) => {
  const { isAuthenticated, isUser, isAdmin, isAuthor } =
    useContext(AuthContext);

  const hasRequiredRole = requiredRoles.some((role) => {
    if (role === "user" && isUser) return true;
    if (role === "admin" && isAdmin) return true;
    if (role === "author" && isAuthor) return true;
    return false; // Default case, no role matches
  });

  return isAuthenticated && hasRequiredRole ? (
    <>{children}</>
  ) : (
    <Navigate to="/" /> // Redirect to home if not authenticated or no required role
  );
};

function App() {
  return (
    <div>
      {/* PROVIDER starts here */}
      <AuthProvider>
        <DataProvider>
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
                <ProtectedLayout requiredRole={["admin"]}>
                  <ProfilesAdmin />
                </ProtectedLayout>
              }
            />

            {/* BlogPosts can be seen by anybody, NOT edited (edit only by the author) */}
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:id" element={<Posts />} />
            <ProtectedLayout requiredRole={["author"]}>
              <Route path="/posts/:id/edit" element={<Edit />} />
              <Route path="/edit" element={<Edit />} />
            </ProtectedLayout>

            {/* Books and Characters can be seen by anybody, NOT edited /edit only by the admin */}
            <Route path="/dragonlance_books" element={<Books />} />
            <Route path="/dragonlance_books/:id" element={<Books />} />

            <Route path="/dragonlance_characters" element={<Characters />} />
            <Route
              path="/dragonlance_characters/:id"
              element={<Characters />}
            />

            {/* Users can be seen by admins only, specific user data for profile needed */}
            <ProtectedLayout requiredRole={["admin"]}>
              <Route
                path="/users"
                element={
                  <ProtectedLayout>
                    <Users />
                  </ProtectedLayout>
                }
              />
              <Route path="/users/:id" element={<Users />} />
            </ProtectedLayout>

            {/* FALLBACK: Redirect to Home if no route matches */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </DataProvider>
      </AuthProvider>
    </div>
  );
}

// export {
//   AuthContext,
//   PostDataContext,
//   BookDataContext,
//   CharacterDataContext,
//   UserDataContext,
// };
export default App;
