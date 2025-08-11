import CommunityTip from "./CommunityTip";
import SectionLayout from "./SectionLayout";


const CommunityComments = () => (
  <SectionLayout icon="fa-comments" title="Traveler Tips">
    <div className="space-y-6">
      <CommunityTip
        avatar="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg"
        author="Priya Sharma"
        role="Local Guide"
        comment="Don\'t miss the local chaat at Sadar Bazaar. The gol gappa there is absolutely amazing!"
      />
      <CommunityTip
        avatar="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg"
        author="Rajesh Kumar"
        role="Frequent Visitor"
        comment='"Best time to visit the historical sites is early morning. Less crowded and great for photography."'
      />
    </div>
    <button className="mt-6 bg-warm-orange text-white px-6 py-3 rounded-full hover:bg-orange-600 transition">
      Share Your Tip
    </button>
  </SectionLayout>
);
export default CommunityComments;