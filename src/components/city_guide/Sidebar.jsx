import SidebarFact from "./SidebarFact";
import SidebarFestival from "./SidebarFestival";

const Sidebar = () => (
  <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
    <h3 className="text-xl font-bold text-gray-800 mb-6">Quick Facts</h3>
    <div className="space-y-4">
      <SidebarFact icon="fa-users" title="Population" value="1.7 Million" />
      <SidebarFact icon="fa-location-dot" title="State" value="Uttar Pradesh" />
      <SidebarFact icon="fa-language" title="Languages" value="Hindi, English" />
      <SidebarFact icon="fa-star" title="Famous For" value="Sports Goods" />
    </div>
    <hr className="my-6" />
    <h4 className="font-semibold mb-4">Major Festivals</h4>
    <div className="space-y-3">
      <SidebarFestival name="Nauchandi Mela" time="March-April" />
      <SidebarFestival name="Diwali" time="October-November" />
    </div>
  </div>
);
export default Sidebar;