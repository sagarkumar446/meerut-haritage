import BestTimeToVisit from "./BestTimeToVisit";
import CommunityComments from "./CommunityComments";
import FAQs from "./FAQs";
import FoodCuisine from "./FoodCuisine";
import LocalTraditions from "./LocalTraditions";
import LocalTransport from "./LocalTransport";
import SafetyTips from "./SafetyTips";
import Sidebar from "./Sidebar";

const MeerutGuidePage = () => (
  <div className="container mx-auto px-4 py-12">
    <div className="grid lg:grid-cols-4 gap-8">
      {/* Main Content */}
      <div className="lg:col-span-3 space-y-12">
        <LocalTransport />
        <FoodCuisine />
        <BestTimeToVisit />
        <LocalTraditions />
        <SafetyTips />
        <FAQs />
        <CommunityComments />
      </div>
      {/* Sidebar */}
      <div className="lg:col-span-1">
        <Sidebar />
      </div>
    </div>
  </div>
);

export default MeerutGuidePage;