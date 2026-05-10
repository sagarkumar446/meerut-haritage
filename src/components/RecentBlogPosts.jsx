import React from "react";

const RecentBlogPosts = ({ posts }) => (
  <section className="section-shell py-16">
    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-10">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-emerald">
          Field Notes
        </p>
        <h2 className="text-4xl font-display text-heritage">Recent Blog Posts</h2>
        <p className="text-slate-600 text-lg max-w-xl">
          Reports, photo essays, and development updates captured across the city.
        </p>
      </div>
      <button className="text-xs uppercase tracking-[0.3em] text-heritage-gold hover:text-heritage-brown">
        View All Posts →
      </button>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <article
          key={post.id}
          className="paper-card rounded-2xl overflow-hidden transition hover:-translate-y-1 hover:shadow-lift"
        >
          <div className="relative">
            <img className="w-full h-48 object-cover" src={post.image} alt={post.alt} />
            <span className="absolute left-4 top-4 rounded-full bg-heritage text-heritage-cream px-3 py-1 text-[10px] uppercase tracking-[0.3em]">
              {post.category}
            </span>
          </div>
          <div className="p-6">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-slate-500">
              <img
                src={post.authorImage}
                alt={`${post.authorName} avatar`}
                className="w-8 h-8 rounded-full object-cover"
              />
              <span>{post.authorName}</span>
              <span>•</span>
              <span>{post.date}</span>
            </div>
            <h3 className="mt-4 text-2xl font-display text-heritage">{post.title}</h3>
            <p className="mt-3 text-slate-600">{post.description}</p>
            <div className="mt-6 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-500">
              <span>{post.readTime} min read</span>
              <div className="flex items-center gap-4">
                <span>{post.likes} likes</span>
                <span>{post.comments} comments</span>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default RecentBlogPosts;
