import React, { useState } from "react";
import Sidebar from "./Sidebar";
import CreatePost from "./CreatePost";
import PostList from "./PostList";
import FilterBar from "./FilterBar";

export default function CommunityFeed() {
  const [posts, setPosts] = useState([
    { id: 1, author: "Amit", text: "Hello Meerut! 🌆", likes: 3, comments: 1, date: new Date() },
    { id: 2, author: "Priya", text: "Any good café suggestions? ☕", likes: 5, comments: 2, date: new Date() },
  ]);
  const [filter, setFilter] = useState("Newest");

  const addPost = (text) => {
    const newPost = {
      id: Date.now(),
      author: "You",
      text,
      likes: 0,
      comments: 0,
      date: new Date(),
    };
    setPosts([newPost, ...posts]);
  };

  const handleLike = (id) => {
    setPosts(posts.map(post =>
      post.id === id ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  const sortedPosts = [...posts].sort((a, b) => {
    if (filter === "Most Liked") return b.likes - a.likes;
    if (filter === "Most Commented") return b.comments - a.comments;
    return b.date - a.date; // Newest first
  });

  return (
    <div className="flex gap-6 p-6 bg-gray-100 min-h-screen">
      <Sidebar
        topics={["Meerut History", "Food", "Events", "Travel Tips"]}
        stats={{ members: 1200, posts: posts.length }}
      />

      <div className="flex-1">
        <CreatePost onPostSubmit={addPost} />
        <FilterBar onFilterChange={setFilter} />
        <PostList posts={sortedPosts} onLike={handleLike} />
      </div>
    </div>
  );
}
