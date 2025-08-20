import SectionLayout from "./SectionLayout";
import TraditionCard from "./TraditionCard";

const LocalTraditions = () => (
  <SectionLayout icon="fa-masks-theater" title="Local Traditions">
    <div className="space-y-4">
      <TraditionCard
        icon="fa-music"
        title="Classical Music Heritage"
        desc="Rich tradition of Hindustani classical music and local folk performances"
      />
      <TraditionCard
        icon="fa-hands-praying"
        title="Religious Festivals"
        desc="Vibrant celebrations of Diwali, Holi, and local religious festivals"
      />
      <TraditionCard
        icon="fa-hammer"
        title="Handicrafts"
        desc="Traditional craftsmanship in metalwork and textiles"
      />
    </div>
  </SectionLayout>
);
export default LocalTraditions;