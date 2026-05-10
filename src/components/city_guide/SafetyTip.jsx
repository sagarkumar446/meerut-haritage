const SafetyTip = ({ tip }) => (
  <div className="flex items-center space-x-3">
    <i className="text-green-500 fa-solid fa-circle-check"></i>
    <span>{tip}</span>
  </div>
);
export default SafetyTip;