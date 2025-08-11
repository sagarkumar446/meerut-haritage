
const FoodCard = ({ img, title, desc, alt }) => (
  <div className="text-center">
    <img className="w-full h-32 object-cover rounded-xl mb-4" src={img} alt={alt} />
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{desc}</p>
  </div>
);
export default FoodCard;