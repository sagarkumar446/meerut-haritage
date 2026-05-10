
const TraditionCard = ({ icon, title, desc }) => (
  <div className="flex items-start space-x-4 p-4 bg-orange-50 rounded-xl">
    <i className={`text-warm-orange text-xl mt-1 fa-solid ${icon}`}></i>
    <div>
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  </div>
);
export default TraditionCard;