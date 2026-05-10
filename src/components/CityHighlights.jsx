import Card from "./Card";

const highlights = [
  {
    id: 1,
    title: "Augarnath Temple",
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/b249f1b7a0-68742b48c6df83faa493.png",
    alt: "Augarnath Temple Meerut ancient Hindu temple architecture",
    description:
      "An ancient Shiva temple with striking arches and the energy of old Meerut.",
    tag: "Heritage",
  },
  {
    id: 2,
    title: "Shahpeer Sahib",
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/3b00449f57-2b53b38fc8afd689db03.png",
    alt: "Shahpeer Sahib Meerut Sufi shrine Islamic architecture",
    description:
      "A Sufi shrine that anchors the city’s layered spiritual history.",
    tag: "Culture",
  },
  {
    id: 3,
    title: "Gandhi Bagh",
    image:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/8516ec72b2-115f0a40af7d79e8bd75.png",
    alt: "Gandhi Bagh Meerut park with historical monuments and gardens",
    description:
      "Public gardens and freedom monuments at the heart of Meerut’s civic life.",
    tag: "Public Life",
  },
];

const CityHighlights = () => (
  <section className="section-shell py-16">
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-10">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-emerald">
          Heritage Trail
        </p>
        <h2 className="text-4xl font-display text-heritage">City Highlights</h2>
      </div>
      <p className="text-slate-600 max-w-xl">
        Iconic sites that connect Meerut’s past with its present—mosques, temples,
        gardens, and civic spaces that shape the city’s identity.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {highlights.map((highlight) => (
        <Card
          key={highlight.id}
          image={highlight.image}
          alt={highlight.alt}
          title={highlight.title}
          description={highlight.description}
          tag={highlight.tag}
        />
      ))}
    </div>
  </section>
);

export default CityHighlights;
