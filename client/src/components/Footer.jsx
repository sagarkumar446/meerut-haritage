const Footer = () => (
  <footer className="bg-heritage text-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <div className="text-2xl font-bold mb-4">Meerut Heritage</div>
          <p className="text-stone-300 mb-4">
            Discover the rich history and cultural heritage of Meerut through our guide.
          </p>
          <div className="flex space-x-4">
            {/* Social Icons */}
            <span className="text-stone-300 hover:text-white cursor-pointer">Facebook</span>
            <span className="text-stone-300 hover:text-white cursor-pointer">Twitter</span>
            <span className="text-stone-300 hover:text-white cursor-pointer">Instagram</span>
            <span className="text-stone-300 hover:text-white cursor-pointer">YouTube</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li className="text-stone-300 hover:text-white cursor-pointer">Historical Places</li>
            <li className="text-stone-300 hover:text-white cursor-pointer">City Guide</li>
            <li className="text-stone-300 hover:text-white cursor-pointer">Community</li>
            <li className="text-stone-300 hover:text-white cursor-pointer">Blog</li>
          </ul>
        </div>

        {/* City Facts */}
        <div>
          <h4 className="text-lg font-semibold mb-4">City Facts</h4>
          <ul className="space-y-2 text-stone-300">
            <li>Founded: Ancient times</li>
            <li>Population: 1.7 million</li>
            <li>State: Uttar Pradesh</li>
            <li>Historic Sites: 50+</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
          <p className="text-stone-300 mb-4">Stay updated with latest stories and heritage news</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-2 rounded-l-full text-gray-900"
            />
            <button className="bg-sandstone px-6 py-2 rounded-r-full hover:bg-opacity-90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="border-t border-stone-600 mt-8 pt-8 text-center text-stone-300">
        © 2024 Meerut Heritage. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
