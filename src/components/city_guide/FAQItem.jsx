

const FAQItem = ({ question }) => (
  <div className="border border-gray-200 rounded-xl">
    <button className="w-full text-left p-4 font-semibold hover:bg-gray-50 flex justify-between items-center">
      {question}
      <i className="fa-solid fa-chevron-down"></i>
    </button>
  </div>
);
export default FAQItem;