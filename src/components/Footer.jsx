import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import logo from "../assets/logo.png"

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Section */}
      <div className="py-8 px-4"> 
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10">
    
          <div>
            <Link to="/" className="flex items-center space-x-3 mb-4">


              <img
                src={logo}
                alt="Ro-Care Logo"
                className="w-full h-12 object-contain"
              />
            </Link>


            <p className="text-gray-400 mb-4 text-sm">
              India's most trusted water purification service provider, ensuring safe, clean, and pure drinking water for every family.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-3">
              <a href="#" className="bg-gray-800 hover:bg-blue-600 p-2 rounded-full transition-colors" title="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-sky-500 p-2 rounded-full transition-colors" title="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-pink-500 p-2 rounded-full transition-colors" title="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-red-600 p-2 rounded-full transition-colors" title="YouTube">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Shop Online", path: "/shop" },
                { name: "Gallery", path: "/gallery" },
                { name: "Videos", path: "/videos" },
              ].map((link, i) => (
                <li key={i}>
                  <Link to={link.path} className="text-gray-400 hover:text-blue-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              {[
                "RO Installation",
                "Maintenance & Repair",
                "Water Quality Testing",
                "Filter Replacement",
                "Commercial RO Plants",
                "AMC Services",
              ].map((service, i) => (
                <li key={i}>
                  <Link to="/services" className="text-gray-400 hover:text-blue-400 transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <span className="text-blue-400 mt-1">📞</span>
                <div>
                  <p className="text-white font-medium">Phone</p>
                  <a href="tel:+919876543210" className="text-gray-400 hover:text-blue-400">
                    +91 98765 43210
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-blue-400 mt-1">✉️</span>
                <div>
                  <p className="text-white font-medium">Email</p>
                  <a href="mailto:seaworldwater11@gmail.com
" className="text-gray-400 hover:text-blue-400">
                    info@rocareindia.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-blue-400 mt-1">📍</span>
                <div>
                  <p className="text-white font-medium">Address</p>
                  <p className="text-gray-400">New Delhi - 110001, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="border-t border-gray-800 py-4 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-xs text-center md:text-left mb-2 md:mb-0">
            &copy; {new Date().getFullYear()} Sea World Water Solution. All rights reserved.
          </p>

          <div className="flex items-center space-x-3 text-xs">
            <p className="text-gray-400">Made with ❤️ for Pure Water</p>
            <button
              onClick={scrollToTop}
              className="bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded transition-colors"
              title="Back to Top"
            >
              ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
