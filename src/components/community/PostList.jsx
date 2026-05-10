import React from "react";
import Post from "./Post";

export default function PostList({ posts, onLike }) {
  return (
    <div className="space-y-4">
      {posts.map(post => (
        <Post key={post.id} post={post} onLike={onLike} />
      ))}
    </div>
  );
}
