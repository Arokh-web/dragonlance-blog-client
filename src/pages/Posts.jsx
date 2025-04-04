import React from "react";
import PostCard from "../components/PostCard";
import PostDetail from "../components/PostDetail";
import { useContext } from "react";
import { AuthContext } from "../App";

const Posts = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const { auth } = useContext(AuthContext);
  const [selectedPost, setSelectedPost] = useState(null); // State to hold the selected post

  const handlePostClick = (post) => {
    setSelectedPost(post); // Set the selected post when detail is clicked
  };

  const handleBackClick = () => {
    setSelectedPost(null); // Clear the selected post when back is clicked
  };

  return (
    <div>
      {selectedPost ? (
        <PostDetail post={selectedPost} onBack={handleBackClick} />
      ) : (
        <PostCard onPostClick={handlePostClick} />
      )}
      {/* PostCard component to display posts in a long col*/}

      {/* PostDetail component to display post details when clicked */}
      {/* at detail-page: book info, char info, edit, delete, stats??, like */}
    </div>
  );
};

export default Posts;
