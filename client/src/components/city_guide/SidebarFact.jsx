const SidebarFact = ({ icon, title, value }) => (
  <div className="flex items-center space-x-3">
    <i className={`text-warm-orange fa-solid ${icon}`}></i>
    <div>
      <p className="text-sm text-gray-500">{title}</p>
      <p className="font-semibold">{value}</p>
    </div>
  </div>
);
export default SidebarFact;