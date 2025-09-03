import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

export default function Enquiry() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    service: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false); // toast notification state

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbz9YxCgSS7zZjke5qgfjByeV2A6t1tcCCPKZxpLcKKdUi8pBaUxiEUPKjTVKEPx5BRP/exec",
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: { "Content-Type": "application/json" },
          mode: "no-cors",
        }
      );

      // Show success toast first
      setShowSuccess(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        city: "",
        service: "",
        message: "",
      });

      // After 1 second → show full success screen
      setTimeout(() => {
        setShowSuccess(false);
        setIsSubmitted(true);
      }, 200);
    } catch (err) {
      console.error("Submission failed:", err);
    }
  };

  const services = [
    "RO System Installation",
    "Maintenance & Repair",
    "Water Quality Testing",
    "Filter Replacement",
    "Commercial RO Plant",
    "AMC Service",
  ];

  return (
    <div className="py-16 px-4 bg-cyan-50 relative">
      {/* ✅ Success Toast */}
      {showSuccess && (
        <div className="fixed top-5 right-5 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2 animate-bounce z-50">
          <CheckCircle className="h-5 w-5" />
          <span>Enquiry submitted successfully!</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#016055] mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have questions? Need a quote? We're here to help!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-primary-dark mb-2">
                  Thank You!
                </h3>
                <p className="text-lg text-gray-600 mb-2">
                  Your enquiry has been submitted. We'll contact you within 2
                  hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-gradient-to-r from-teal-600 to-teal-700 text-white px-6 py-2 rounded-lg font-medium"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <InputField
                    label="Full Name *"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                  />
                  <InputField
                    label="Phone Number *"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <InputField
                    label="Email Address"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                  />
                  <InputField
                    label="City *"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="Enter your city"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Required *
                  </label>
                  <select
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Tell us about your requirements..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full cursor-pointer bg-teal-600 hover:bg-teal-800 text-white py-4 text-lg rounded-lg font-medium flex items-center justify-center"
                >
                  <Send className="mr-2 h-5 cursor-pointer w-5" />
                  Send Enquiry
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <InfoCard
              icon={<Phone className="h-6 w-6 text-blue-600" />}
              title="Phone"
              lines={["+91 7987696387"]}
            />
            <InfoCard
              icon={<Mail className="h-6 w-6 text-green-600" />}
              title="Email"
              lines={["seaworldwater11@gmail.com"]}
            />
            <InfoCard
              icon={<MapPin className="h-6 w-6 text-red-600" />}
              title="Address"
              lines={[
                "TB 515 , Capital Galleria , Bhiwadi Alwar-301019 Rajasthan, India",
              ]}
            />
            <InfoCard
              icon={<Clock className="h-6 w-6 text-purple-600" />}
              title="Business Hours"
              lines={[
                "Mon-Sat: 9:00 AM - 7:00 PM",
                "Sunday: 10:00 AM - 5:00 PM",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Reusable Components
const InputField = ({ label, ...props }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {label}
    </label>
    <input
      {...props}
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
    />
  </div>
);

const InfoCard = ({ icon, title, lines }) => (
  <div className="bg-white border-0 shadow-md p-8 rounded-lg flex space-x-4 items-start w-full max-w-full mx-auto">
    <div className="p-3 bg-blue-100 rounded-lg">{icon}</div>
    <div>
      <h4 className="font-semibold text-[#016055] mb-1">{title}</h4>
      {lines.map((line, idx) => (
        <p key={idx} className="text-gray-600">
          {line}
        </p>
      ))}
    </div>
  </div>
);
