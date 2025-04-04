import React from "react";

const PostDetail = ({ post }) => {
  // const { id } = useParams();
  // const isCreateMode = id === "new";
  // const [post, setPost] = useState({});
  // const [isEditMode, setIsEditMode] = useState(false);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (isCreateMode) {
  //     setIsEditMode(true);
  //     setPost({

  //     });
  //     return;
  //   }

  // fetch(`http://localhost:5000/posts/${id}`)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     setEvent(data);
  //   });
  // }, [id, isCreateMode]);

  if (!post) return null;

  return (
    <div className="post-detail-container">
      <img
        src={`/${post.cover}`}
        alt={post.title}
        className="post-detail-image"
      />

      <div className="post-detail-content">
        <h1 className="post-detail-title">{post.title}</h1>
        <p className="post-detail-meta">
          by Author #{post.author_id} ·{post.date}
        </p>

        <p className="post-detail-body">{post.content}</p>

        {post.ref_book_id && (
          <div className="mt-6">
            <span className="font-semibold text-sm text-gray-700">
              Book Reference: #{post.ref_book_id}
            </span>
          </div>
        )}

        {post.ref_character_id && (
          <div>
            <span className="font-semibold text-sm text-gray-700">
              Character Reference: #{post.ref_character_id}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostDetail;
