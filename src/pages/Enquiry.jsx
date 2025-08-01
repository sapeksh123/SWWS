
import { useState, useEffect } from "react"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Star } from "lucide-react"

export default function Enquiry() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    service: "",
    message: "",
  })

  const [rating, setRating] = useState(0)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [feedbacks, setFeedbacks] = useState([])

  useEffect(() => {
    const storedFeedbacks = JSON.parse(localStorage.getItem("feedbacks")) || []
    setFeedbacks(storedFeedbacks)
  }, [])

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleRatingChange = (value) => {
    setRating(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newFeedback = { ...formData, rating, time: new Date().toLocaleString() }
    const updatedFeedbacks = [newFeedback, ...feedbacks]
    localStorage.setItem("feedbacks", JSON.stringify(updatedFeedbacks))
    setFeedbacks(updatedFeedbacks)
    setIsSubmitted(true)
    setFormData({ name: "", phone: "", email: "", city: "", service: "", message: "" })
    setRating(0)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const services = [
    "RO System Installation",
    "Maintenance & Repair",
    "Water Quality Testing",
    "Filter Replacement",
    "Commercial RO Plant",
    "AMC Service",
  ]

  return (
    <div className="py-16 px-4 bg-cyan-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#016055] mb-4">Get In Touch</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have questions? Need a quote? We're here to help!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <h2 className="text-3xl font-bold text-primary-dark mb-8">Send us an Enquiry</h2>

            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-primary-dark mb-2">Thank You!</h3>
                <p className="text-lg text-gray-600 mb-2">
                  Your enquiry has been submitted. We'll contact you within 2 hours.
                </p>
                <div className="mb-6">
                  <p className="text-gray-700 font-medium mb-1">Your Rating:</p>
                  <div className="flex justify-center">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <Star
                        key={num}
                        className={`w-6 h-6 ${num <= rating ? "text-yellow-500" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                </div>
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
                  <InputField label="Full Name *" name="name" required value={formData.name} onChange={handleInputChange} placeholder="Enter your full name" />
                  <InputField label="Phone Number *" name="phone" type="tel" required value={formData.phone} onChange={handleInputChange} placeholder="Enter your phone number" />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <InputField label="Email Address" name="email" type="email"  required value={formData.email} onChange={handleInputChange} placeholder="Enter your email" />
                  <InputField label="City *" name="city" required value={formData.city} onChange={handleInputChange} placeholder="Enter your city" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Required *</label>
                  <select
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
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
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Rate our service *</label>
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <Star
                        key={num}
                        onClick={() => handleRatingChange(num)}
                        className={`w-6 h-6 cursor-pointer ${num <= rating ? "text-yellow-500" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-teal-600 hover:bg-teal-800 text-white py-4 text-lg rounded-lg font-medium flex items-center justify-center"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Enquiry
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <InfoCard icon={<Phone className="h-6 w-6 text-blue-600" />} title="Phone" lines={["+91 98765 43210", "+91 87654 32109"]} />
            <InfoCard icon={<Mail className="h-6 w-6 text-green-600" />} title="Email" lines={["seaworldwater11@gmail.com", "support@seaworldwater.in"]} />
            <InfoCard icon={<MapPin className="h-6 w-6 text-red-600" />} title="Address" lines={["TB 515 , Capital Galleria , Bhiwadi Alwar-301019 Rajasthan, India"]} />
            <InfoCard icon={<Clock className="h-6 w-6 text-purple-600" />} title="Business Hours" lines={["Mon-Sat: 9:00 AM - 7:00 PM", "Sunday: 10:00 AM - 5:00 PM"]} />
          </div>
        </div>

      
       {/* Feedback Display */}
<div className="mt-16 max-w-6xl mx-auto">
  <h3 className="text-3xl font-bold text-[#016055] mb-6 text-center">User Feedbacks</h3>
  {feedbacks.length > 0 ? (
    <div className="grid md:grid-cols-2 gap-6 max-h-[500px] overflow-y-auto px-2">
      {feedbacks.map((fb, idx) => (
        <div
          key={idx}
          className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition hover:shadow-xl"
        >
          <div className="mb-2 flex justify-between items-center">
            <div className="text-lg font-semibold text-[#016055]">
              {fb.name} <span className="text-sm text-gray-500">({fb.city})</span>
            </div>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((num) => (
                <Star
                  key={num}
                  className={`w-5 h-5 ${
                    num <= fb.rating ? "text-yellow-500" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
          <p className="text-gray-600 text-sm mb-2">{fb.date}</p>
          <p className="text-gray-700 italic">
            {fb.message || "No message provided "}
          </p>
        </div>
      ))}
    </div>
  ) : (
    <p className="text-gray-600 text-center">No feedback submitted yet.</p>
  )}
</div>



       
      </div>
    </div>
  )
}

// Reusable Components
const InputField = ({ label, ...props }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
    <input
      {...props}
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
    />
  </div>
)

const InfoCard = ({ icon, title, lines }) => (
  <div className="bg-white border-0 shadow-md p-8 rounded-lg flex space-x-4 items-start w-full max-w-full mx-auto">
    <div className="p-3 bg-blue-100 rounded-lg">{icon}</div>
    <div>
      <h4 className="font-semibold text-[#016055] mb-1">{title}</h4>
      {lines.map((line, idx) => (
        <p key={idx} className="text-gray-600">{line}</p>
      ))}
    </div>
  </div>
)
