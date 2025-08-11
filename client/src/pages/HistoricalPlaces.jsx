import React from "react";
import FilterBar from "../components/community/FilterBar";
import PlaceCard from "../components/historical_places/PlaceCard";
import MostVisited from "../components/historical_places/MostVisited";
import QuickLinks from "../components/historical_places/QuickLinks";


const placesData = [
  {
    id: 1,
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/a07974f035-60f9dd1dafd7da1f4546.png",
    title: "Augarnath Temple",
    location: "Augarnath, Meerut",
    description: "Ancient temple dedicated to Lord Shiva, known for its architectural beauty and spiritual significance.",
  },
  {
    id: 2,
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/98599820ac-a51c4010b0f796c8ef78.png",
    title: "St. John's Church",
    location: "Cantonment, Meerut",
    description: "Historic colonial church built in 1819, showcasing beautiful Gothic architecture.",
  },
  {
    id: 3,
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/cf24582ad1-efea5d7fcf638da18b55.png",
    title: "Shahpeer Saheb Tomb",
    location: "Civil Lines, Meerut",
    description: "Magnificent Mughal-era tomb with intricate architectural details.",
  },
  {
    id: 4,
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/94452f03f5-f5c38bd972125c608fc2.png",
    title: "Jama Masjid",
    location: "Sadar Bazaar, Meerut",
    description: "Historic mosque with stunning Mughal architecture and beautiful minarets.",
  },
  {
    id: 5,
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/4de40c6cf2-e5099192fc7e86ce3fab.png",
    title: "Gandhi Bagh",
    location: "Hapur Road, Meerut",
    description: "Historic park with colonial-era architecture and beautiful gardens.",
  },
  {
    id: 6,
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/5724354be3-01f4abdd8429f2020834.png",
    title: "Suraj Kund",
    location: "Hastinapur Road, Meerut",
    description: "Ancient water tank with mythological significance and beautiful stone architecture.",
  }
];

const HistoricalPlaces = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Left Content */}
        <div className="flex-1">
          <FilterBar />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {placesData.map(place => (
              <PlaceCard key={place.id} {...place} />
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <button className="bg-heritage-brown text-white px-8 py-3 rounded-lg hover:bg-heritage-gold transition-colors">
              Load More Places
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:w-80">
          <MostVisited />
          <QuickLinks />
        </aside>
      </div>
    </main>
  );
};

export default HistoricalPlaces;
