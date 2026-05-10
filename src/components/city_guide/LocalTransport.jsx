import SectionLayout from "./SectionLayout";
import TransportCard from "./TransportCard";

const LocalTransport = () => (
  <SectionLayout icon="fa-bus" title="Local Transport">
    <div className="grid md:grid-cols-2 gap-6">
      <TransportCard
        icon="fa-train"
        heading="Railways"
        text="Well-connected to Delhi, Mumbai, and major cities. Meerut City Junction is the main station."
        buttonText="View Train Schedule"
      />
      <TransportCard
        icon="fa-car"
        heading="Auto & Taxi"
        text="Auto-rickshaws and app-based cabs are readily available throughout the city."
        buttonText="Download Map"
      />
    </div>
  </SectionLayout>
);

export default LocalTransport;