import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-12 pb-6 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-xl font-bold mb-4 text-white">UrbanWear</h4>
          <p className="text-sm leading-relaxed">
            UrbanWear blends street style with everyday comfort. Designed for
            confidence, built for the modern man.
          </p>
        </div>

        <div>
          <h5 className="text-lg font-semibold mb-3 text-white">Quick Links</h5>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/products" className="hover:text-primary transition">
                Shop All
              </a>
            </li>

            <li>
              <a href="/about" className="hover:text-primary transition">
                About Us
              </a>
            </li>
            <li>
              <a href="" className="hover:text-primary transition">
                FAQ
              </a>
            </li>
            <li>
              <a href="" className="hover:text-primary transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="text-lg font-semibold mb-3 text-white">Categories</h5>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/shirts" className="hover:text-primary transition">
                Shirts
              </a>
            </li>
            <li>
              <a href="/jeans" className="hover:text-primary transition">
                Jeans
              </a>
            </li>
            <li>
              <a href="/shoes" className="hover:text-primary transition">
                Shoes
              </a>
            </li>
            <li>
              <a href="/sunglass" className="hover:text-primary transition">
                Sunglasses
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="text-lg font-semibold mb-3 text-white">Follow Us</h5>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:text-primary transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-primary transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-primary transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-primary transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} UrbanWear. All rights reserved.</p>
        <p>Crafted with ❤️ for fashion-forward individuals.</p>
      </div>
    </footer>
  );
}

export default Footer;
