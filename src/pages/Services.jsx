import React from "react";

const Services = () => {
  
  const Features = [
    {
      number: "01",
      title: "Quality Assurance",
      desc: "Strict observation on manufacturing, vendor-level checks, and partnerships with technically sound agencies.",
    },
    {
      number: "02",
      title: "Expert Service Engineers",
      desc: "Service engineers exercise total care on bought-out items and provide expert suggestions to customers.",
    },
    {
      number: "03",
      title: "After Sale Services",
      desc: "Any problem is attended within 24 hours of notice in cities located in Western India.",
    },
    
    {
      number: "04",
      title: "24X7 Support System",
      desc: "Expert support team for faster execution and reliable guidance.",
    },
    {
      number: "05",
      title: "Separate Pharma Wing",
      desc: "A specialised team trained to manage the unique needs of the pharmaceutical industry.",
    },
    {
      number: "06",
      title: "Cost Effective",
      desc: "Ex-stock spares and Ion Exchange Resins at the most competitive pricing structure.",
    },
  ];

  //  Divisions
  const divisions = [
    "Water analysis",
    "Filter dosing with swimming pool application",
    "SF Industrial / Packaged",
    "DM - Portable / Packaged",
    "DM - Industrial / Projects",
    "Reverse Osmosis",
    "Dealkaliser",
    "Spares and Services",
  ];

  // Process Steps
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
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#016055] mb-4">
            Services
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Within a span of years, Sea World Water Solution has rolled out more than 1200
            pressure vessels and now works exclusively on economical and compact
            Reverse Osmosis Systems, wastewater recycling, and advanced water
            treatment. Our facilities are located in Thane, with dedicated
            rubber-lining job work capabilities.
          </p>
        </div>

        {/*  Service Features */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#004d40] text-center mb-12">
            Why Choose Us ?
          </h2>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {Features.map((f, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow text-center hover:shadow-lg transition"
              >
                <div className="text-3xl font-bold text-teal-600 mb-4">
                  {f.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {f.title}
                </h3>
                <p className="text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Divisions */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#004d40] text-center mb-8">
            Our Divisions
          </h2>
          <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 list-disc pl-6 text-gray-700">
            {divisions.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
          
        </div>

        {/* Process Steps */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#004d40] mb-4">
              Our Service Process
            </h3>
            <p className="text-lg text-gray-600">
              Simple and transparent process for all your needs
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((process, index) => (
              <div
                key={index}
                className="text-center flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center mb-6 text-2xl font-bold">
                  {process.step}
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  {process.title}
                </h4>
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
