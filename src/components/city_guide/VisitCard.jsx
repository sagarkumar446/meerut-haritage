


// Updated VisitCard to support BestTimeToVisit props
const VisitCard = ({ title, desc, className, tag, tagColor }) => (
  <div className={`p-6 rounded-xl border-l-4 ${className}`}>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{desc}</p>
    <span className={`text-sm font-medium ${tagColor}`}>{tag}</span>
  </div>
);
export default VisitCard;