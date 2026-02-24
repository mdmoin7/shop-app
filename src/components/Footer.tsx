import { Link } from "react-router";

function Footer() {
  return (
    <footer className="mt-20 bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">MyStore</h3>
          <p className="text-sm text-gray-400">
            High quality products delivered with care.
          </p>
        </div>

        {/* Navigation */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-white uppercase tracking-wide">
            Company
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="hover:text-white transition-colors"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/checkout"
                className="hover:text-white transition-colors"
              >
                Checkout
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-white uppercase tracking-wide">
            Support
          </h4>
          <ul className="space-y-2 text-sm">
            <li>Help Center</li>
            <li>Shipping</li>
            <li>Returns</li>
          </ul>
        </div>

        {/* Social */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-white uppercase tracking-wide">
            Follow Us
          </h4>
          <div className="flex gap-4 text-sm">
            <span className="hover:text-white cursor-pointer">Twitter</span>
            <span className="hover:text-white cursor-pointer">Instagram</span>
            <span className="hover:text-white cursor-pointer">Facebook</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} MyStore. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
