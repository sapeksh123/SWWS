


import aboutbanner from "../assets/aboutbanner.jpg";
import {
  FaBullseye,
  FaEye,
  FaClipboardCheck,
  FaAward,
  FaTools,
  FaHeadset,
  FaShieldAlt,
  FaGlobeAsia,
  FaHandshake
} from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";
import {
  
 
  
  FaFlask,
  FaSyncAlt,
  FaDollarSign
} from "react-icons/fa";
import { BsShieldCheck } from "react-icons/bs";


export default function AboutUs() {
  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#016055] mb-4">
            About Sea World Water Solution
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Pioneering water & wastewater treatment solutions globally with
            cutting-edge technology, engineering excellence, and unwavering
            commitment to quality and sustainability.
          </p>
        </div>

        {/* Vision, Mission, QA */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Vision */}
          <div className="text-center bg-white p-8 rounded-xl shadow-lg">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaEye className="text-green-600 text-3xl" />
            </div>
            <h3 className="text-2xl font-bold text-[#016055] mb-4">
              Our Vision
            </h3>
            <p className="text-gray-700 text-sm text-justify leading-relaxed">
              To be a global leader in manufacturing and providing complete
              water and wastewater treatment solutions. We aim to not only
              supply specialized products but also act as trusted problem
              solvers, delivering cost-effective, sustainable, and high-quality
              services while fostering teamwork, integrity, and professionalism.
            </p>
          </div>

          {/* Mission */}
          <div className="text-center bg-white p-8 rounded-xl shadow-lg">
            <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaBullseye className="text-teal-600 text-3xl" />
            </div>
            <h3 className="text-2xl font-bold text-[#016055] mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700 text-sm text-justify leading-relaxed">
              To be recognized as a premier manufacturer of Water Treatment
              Plants—offering Inclined Plate Clarifiers, Filters, Reverse
              Osmosis, Softeners, De-ionisers, Micron Filtration, UV
              Sterilizers, Ultrafiltration, Nanofiltration, and more—achieving
              the highest quality standards while upholding ethics and rewarding
              our employees fairly.
            </p>
          </div>

          {/* Quality Assurance */}
          <div className="text-center bg-white p-8 rounded-xl shadow-lg">
            <div className="w-20 h-20 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaClipboardCheck className="text-cyan-600 text-3xl" />
            </div>
            <h3 className="text-2xl font-bold text-[#016055] mb-4">
              Quality Assurance
            </h3>
            <p className="text-gray-700 text-sm text-justify leading-relaxed">
              Guided by our Quality Assurance Manual, we meet global standards
              in process design, installation, equipment supply, commissioning,
              after-sales service, and contingency planning to ensure safety,
              environmental protection, and client satisfaction.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#016055] mb-4">
              Why Choose Sea World Water Solution?
            </h3>
            <p className="text-lg text-gray-700">
              Experience unmatched quality, service, and engineering expertise.
            </p>
          </div>

         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  {[
    // Quality Assurance → Award icon
    { icon: <FaAward />, label: "Quality Assurance" },

    // Expert Service Engineers → Tools icon
    { icon: <FaTools />, label: "Expert Service Engineers" },

    // 24/7 Customer Support → Headset icon
    { icon: <FaHeadset />, label: "24/7 Customer Support" },

    // Separate Pharma Wing → Flask (lab/testing)
    { icon: <FaFlask />, label: "Separate Pharma Wing" },

    // Regular Maintenance → Sync/refresh icon
    { icon: <FaSyncAlt />, label: "Regular Maintenance" },

    // Cost Effective → Dollar sign icon
    { icon: <FaDollarSign />, label: "Cost Effective" }
  ].map((item, index) => (
    <div
      key={index}
      className="flex items-center space-x-3 p-4 bg-[#e0f7fa] rounded-lg"
    >
      <span className="text-[#00796b] text-xl">{item.icon}</span>
      <span className="text-gray-800 font-medium">{item.label}</span>
    </div>
  ))}
</div>;
        </div>

    

        {/* Leadership Team */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#016055] mb-4">
              Meet Our Leadership Team
            </h3>
            <p className="text-lg text-gray-700">
              Experienced professionals driving excellence in water treatment.
            </p>
          </div>

          <div className="ml-84 gap-8 w-[500px]">
            {[
              {
                name: "Ramesh Tiwari",
                role: "Founder & CEO",
                experience: "15+ years in water purification",
                image:
                  "/ramesh-tiwari.jpg"
              },

            ].map((member, index) => (
              <div
                key={index}
                className="text-center bg-white p-8 rounded-xl shadow-lg"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                />
                <h4 className="text-xl font-bold text-[#016055] mb-2">
                  {member.name}
                </h4>
                <p className="text-[#009688] font-medium mb-4">{member.role}</p>
                <p className="text-gray-700 text-sm">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
