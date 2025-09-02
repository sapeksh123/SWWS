
import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import logo from "../assets/logo.png" 
import { Phone, Mail, Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Product", path: "/product" },
    { name: "Services", path: "/services" },
    // { name: "Shop", path: "/shop" },
    { name: "Gallery", path: "/gallery" },
    // { name: "Videos", path: "/videos" },
    // { name: "Payment", path: "/payment" },
    { name: "Contact", path: "/enquiry" },
  ]

  return (
    <>
      {/* Top Bar */}
      <div className="bg-teal-600 text-white py-2 px-4 shadow-md">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <span className="flex items-center gap-1">
              <Phone className="h-4 w-4" />
              +91 7987696387
            </span>
            <span className="flex items-center gap-1">
              <Mail className="h-4 w-4" />
              seaworldwater11@gmail.com
            </span>
          </div>
          <div className="mt-1 sm:mt-0 text-center sm:text-right">
            <span>Mon-Sat: 9AM-7PM | Emergency: 24/7</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-4">
              <img
                src={logo}
                alt="Ro-Care Logo"
                className="h-12 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 rounded-lg font-medium transition-colors ${
                    location.pathname === item.path
                      ? "underline underline-offset-6 decoration-teal-600 text-gray-800 font-bold"
                      : "text-gray-700 hover:text-teal-600 hover:bg-teal-100"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            {/* <div className="hidden md:block">
              <Link to="/earn-refer">
                <button className="flex items-center gap-2 ml-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 hover:from-yellow-500 hover:to-red-600 text-white px-6 py-2 rounded-full font-bold shadow-xl hover:shadow-amber-300 transition-transform duration-300 transform hover:scale-110 border-2 border-white">
                  <Gift className="w-5 h-5" />
                  Earn & Refer
                </button>
              </Link>
            </div> */}

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-teal-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden mt-4 pb-4 border-t pt-4">
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`px-3 py-2 rounded-md transition-colors ${
                      location.pathname === item.path
                        ? "bg-teal-600 text-white font-semibold"
                        : "text-gray-700 hover:text-teal-600 hover:bg-teal-100"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}

                {/* <Link to="/earn-refer" onClick={() => setIsMenuOpen(false)}>
                  <button className="mt-4 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 hover:from-yellow-500 hover:to-red-600 text-white px-6 py-3 rounded-full font-bold text-lg shadow-xl hover:shadow-amber-300 transform transition-transform duration-300 hover:scale-110 border-2 border-white">
                    <Gift className="w-5 h-5" />
                    Earn & Refer
                  </button>
                </Link> */}
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  )
}
