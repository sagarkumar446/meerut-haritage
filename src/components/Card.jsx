const Card = ({ image, alt, title, description, tag }) => (
  <article className="paper-card rounded-2xl overflow-hidden transition hover:-translate-y-1 hover:shadow-lift">
    <div className="relative overflow-hidden">
      <img
        className="h-52 w-full object-cover transition duration-500 hover:scale-105"
        src={image}
        alt={alt}
        loading="lazy"
      />
      <span className="absolute left-4 top-4 rounded-full bg-heritage text-heritage-cream px-3 py-1 text-[10px] uppercase tracking-[0.3em]">
        {tag}
      </span>
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-display text-heritage mb-3">{title}</h3>
      <p className="text-slate-600 mb-5">{description}</p>
      <button className="text-xs uppercase tracking-[0.3em] text-heritage-gold hover:text-heritage-brown">
        Read story →
      </button>
    </div>
  </article>
);

export default Card;
