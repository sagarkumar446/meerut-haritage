import React from "react";

export default function Post({ post, onLike }) {
  // Get image preview URL if attachment is a File
  const getImageUrl = (attachment) => {
    if (!attachment) return null;
    if (typeof attachment === "string") return attachment; // URL from server
    if (attachment.type && attachment.type.startsWith("image/")) {
      return URL.createObjectURL(attachment);
    }
    return null;
  };

  const imageUrl = getImageUrl(post.attachment);

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      {/* Post Header */}
      <div className="flex justify-between items-center">
        <h3 className="font-semibold">{post.author}</h3>
        <span className="text-sm text-gray-500">
          {post.date instanceof Date ? post.date.toLocaleString() : post.date}
        </span>
      </div>

      {/* Post Text */}
      {post.text && <p className="mt-2">{post.text}</p>}

      {/* Post Image */}
      {imageUrl && (
        <div className="mt-3">
          <img
            src={imageUrl}
            alt="Post attachment"
            className="rounded-lg max-h-60 object-cover"
          />
        </div>
      )}

      {/* Post Actions */}
      <div className="flex gap-4 mt-3 text-gray-600">
        <button onClick={() => onLike(post.id)}>👍 {post.likes}</button>
        <button>💬 {post.comments}</button>
        <button>🔗 Share</button>
      </div>
    </div>
  );
}
