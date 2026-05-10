const Footer = () => (
  <footer className="bg-heritage text-heritage-cream py-16">
    <div className="section-shell grid grid-cols-1 md:grid-cols-4 gap-10">
      <div>
        <div className="text-2xl font-display mb-4">Meerut Heritage</div>
        <p className="text-heritage-cream/70 mb-6">
          A living archive of Meerut’s past and future—heritage sites, development updates,
          and community stories in one place.
        </p>
        <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.3em] text-heritage-gold hover:text-heritage-cream transition-colors">
          <span className="cursor-pointer hover:text-heritage-cream">Instagram</span>
          <span className="cursor-pointer hover:text-heritage-cream">Newsletter</span>
          <span className="cursor-pointer hover:text-heritage-cream">Press</span>
        </div>
      </div>

      <div>
        <h4 className="text-xs uppercase tracking-[0.3em] text-heritage-gold mb-4">
          Quick Links
        </h4>
        <ul className="space-y-2 text-heritage-cream/70">
          <li className="cursor-pointer hover:text-heritage-cream transition-colors">Historical Places</li>
          <li className="cursor-pointer hover:text-heritage-cream transition-colors">City Guide</li>
          <li className="cursor-pointer hover:text-heritage-cream transition-colors">Community</li>
          <li className="cursor-pointer hover:text-heritage-cream transition-colors">Blog Archive</li>
        </ul>
      </div>

      <div>
        <h4 className="text-xs uppercase tracking-[0.3em] text-heritage-gold mb-4">
          City Snapshot
        </h4>
        <ul className="space-y-2 text-heritage-cream/70">
          <li>State: Uttar Pradesh</li>
          <li>Population: 1.7M+</li>
          <li>Historic Sites: 250+</li>
          <li>Known For: Sports Goods</li>
        </ul>
      </div>

      <div>
        <h4 className="text-xs uppercase tracking-[0.3em] text-heritage-gold mb-4">
          Newsletter
        </h4>
        <p className="text-heritage-cream/70 mb-4">
          Monthly city notes, development updates, and heritage features.
        </p>
        <div className="flex flex-col gap-3">
          <input
            type="email"
            placeholder="Your email"
            className="rounded-full px-4 py-2 text-heritage bg-heritage-cream"
          />
          <button className="bg-heritage-gold text-heritage text-xs uppercase tracking-[0.3em] px-4 py-2 rounded-full">
            Subscribe
          </button>
        </div>
      </div>
    </div>

    <div className="section-shell mt-10 border-t border-heritage-cream/20 pt-6 text-xs uppercase tracking-[0.3em] text-heritage-cream/60">
      © 2026 Meerut Heritage. All rights reserved.
    </div>
  </footer>
);

export default Footer;
