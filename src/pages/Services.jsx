import React from "react";
import { FiSettings, FiRefreshCcw, FiShield, FiPhone, FiDroplet } from "react-icons/fi";
import { GiWaterTank } from "react-icons/gi";

const Services = () => {
  const services = [
    {
      icon: <FiSettings className="text-3xl text-[#016055]" />,
      title: "RO Installation",
      description: "Professional installation of RO systems with proper plumbing and electrical connections.",
    },
    {
      icon: <FiRefreshCcw className="text-3xl text-[#016055]" />,
      title: "Maintenance & Repair",
      description: "Regular maintenance, filter replacement, and repair services for optimal performance.",
    },
    {
      icon: <FiDroplet className="text-3xl text-[#016055]" />,
      title: "Water Quality Testing",
      description: "Comprehensive water analysis and TDS testing to ensure water purity standards.",
    },
    {
      icon: <FiShield className="text-3xl text-[#016055]" />,
      title: "AMC Services",
      description: "Annual Maintenance Contracts with scheduled visits and priority support.",
    },
    {
      icon: <GiWaterTank className="text-3xl text-[#016055]" />,
      title: "Filter Replacement",
      description: "Genuine filter cartridges and membranes replacement with quality assurance.",
    },
    {
      icon: <FiPhone className="text-3xl text-[#016055]" />,
      title: "Customer Support",
      description: "24/7 customer support with expert guidance and emergency assistance.",
    },
  ];

  const processSteps = [
    { step: "1", title: "Contact Us", desc: "Call us or fill the enquiry form to get started" },
    { step: "2", title: "Free Consultation", desc: "Our expert visits for water testing and recommendation" },
    { step: "3", title: "Installation", desc: "Professional installation by certified technicians" },
    { step: "4", title: "Ongoing Support", desc: "Regular maintenance and 24/7 support" },
  ];

  return (
    <div className="py-16 px-4 bg-cyan-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#016055] mb-4">Services</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive range of water purification products and professional services to meet all your needs.
          </p>
        </div>

        {/* Services Section */}
        <div className="bg-cyan-50 rounded-2xl p-6 md:p-12">
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
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

          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((process, index) => (
              <div key={index} className="text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center mb-6 text-2xl font-bold">
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
};

export default Services;
