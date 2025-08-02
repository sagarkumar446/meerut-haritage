const Card = ({ image, alt, title, description, tag }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
    <img
      className="w-full h-48 object-cover"
      src={image}
      alt={alt}
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-heritage mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex items-center justify-between">
        <span className="text-emerald text-sm font-medium">{tag}</span>
        <button className="text-heritage hover:text-sandstone">
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 448 512"
            aria-hidden="true"
          >
            <path d="M38.6 278.6c12.5-12.5 12.5-32.8 
              0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 
              0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 
              0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 
              393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 
              45.3 0l160-160z" />
          </svg>
        </button>
      </div>
    </div>
  </div>
);

export default Card;
