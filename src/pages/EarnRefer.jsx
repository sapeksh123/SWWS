import { useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Send, Phone, User, Users, Home, CreditCard, Wrench } from "lucide-react"

export default function EarnReferPage() {
  const [yourName, setYourName] = useState("")
  const [yourNumber, setYourNumber] = useState("")
  const [yourUpi, setYourUpi] = useState("")
  const [friendName, setFriendName] = useState("")
  const [phone, setPhone] = useState("")
  const [friendAddress, setFriendAddress] = useState("")
  const [serviceType, setServiceType] = useState("")
  const [showConfirm, setShowConfirm] = useState(false)
  const [whatsappUrl, setWhatsappUrl] = useState("")

  const handleSubmit = () => {
    if (!yourName || !yourNumber || !yourUpi || !friendName || !phone || !friendAddress || !serviceType) {
      toast.error("Please fill in all fields.")
      return
    }

    const upiRegex = /^[\w.\-]{2,256}@[a-zA-Z]{2,64}$/
    if (!upiRegex.test(yourUpi)) {
      toast.error("Please enter a valid UPI ID.")
      return
    }

    const referralCode = `SW${yourName.toUpperCase().slice(0, 3)}${Math.floor(Math.random() * 9000 + 1000)}`
    const benefitMsg = `🎁 Use referral code *${referralCode}* and get exciting offers!`

    const message = `Hi ${friendName} 👋,\n\nYour friend *${yourName}* (📞 ${yourNumber}) just referred you to Sea World Water Solution! 💧\n\n📍 Address: ${friendAddress}\n🛠️ Service Interested: ${serviceType}\n\n✅ Trusted water purifier services\n✅ Quick doorstep support\n✅ Affordable pricing\n\n${benefitMsg}\n\nReferrer's UPI: ${yourUpi}\n\n🌐 Visit us: https://seaworldwatersolution.com\n📲 Book online or call anytime.\n\nLet's make clean water accessible for everyone! 💙\n\n- Sea World Team 🌊`

    const encodedMessage = encodeURIComponent(message)
    const url = `https://wa.me/91${phone}?text=${encodedMessage}`
    setWhatsappUrl(url)
    setShowConfirm(true)
  }

  return (
    <div className="min-h-screen mb-16 bg-gradient-to-br from-teal-50 to-cyan-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full mb-32 max-w-lg">
        <h2 className="text-3xl font-bold text-center text-teal-700 mb-6">Refer & Earn 💰</h2>
        <p className="text-center text-gray-600 mb-6">
          Refer a friend and earn exclusive discounts on our water services!
        </p>

        <div className="space-y-4">
          {/* Your Name */}
          <div className="flex items-center border rounded-lg px-3 py-2">
            <User className="text-teal-500 mr-2" />
            <input
              type="text"
              placeholder="Your Name"
              className="w-full outline-none"
              value={yourName}
              onChange={(e) => setYourName(e.target.value)}
            />
          </div>

          {/* Your Number */}
          <div className="flex items-center border rounded-lg px-3 py-2">
            <Phone className="text-teal-500 mr-2" />
            <input
              type="tel"
              placeholder="Your Number"
              className="w-full outline-none"
              value={yourNumber}
              onChange={(e) => setYourNumber(e.target.value)}
              maxLength={10}
            />
          </div>

          {/* Your UPI */}
          <div className="flex items-center border rounded-lg px-3 py-2">
            <CreditCard className="text-cyan-500 mr-2" />
            <input
              type="text"
              placeholder="Your UPI ID"
              className="w-full outline-none"
              value={yourUpi}
              onChange={(e) => setYourUpi(e.target.value)}
            />
          </div>

          {/* Friend Name */}
          <div className="flex items-center border rounded-lg px-3 py-2">
            <Users className="text-cyan-500 mr-2" />
            <input
              type="text"
              placeholder="Friend's Name"
              className="w-full outline-none"
              value={friendName}
              onChange={(e) => setFriendName(e.target.value)}
            />
          </div>

          {/* Friend Phone */}
          <div className="flex items-center border rounded-lg px-3 py-2">
            <Phone className="text-teal-500 mr-2" />
            <input
              type="tel"
              placeholder="Friend's Phone Number"
              className="w-full outline-none"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              maxLength={10}
            />
          </div>

          {/* Friend Address */}
          <div className="flex items-center border rounded-lg px-3 py-2">
            <Home className="text-cyan-500 mr-2" />
            <input
              type="text"
              placeholder="Friend's Address"
              className="w-full outline-none"
              value={friendAddress}
              onChange={(e) => setFriendAddress(e.target.value)}
            />
          </div>

          {/* Service Type */}
          <div className="flex items-center border rounded-lg px-3 py-2 bg-white">
            <Wrench className="text-teal-500 mr-2" />
            <select
              className="w-full outline-none bg-transparent text-gray-700"
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
            >
              <option value="" disabled>
                Select Service Type
              </option>
              <option value="RO">RO</option>
              <option value="UV">UV</option>
              <option value="Water Filter">Water Filter</option>
              <option value="AMC Service">AMC Service</option>
              <option value="Installation">Installation</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="mt-4 w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center transition-all shadow-md"
          >
            <Send className="mr-2 h-5 w-5" />
            Send via WhatsApp
          </button>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer position="top-center" />

      {/* Confirm Modal */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-md">
            <h2 className="text-lg font-semibold mb-4">Confirm Referral</h2>
            <p>Do you want to send this referral via WhatsApp?</p>
            <div className="mt-4 flex justify-end space-x-3">
              <button
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded"
                onClick={() => setShowConfirm(false)}
              >
                Cancel
              </button>
              <button
                className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded"
                onClick={() => {
                  if (!whatsappUrl) {
                    toast.error("Something went wrong. Please try again.")
                    return
                  }
                  window.open(whatsappUrl, "_blank")
                  setShowConfirm(false)
                }}
              >
                Yes, Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
