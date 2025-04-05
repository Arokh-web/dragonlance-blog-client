import React from "react";
import PostCard from "../components/PostCard";
import PostDetail from "../components/PostDetail";
import { useContext } from "react";
import { PostDataContext } from "../App";
import { useParams } from "react-router-dom";

const Posts = () => {
  const { posts } = useContext(PostDataContext);
  const { id } = useParams(); // Get the id from the URL parameters

  const selectedPost = posts.find((post) => post.id === parseInt(id)); // Find the selected post from the posts array

  return (
    <div>
      {selectedPost ? (
        <PostDetail post={selectedPost} />
      ) : (
        posts.map((post) => <PostCard key={post.id} post={post} />)
      )}

      {/* PostDetail component to display post details when clicked */}
      {/* at detail-page: book info, char info, edit, delete, stats??, like */}
    </div>
  );
};

export default Posts;
