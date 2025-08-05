import Card from "./Card";

const highlights = [
  {
    id: 1,
    title: "Augarnath Temple",
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/b249f1b7a0-68742b48c6df83faa493.png",
    alt: "Augarnath Temple Meerut ancient Hindu temple architecture",
    description:
      "Ancient temple dedicated to Lord Shiva, showcasing magnificent architecture",
    tag: "Historical Site",
  },
  {
    id: 2,
    title: "Shahpeer Sahib",
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/3b00449f57-2b53b38fc8afd689db03.png",
    alt: "Shahpeer Sahib Meerut Sufi shrine Islamic architecture",
    description:
      "Sacred Sufi shrine attracting devotees from across the region",
    tag: "Religious Site",
  },
  {
    id: 3,
    title: "Gandhi Bagh",
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/8516ec72b2-115f0a40af7d79e8bd75.png",
    alt: "Gandhi Bagh Meerut park with historical monuments and gardens",
    description:
      "Historic park with beautiful gardens and freedom struggle monuments",
    tag: "Park & Memorial",
  },
];

const CityHighlights = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-heritage mb-4">City Highlights</h2>
      <p className="text-gray-600 text-lg">Discover the most iconic places in Meerut</p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {highlights.map((highlight) => (
              <Card
                key={highlight.id } 
                image={highlight.image}
                alt={highlight.alt}
                title={highlight.title}
                description={highlight.description}
                tag={highlight.tag}
              />
            ))}
    </div>
  </div>
);

export default CityHighlights;
