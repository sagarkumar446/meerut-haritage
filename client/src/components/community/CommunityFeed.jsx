import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../../feature/PostsSlice";
import { fetchPosts } from "../../feature/fetchPostsSlice";
// import CreatePost from "./CreatePost";
import CreatePost from "./CreatePost";
import FilterBar from "./FilterBar";
import PostList from "./PostList";
import Sidebar from "./Sidebar";


export default function CommunityFeed() {
  const dispatch = useDispatch();

  // Select posts state from fetchPostsSlice, fallback to empty object if undefined
  const fetchPostsState = useSelector(state => state.fetchPosts) || {};
  // Ensure posts is always an array
  const posts = fetchPostsState.posts || [];
  const loading = fetchPostsState.loading || false;
  const error = fetchPostsState.error || null;
  const [filter, setFilter] = useState("Newest");

  // Fetch posts when the component mounts
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  // Add post (dispatch to Redux instead of local state)
  const [postText, setPostText] = useState("sample ");
  const [author, setAuthor] = useState("You");

  const addPost = () => {
    const newPostData = {
      author,
      text: postText,
      likes: 0,
      comments: 0,
      date: new Date().toISOString(),
    };
    dispatch(createPost(newPostData));
    setPostText(""); // Clear input after submit
  };

  // Handle like locally for now (or call updatePost API)
  const handleLike = (id) => {
    // This just updates locally; for backend sync, call updatePost thunk
    const updated = posts.map((post) =>
      post.id === id ? { ...post, likes: post.likes + 1 } : post
    );
    // No dispatch here since we don't have update likes API yet
    console.log("Liked post", id, updated);
  };

  // Sort posts
  const sortedPosts = posts ? [...posts].sort((a, b) => {
    if (filter === "Most Liked") return b.likes - a.likes;
    if (filter === "Most Commented") return b.comments - a.comments;
    return new Date(b.date) - new Date(a.date); // Newest first
  }) : [];

  return (
    <div className="flex gap-6 p-6 bg-gray-100 min-h-screen">
      <Sidebar
        topics={["Meerut History", "Food", "Events", "Travel Tips"]}
        stats={{ members: 1200, posts: posts.length }}
      />

      <div className="flex-1">
        <CreatePost onPostSubmit={addPost} />

        {/* Show loading/error */}
        {loading && <p className="text-gray-500">Loading posts...</p>}
        {error && (
          <p className="text-red-500">Error: {error}</p>
        )}

        <FilterBar onFilterChange={setFilter} />
        <PostList posts={sortedPosts} onLike={handleLike} />
      </div>
    </div>
  );
}
