


const TransportCard = ({ icon, heading, text, buttonText }) => (
  <div className="bg-orange-50 p-6 rounded-xl">
    <i className={`text-warm-orange text-2xl mb-3 fa-solid ${icon}`}></i>
    <h3 className="text-xl font-semibold mb-2">{heading}</h3>
    <p className="text-gray-600 mb-4">{text}</p>
    <button className="text-warm-orange font-medium hover:underline">{buttonText}</button>
  </div>
);

export default TransportCard;