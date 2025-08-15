
import { Link } from "react-router-dom"
import banner from "../assets/banner.jpg"
import { Phone, Star, Gift } from "lucide-react"
import { motion } from "framer-motion";
import { FaShieldAlt, FaBolt, FaUserCog, FaHeadset, FaPills, FaMoneyBillWave } from "react-icons/fa";



export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-cyan-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Star className="h-5 w-5 text-yellow-500" />
                Water Purification Service in India
              </div>

              <div className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                Pure Water,
                <span className="text-emerald-600 block">Healthy Life</span>
              </div>

              <div className="text-xl text-gray-600 mb-8 leading-relaxed">
                Most trusted RO water purification service provider. We ensure safe, clean, and pure drinking
                water for your family with advanced technology.
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a href="tel:+917987696387">
                  <button className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                    <Phone className="h-5 w-5 " />
                    Call Now
                  </button>
                </a>
                <Link to="/enquiry">
                  <button className="w-full sm:w-auto border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-8 py-4 text-lg rounded-lg font-medium transition-colors">
                    Get Free Quote →
                  </button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600 mb-1">500+</div>
                  <div className="text-gray-600 text-sm">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600 mb-1">5+</div>
                  <div className="text-gray-600 text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600 mb-1">10+</div>
                  <div className="text-gray-600 text-sm">Cities Served</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600 mb-1">24/7</div>
                  <div className="text-gray-600 text-sm">Support</div>
                </div>
              </div>
            </div>

            <div className="relative ">
              <div className="bg-white p-6  rounded-2xl shadow-xl">
                <img
                  src={banner}
                  alt="RO Water Purifier"
                  className="w-full h-80 object-cover rounded-xl"
                />
                <div className="mt-4 text-center">
                  <div className="text-xl font-semibold text-gray-800 mb-2">Advanced RO Technology</div>
                  <div className="text-gray-600">90% Pure Water Guaranteed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Earn and Refer */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-emerald-100 via-cyan-50 to-emerald-50 overflow-hidden">


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
      </section>


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
