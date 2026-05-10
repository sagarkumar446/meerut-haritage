import { useState, useEffect } from "react";
import langdingPageImages from "../assets/images";

const LandingPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const featuredStory = {
    title: "Meerut's mobility makeover: bus corridors to cycle loops",
    tag: "Urban Development",
    excerpt:
      "A look at the transport upgrades that are stitching together old markets, new townships, and student hubs.",
    readTime: "6 min read",
  };

  const highlights = [
    { label: "Population", value: "1.7M", note: "Growing urban core" },
    { label: "Education", value: "50+", note: "Colleges & institutes" },
    { label: "Industry", value: "Sports", note: "Manufacturing hub" },
    { label: "Heritage", value: "250+", note: "Recorded sites" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % langdingPageImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        {langdingPageImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Meerut cityscape ${index + 1}`}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
              currentIndex === index ? "opacity-100" : "opacity-0"
            }`}
            loading="lazy"
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-heritage/90 via-heritage/70 to-transparent" />
      </div>

      <div className="section-shell relative py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-end">
          <div className="text-heritage-cream">
            <p className="text-xs uppercase tracking-[0.4em] text-heritage-gold">
              Meerut Development Journal
            </p>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-display">
              Stories, maps, and city notes shaping a modern Meerut.
            </h1>
            <p className="mt-5 text-lg text-heritage-cream/80 max-w-2xl">
              A blog-style archive that documents heritage, new infrastructure, local voices,
              and the everyday rhythms of a fast-evolving city.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="bg-heritage-gold text-heritage px-6 py-3 rounded-full text-xs uppercase tracking-[0.3em]">
                Read Latest
              </button>
              <button className="border border-heritage-cream/70 text-heritage-cream px-6 py-3 rounded-full text-xs uppercase tracking-[0.3em] hover:bg-heritage-cream hover:text-heritage transition">
                City Atlas
              </button>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 text-heritage-cream/80">
              {highlights.map((item) => (
                <div key={item.label} className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.3em]">{item.label}</p>
                  <p className="mt-2 text-2xl font-display text-heritage-cream">
                    {item.value}
                  </p>
                  <p className="text-sm text-heritage-cream/70">{item.note}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="paper-card rounded-3xl p-6 text-heritage">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src={langdingPageImages[1]}
                alt="Meerut development corridors"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-6">
              <p className="text-xs uppercase tracking-[0.3em] text-emerald">
                {featuredStory.tag}
              </p>
              <h2 className="mt-3 text-2xl font-display">{featuredStory.title}</h2>
              <p className="mt-3 text-sm text-slate-600">{featuredStory.excerpt}</p>
              <div className="mt-5 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-500">
                <span>{featuredStory.readTime}</span>
                <button className="text-heritage-gold hover:text-heritage-brown transition">
                  Read Story
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
