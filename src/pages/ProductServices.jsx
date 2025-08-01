
import {Link} from "react-router-dom"
export default function ProductServices() {
  const products = [
    {
      name: "Home RO Systems",
      image: "https://images-na.ssl-images-amazon.com/images/I/71TY8sbokEL._AC_SL1500_.jpg",
      price: "₹8,999 - ₹25,999",
      features: ["7-Stage Purification", "UV + UF Technology", "10L Storage Tank", "1 Year Warranty"],
      
    },
    {
      name: "Commercial RO Plants",
      image: "https://www.marlo-inc.com/sites/default/files/2021-11/twam-s04e24-01-front-left.jpg",
      price: "₹45,999 - ₹2,50,000",
      features: ["High Capacity", "Industrial Grade", "Auto-Flush System", "2 Year Warranty"],
    
    },
    {
      name: "Alkaline Water Purifiers",
      image: "https://aquapure.org.pk/wp-content/uploads/2020/12/Untitled-design-1.png",
      price: "₹15,999 - ₹35,999",
      features: ["pH Balance Control", "Mineral Enhancement", "Smart Display", "3 Year Warranty"],
      
    },
  ];

  const services = [
    {
      icon: "🔧",
      title: "RO Installation",
      description: "Professional installation of RO systems with proper plumbing and electrical connections.",
    },
    {
      icon: "🔄",
      title: "Maintenance & Repair",
      description: "Regular maintenance, filter replacement, and repair services for optimal performance.",
    },
    {
      icon: "🧪",
      title: "Water Quality Testing",
      description: "Comprehensive water analysis and TDS testing to ensure water purity standards.",
    },
    {
      icon: "🛡️",
      title: "AMC Services",
      description: "Annual Maintenance Contracts with scheduled visits and priority support.",
    },
    {
      icon: "🔄",
      title: "Filter Replacement",
      description: "Genuine filter cartridges and membranes replacement with quality assurance.",
    },
    {
      icon: "📞",
      title: "Customer Support",
      description: "24/7 customer support with expert guidance and emergency assistance.",
    },
  ];

  return (
      <div className="py-16 px-4 bg-cyan-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1  className="text-4xl md:text-5xl font-bold text-[#016055] mb-4">Products & Services</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive range of water purification products and professional services to meet all your needs.
          </p>
        </div>

        {/* Products Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#004d40] mb-4">Our Products</h2>
            <p className="text-lg text-gray-600">Premium quality RO systems for every requirement</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow  `}
              >
                
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-contain"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                  <div className="text-2xl font-bold text-teal-600 mb-4">{product.price}</div>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <span className="text-cyan-600 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/enquiry">
                  <button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                    Get Quote
                  </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div className="bg-cyan-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#004d40] mb-4">Our Services</h2>
            <p className="text-lg text-gray-600">
              Professional services to keep your water pure and systems running smoothly
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Service Process */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#004d40] mb-4">Our Service Process</h3>
            <p className="text-lg text-gray-600">Simple and transparent process for all your needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Contact Us", desc: "Call us or fill the enquiry form to get started" },
              { step: "2", title: "Free Consultation", desc: "Our expert visits for water testing and recommendation" },
              { step: "3", title: "Installation", desc: "Professional installation by certified technicians" },
              { step: "4", title: "Ongoing Support", desc: "Regular maintenance and 24/7 support" },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  {process.step}
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{process.title}</h4>
                <p className="text-gray-600">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>

      
      </div>
    </div>
  );
}
