
import {Link} from "react-router-dom"
export default function ProductServices() {
  const products = [
  {
    name: "Industrial RO System",
    image: "/images/industrial-ro.jpg",
    price: "₹1,50,000 - ₹10,00,000",
    features: [
      "High-capacity reverse osmosis purification",
      "Suitable for large-scale industries",
      "Energy-efficient design",
      "Customizable flow rate"
    ]
  },
  {
    name: "Demineralisers Systems",
    image: "/images/demineralisers.jpg",
    price: "₹1,20,000 - ₹8,50,000",
    features: [
      "Removes dissolved salts and minerals",
      "Two-bed and mixed-bed designs",
      "Fully automatic operation",
      "Low maintenance cost"
    ]
  },
  {
    name: "Industrial Demineralisers",
    image: "/images/industrial-demineralisers.jpg",
    price: "₹1,80,000 - ₹9,00,000",
    features: [
      "High-volume water demineralization",
      "For power plants and manufacturing",
      "Advanced resin technology",
      "Long service life"
    ]
  },
  {
    name: "Filtration System & Accessories",
    image: "/images/filtration.jpg",
    price: "₹50,000 - ₹4,50,000",
    features: [
      "Multi-grade sand & activated carbon filters",
      "High dirt holding capacity",
      "Stainless steel or FRP vessels",
      "Wide range of accessories available"
    ]
  },
  {
    name: "RO-EDI Systems",
    image: "/images/ro-edi.jpg",
    price: "₹3,00,000 - ₹15,00,000",
    features: [
      "Continuous electrodeionization process",
      "Produces ultra-pure water",
      "Ideal for pharma and electronics",
      "Low chemical usage"
    ]
  },
  {
    name: "Storage & Distribution Loop Line System",
    image: "/images/storage-loop.jpg",
    price: "₹2,50,000 - ₹12,00,000",
    features: [
      "Hygienic stainless steel tanks",
      "Automated distribution control",
      "Loop design prevents contamination",
      "Custom sizes available"
    ]
  },
  {
    name: "Ultrafiltration System",
    image: "/images/ultrafiltration.jpg",
    price: "₹1,00,000 - ₹6,50,000",
    features: [
      "Removes suspended solids & bacteria",
      "Hollow fiber membrane technology",
      "Low operating pressure",
      "Long membrane life"
    ]
  },
  {
    name: "Hydro-Pneumatic System",
    image: "/images/hydro-pneumatic.jpg",
    price: "₹80,000 - ₹5,00,000",
    features: [
      "Constant water pressure supply",
      "Automatic pump operation",
      "Compact skid-mounted design",
      "Ideal for commercial buildings"
    ]
  },
  {
    name: "ETP – Effluent Treatment Plant",
    image: "/images/etp.jpg",
    price: "₹3,50,000 - ₹20,00,000",
    features: [
      "Treats industrial wastewater",
      "Meets environmental discharge norms",
      "Biological and chemical treatment",
      "Custom plant design"
    ]
  },
  {
    name: "STP – Sewage Treatment Plant",
    image: "/images/stp.jpg",
    price: "₹4,00,000 - ₹18,00,000",
    features: [
      "Domestic and commercial sewage treatment",
      "MBBR, SBR & MBR technologies",
      "Odor-free operation",
      "Low power consumption"
    ]
  },
  {
    name: "Spare Parts",
    image: "/images/spare-parts.jpg",
    price: "₹500 - ₹1,50,000",
    features: [
      "RO membranes, filters, pumps",
      "Genuine OEM parts",
      "Quick availability",
      "Compatible with multiple brands"
    ]
  },
  {
    name: "Services AMC, O&M",
    image: "/images/amc.jpg",
    price: "₹15,000/year - ₹5,00,000/year",
    features: [
      "Annual Maintenance Contracts",
      "Operation & Management services",
      "Regular inspection and servicing",
      "24/7 emergency support"
    ]
  }
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
    <p className="text-lg text-gray-600">Premium quality water treatment systems for every requirement</p>
  </div>

  <div className="grid md:grid-cols-3 gap-8">
    {products.map((product, index) => (
      <div
        key={index}
        className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-t-xl"
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
