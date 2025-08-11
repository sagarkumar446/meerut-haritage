import SectionLayout from "./SectionLayout";
import VisitCard from "./VisitCard";

const BestTimeToVisit = () => (
  <SectionLayout icon="fa-calendar-days" title="Best Time to Visit">
    <div className="grid md:grid-cols-3 gap-6">
      <VisitCard
        title="Winter (Oct-Mar)"
        desc="Pleasant weather, ideal for sightseeing"
        class="bg-blue-50 border-blue-400 text-blue-700"
        tag="Recommended"
        tagColor="text-blue-600"
      />
      <VisitCard
        title="Summer (Apr-Jun)"
        desc="Hot weather, indoor activities preferred"
        class="bg-yellow-50 border-yellow-400 text-yellow-700"
        tag="Moderate"
        tagColor="text-yellow-600"
      />
      <VisitCard
        title="Monsoon (Jul-Sep)"
        desc="Rainy season, lush greenery"
        class="bg-green-50 border-green-400 text-green-700"
        tag="Fair"
        tagColor="text-green-600"
      />
    </div>
  </SectionLayout>
);
export default BestTimeToVisit;