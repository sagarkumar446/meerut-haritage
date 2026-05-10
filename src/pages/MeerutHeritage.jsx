import LandingPage from "../components/LangingPage";
import CityHighlights from "../components/CityHighlights";
import RecentBlogPosts from "../components/RecentBlogPosts";

const MeerutHeritage = () => {
  const blogPosts = [
    {
      id: 1,
      category: "Heritage",
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/9042778701-4c614b370688032eb40f.png",
      alt: "Meerut Cantonment British colonial architecture heritage buildings",
      authorImage:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg",
      authorName: "Sarah Mitchell",
      date: "City log",
      title: "The colonial legacy of Meerut Cantonment",
      description:
        "Tracing the streets, clubs, and cantonment buildings that shaped the city’s administrative core.",
      readTime: 5,
      likes: 24,
      comments: 8,
    },
    {
      id: 2,
      category: "Civic",
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/d6353970d0-4ba53fbb210eac80b35b.png",
      alt: "Meerut 1857 revolt memorial historical significance India freedom struggle",
      authorImage:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg",
      authorName: "Raj Patel",
      date: "Field report",
      title: "1857: where the movement began",
      description:
        "How Meerut’s historic revolt routes are being preserved through new plaques and walkable trails.",
      readTime: 7,
      likes: 42,
      comments: 15,
    },
    {
      id: 3,
      category: "Culture",
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/f003176285-067c167906a5765207db.png",
      alt: "Meerut local food culture traditional sweets and cuisine",
      authorImage:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-7.jpg",
      authorName: "Priya Sharma",
      date: "Weekend guide",
      title: "A culinary journey through Meerut",
      description:
        "From gajak lanes to bustling bazaars, a guide to flavours defining the city today.",
      readTime: 6,
      likes: 38,
      comments: 12,
    },
  ];

  const developmentUpdates = [
    {
      title: "Transit spine",
      value: "15 km",
      detail: "New bus corridor linking the university belt and old city markets.",
    },
    {
      title: "Green public spaces",
      value: "9 parks",
      detail: "Revival of lakeside parks with safer walking tracks and lighting.",
    },
    {
      title: "Smart streets",
      value: "28 wards",
      detail: "Upgraded waste and drainage systems rolling out across key wards.",
    },
    {
      title: "Artisan economy",
      value: "2,300+",
      detail: "Sports goods units moving toward export-ready certification.",
    },
  ];

  const guidePicks = [
    {
      title: "Old City Walk",
      description: "A half-day walking route through bazaars, mosques, and libraries.",
    },
    {
      title: "Cantonment Circuit",
      description: "Colonial boulevards, churches, and memorials stitched into one trail.",
    },
    {
      title: "Food & Craft",
      description: "Meet the craftspeople and kitchens shaping Meerut’s identity.",
    },
  ];

  return (
    <>
      <LandingPage />

      <section className="section-shell py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="paper-card rounded-3xl p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald">
              City In Motion
            </p>
            <h2 className="mt-4 text-3xl font-display text-heritage">
              Development updates shaping daily life in Meerut.
            </h2>
            <p className="mt-3 text-slate-600">
              Short, verified notes on infrastructure, education, and public spaces—captured for residents,
              planners, and visitors.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {developmentUpdates.map((item) => (
                <div key={item.title} className="rounded-2xl border border-heritage-tan/60 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{item.title}</p>
                  <p className="mt-2 text-2xl font-display text-heritage">{item.value}</p>
                  <p className="mt-2 text-sm text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="paper-card rounded-3xl p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald">
              Development Desk
            </p>
            <h3 className="mt-4 text-2xl font-display text-heritage">
              What residents are asking about this month
            </h3>
            <div className="mt-6 space-y-6">
              {[
                "When will the new mobility loop open for pilots?",
                "Which heritage markets are being pedestrianised next?",
                "How are public libraries being digitised across wards?",
              ].map((question, index) => (
                <div key={question} className="flex gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-heritage text-heritage-cream font-display">
                    0{index + 1}
                  </span>
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-heritage-gold">
                      Citizen note
                    </p>
                    <p className="text-slate-600">{question}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-8 text-xs uppercase tracking-[0.3em] text-heritage-gold hover:text-heritage-brown">
              Submit a question →
            </button>
          </div>
        </div>
      </section>

      <CityHighlights />

      <RecentBlogPosts posts={blogPosts} />

      <section className="section-shell pb-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-center">
          <div className="paper-card rounded-3xl p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald">City Guide</p>
            <h2 className="mt-4 text-3xl font-display text-heritage">
              Curated routes for first-time visitors and locals.
            </h2>
            <p className="mt-3 text-slate-600">
              Designed for slow travel and quick resets—each guide blends history, food,
              public spaces, and emerging districts.
            </p>
            <button className="mt-6 bg-heritage text-heritage-cream px-5 py-3 rounded-full text-xs uppercase tracking-[0.3em]">
              Explore Guides
            </button>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {guidePicks.map((guide) => (
              <div key={guide.title} className="paper-card rounded-2xl p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-heritage-gold">
                  Guide Pick
                </p>
                <h3 className="mt-3 text-xl font-display text-heritage">{guide.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{guide.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MeerutHeritage;
