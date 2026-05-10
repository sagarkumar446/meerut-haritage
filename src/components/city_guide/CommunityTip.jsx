const CommunityTip = ({ avatar, author, role, comment }) => (
  <div className="bg-gray-50 p-6 rounded-xl">
    <div className="flex items-center mb-3">
      <img src={avatar} className="w-10 h-10 rounded-full mr-3" alt={`${author} avatar`} />
      <div>
        <h4 className="font-semibold">{author}</h4>
        <span className="text-sm text-gray-500">{role}</span>
      </div>
    </div>
    <p className="text-gray-700">{comment}</p>
  </div>
);
export default CommunityTip;