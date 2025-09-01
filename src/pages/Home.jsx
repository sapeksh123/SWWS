
import { Link } from "react-router-dom"
// import banner from "../assets/banner.jpg"
import { Phone, Star} from "lucide-react"
import { motion } from "framer-motion";
import { FaShieldAlt, FaBolt, FaUserCog, FaHeadset, FaPills, FaMoneyBillWave } from "react-icons/fa";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";



export default function Home() {
  const carouselData = [
    {
      img: "https://img.freepik.com/free-photo/water-splash-background_23-2151944936.jpg?semt=ais_hybrid&w=740&q=80",
      tag: "Industrial RO Systems",
      heading: "Engineered Water,",
      highlight: "Engineered Excellence",
      quote: "Advanced RO technology ensuring uninterrupted industrial operations.",
    },
    {
      img: "https://cdn11.bigcommerce.com/s-1x0ys7yqwf/images/stencil/2560w/products/126/8299/industrial-ultrafiltration-systems__89796.1586474372.jpg?c=1",
      tag: "Process Water Solutions",
      heading: "Pure Input,",
      highlight: "High Output",
      quote: "Purified water maximises plant efficiency and boosts productivity.",
    },
    {
      img: "http://fctwater.com/wp-content/uploads/2021/07/AdobeStock_175039906-1024x683.jpeg",
      tag: "Sustainable Operations",
      heading: "Efficient RO,",
      highlight: "Efficient Industry",
      quote: "Industrial RO systems designed for sustainable and cost-effective growth.",
    },
    {
      img: "https://images.pexels.com/photos/40784/drops-of-water-water-nature-liquid-40784.jpeg?cs=srgb&dl=pexels-pixabay-40784.jpg&fm=jpg",
      tag: "Industrial Purification Technology",
      heading: "Reliable Water,",
      highlight: "Reliable Industry",
      quote: "Consistent water quality for machines, processes, and performance.",
    },
  ];


  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % carouselData.length),
      4000 // auto-change every 4s
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-cyan-50 py-8 px-4">
        <section className="relative w-full h-full p-8 overflow-hidden">
          {/* Background Carousel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              <img
                src={carouselData[index].img}
                alt="Industrial RO"
                className="w-full h-full object-cover"
              />
              {/* Dark Fade Overlay */}
              <div className="absolute inset-0 bg-gray-500 opacity-60" />
            </motion.div>
          </AnimatePresence>


          {/* Overlay Content */}
          <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-center px-6 md:px-12 text-white">

            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 bg-white/30 backdrop-blur-md px-5 py-2.5 rounded-full text-sm font-semibold mb-6 w-fit shadow-lg">
              <Star className="h-5 w-5 text-yellow-400 drop-shadow-glow" />
              <span className="tracking-wide">{carouselData[index].tag}</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-2xl">
              {carouselData[index].heading}
              <span className="text-emerald-200 block drop-shadow-[0_0_20px_rgba(16,185,129,0.8)]">
                {carouselData[index].highlight}
              </span>
            </h1>

            {/* Quote */}
            <p className="text-lg md:text-xl text-white font-bold mb-10 max-w-2xl leading-relaxed drop-shadow-xl">
              {carouselData[index].quote}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="tel:+917987696387">
                <button className="w-full sm:w-auto cursor-pointer bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg rounded-lg font-semibold transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.8)] hover:scale-105">
                  <Phone className="h-5 w-5 " />
                  Call Now
                </button>
              </a>
              <Link to="/enquiry">
                <button className="w-full cursor-pointer sm:w-auto border-2 border-emerald-400 text-emerald-200 hover:bg-emerald-400 hover:text-white px-8 py-4 text-lg rounded-lg font-semibold transition-all shadow-[0_0_20px_rgba(16,185,129,0.6)] hover:scale-105">
                  Get Free Quote   →
                </button>
              </Link>
            </div>


            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto text-center mt-10">
              {/* Customers */}
              <div className="p-4 rounded-xl bg-black/30 backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.4)] hover:shadow-[0_0_25px_rgba(16,185,129,0.7)] transition-all">
                <div className="text-4xl font-extrabold text-emerald-400 drop-shadow-[0_0_15px_rgba(16,185,129,0.9)] mb-1">
                  500+
                </div>
                <div className="text-gray-100 text-sm tracking-wide">Happy Customers</div>
              </div>

              {/* Experience */}
              <div className="p-4 rounded-xl bg-black/30 backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.4)] hover:shadow-[0_0_25px_rgba(16,185,129,0.7)] transition-all">
                <div className="text-4xl font-extrabold text-emerald-400 drop-shadow-[0_0_15px_rgba(16,185,129,0.9)] mb-1">
                  5+
                </div>
                <div className="text-gray-100 text-sm tracking-wide">Years Experience</div>
              </div>

              {/* Cities */}
              <div className="p-4 rounded-xl bg-black/30 backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.4)] hover:shadow-[0_0_25px_rgba(16,185,129,0.7)] transition-all">
                <div className="text-4xl font-extrabold text-emerald-400 drop-shadow-[0_0_15px_rgba(16,185,129,0.9)] mb-1">
                  10+
                </div>
                <div className="text-gray-100 text-sm tracking-wide">Cities Served</div>
              </div>

              {/* Support */}
              <div className="p-4 rounded-xl bg-black/30 backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.4)] hover:shadow-[0_0_25px_rgba(16,185,129,0.7)] transition-all">
                <div className="text-4xl font-extrabold text-emerald-400 drop-shadow-[0_0_15px_rgba(16,185,129,0.9)] mb-1">
                  24/7
                </div>
                <div className="text-gray-100 text-sm tracking-wide">Support</div>
              </div>
            </div>

          </div>
        </section>
      </section>
      {/* Earn and Refer */}
      {/* <section className="relative py-20 px-4 bg-gradient-to-br from-emerald-100 via-cyan-50 to-emerald-50 overflow-hidden">


        <div className="max-w-4xl mx-auto bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl p-10 text-center border border-emerald-100">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md text-emerald-600 font-bold text-lg mb-5">
              <Gift className="w-6 h-6 text-yellow-500" />
              Refer & Earn Rewards
            </div>

            <h2 className="text-4xl font-extrabold text-gray-800 mb-4 tracking-tight">
              Invite Friends & <span className="text-emerald-600">Get Rewards!</span>
            </h2>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Share the gift of purity. Refer your friends to <span className="font-medium text-emerald-700">Sea World Water Solution</span> and enjoy exclusive cashback, discounts, or free services on every successful referral.
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex justify-center"
            >
              <button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-lg hover:shadow-emerald-300 animate-pulse">
                🎁 Refer a Friend
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section> */}


      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Why Choose Sea World Water Solution?
            </h2>
            <p className="text-xl text-gray-600">
              Your trusted partner for pure water solutions
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Quality Assurance */}
            <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="text-cyan-500 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Quality Assurance</h3>
              <p className="text-gray-600">ISI-certified water systems ensuring top-notch safety, purity, and reliability.</p>
            </div>

            {/* After Sale Services */}
            <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaBolt className="text-teal-500 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">After Sale Services</h3>
              <p className="text-gray-600">Fast same-day installation with 24/7 emergency technical assistance.</p>
            </div>

            {/* Expert Service Engineers */}
            <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUserCog className="text-emerald-500 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Expert Service Engineers</h3>
              <p className="text-gray-600">Skilled professionals with 15+ years of expertise in water purification technology.</p>
            </div>

            {/* 24/7 Support System */}
            <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHeadset className="text-orange-500 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">24/7 Support System</h3>
              <p className="text-gray-600">Dedicated helpline ensuring round-the-clock assistance and maintenance.</p>
            </div>

            {/* Separate Pharma Wing */}
            <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaPills className="text-purple-500 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Separate Pharma Wing</h3>
              <p className="text-gray-600">Specialized water solutions tailored for pharmaceutical industry needs.</p>
            </div>

            {/* Cost Effective */}
            <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaMoneyBillWave className="text-yellow-500 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Cost Effective</h3>
              <p className="text-gray-600">High-quality solutions designed to be budget-friendly without compromise.</p>
            </div>
          </div>
        </div>
      </section>


      {/* Services Preview */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-3xl font-bold text-gray-800 mb-4">Our Services</div>
            <div className="text-xl text-gray-600">Complete water purification solutions for every need</div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-cyan-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🔧</span>
              </div>
              <div className="text-xl font-semibold text-gray-800 mb-4">RO Installation</div>
              <div className="text-gray-600 mb-6">
                Professional installation with proper plumbing and electrical connections by certified technicians.
              </div>
              <Link to="/services" className="text-emerald-600 font-medium hover:text-emerald-700">
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🔄</span>
              </div>
              <div className="text-xl font-semibold text-gray-800 mb-4">Maintenance</div>
              <div className="text-gray-600 mb-6">
                Regular maintenance, filter replacement, and repair services to ensure optimal performance.
              </div>
              <Link to="/services" className="text-emerald-600 font-medium hover:text-emerald-700">
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🧪</span>
              </div>
              <div className="text-xl font-semibold text-gray-800 mb-4">Water Testing</div>
              <div className="text-gray-600 mb-6">
                Comprehensive water analysis and TDS testing to ensure water purity standards.
              </div>
              <Link to="/services" className="text-emerald-600 font-medium hover:text-emerald-700">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}
