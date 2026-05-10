


const SectionLayout = ({ icon, title, children }) => (
  <section className="bg-white rounded-2xl shadow-lg p-8 mb-12 last:mb-0">
    <div className="flex items-center mb-6">
      <i className={`text-warm-orange text-3xl mr-4 fa-solid ${icon}`}></i>
      <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
    </div>
    {children}
  </section>
);

export default SectionLayout;