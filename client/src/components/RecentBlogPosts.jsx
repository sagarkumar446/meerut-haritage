import React from 'react';

const RecentBlogPosts = ({ posts }) => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center mb-12">
      <div>
        <h2 className="text-4xl font-bold text-heritage mb-4">Recent Blog Posts</h2>
        <p className="text-gray-600 text-lg">Latest stories and discoveries from Meerut</p>
      </div>
      <button className="text-heritage hover:text-sandstone font-semibold">
        View All Posts
        <svg
          className="inline ml-2 w-4 h-4"
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 448 512"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
        </svg>
      </button>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <article key={post.id} className="bg-stone-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
          <img className="w-full h-48 object-cover" src={post.image} alt={post.alt} />
          <div className="p-6">
            <div className="flex items-center mb-3">
              <img src={post.authorImage} alt={`${post.authorName} avatar`} className="w-8 h-8 rounded-full mr-3" />
              <span className="text-sm text-gray-600">{post.authorName} • {post.date}</span>
            </div>
            <h3 className="text-xl font-semibold text-heritage mb-3">{post.title}</h3>
            <p className="text-gray-600 mb-4">{post.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-emerald font-medium">{post.readTime} min read</span>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span>{post.likes} ♥</span>
                <span>{post.comments} 💬</span>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  </div>
);

export default RecentBlogPosts;
