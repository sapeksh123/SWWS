// import aboutbanner from "../assets/aboutbanner.jpg"
// export default function AboutUs() {
//   return (
//     <div className="py-16 px-4 bg-cyan-50">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h1  className="text-4xl md:text-5xl font-bold text-[#016055] mb-4">About Sea World Water Solution</h1>
//           <p className="text-xl text-gray-700 max-w-3xl mx-auto">
//             Leading the water purification industry in India with innovative solutions, expert service, and unwavering
//             commitment to health and safety.
//           </p>
//         </div>

//         {/* Story Section */}
//         <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
//           <div>
//             <h2  className="text-4xl md:text-5xl font-bold text-[#016055] mb-4">Our Story</h2>
//             <p className="text-lg text-gray-700 mb-6">
//               Founded in 2009, Sea World Water Solution began with a simple mission to provide every Indian family access to pure,
//               safe drinking water. What started as a small local business has grown into one of India's most trusted
//               water purification service providers.
//             </p>
//             <p className="text-lg text-gray-700 mb-8">
//               Over the years, we have served more than 1000+ satisfied customers across multiple cities, establishing
//               ourselves as the go-to solution for residential and commercial water purification needs.
//             </p>

//             <div className="grid grid-cols-2 gap-6">
//               {[
//                 { label: "Founded", value: "2009" },
//                 { label: "Happy Customers", value: "10,000+" },
//                 { label: "Cities Served", value: "50+" },
//                 { label: "Years Experience", value: "15+" },
//               ].map((item, i) => (
//                 <div key={i} className="text-center p-6 bg-white rounded-xl shadow-lg">
//                   <div className="text-3xl font-bold text-[#00796b] mb-2">{item.value}</div>
//                   <div className="text-gray-600 font-medium">{item.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div>
//             <img
//               src={aboutbanner}
//               alt="Our Team"
//               className="w-full h-96 object-cover rounded-2xl shadow-xl ml-8"
//             />
//           </div>
//         </div>

//         {/* Mission, Vision, Values */}
//         <div className="grid md:grid-cols-3 gap-8 mb-16">
//           {[
//             {
//               icon: "🎯",
//               title: "Our Mission",
//               desc: "To provide every Indian household with access to pure, safe drinking water through innovative RO technology and exceptional service.",
//               bg: "bg-teal-100",
//             },
//             {
//               icon: "👁️",
//               title: "Our Vision",
//               desc: "To become India's most trusted water purification service provider, setting new standards in quality and customer satisfaction.",
//               bg: "bg-green-100",
//             },
//             {
//               icon: "🏆",
//               title: "Our Values",
//               desc: "Quality, integrity, innovation, and customer-centricity drive everything we do in our mission for pure water.",
//               bg: "bg-cyan-100",
//             },
//           ].map((item, i) => (
//             <div key={i} className="text-center bg-white p-8 rounded-xl shadow-lg">
//               <div className={`w-20 h-20 ${item.bg} rounded-full flex items-center justify-center mx-auto mb-6`}>
//                 <span className="text-3xl">{item.icon}</span>
//               </div>
//               <h3 className="text-2xl font-bold text-[#016055] mb-4">{item.title}</h3>
//               <p className="text-gray-700">{item.desc}</p>
//             </div>
//           ))}
//         </div>

//         {/* Why Choose Us */}
//         <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
//           <div className="text-center mb-12">
//             <h3 className="text-3xl font-bold text-[#016055] mb-4">Why Choose Sea World Water Solution?</h3>
//             <p className="text-xl text-gray-700">Experience the difference with our premium services</p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               "ISI Certified Products",
//               "Expert Installation",
//               "24/7 Customer Support",
//               "Comprehensive Warranty",
//               "Regular Maintenance",
//               "Affordable Pricing",
//               "Pan-India Service",
//               "98% Customer Satisfaction",
//             ].map((feature, index) => (
//               <div key={index} className="flex items-center space-x-3 p-4 bg-[#e0f7fa] rounded-lg">
//                 <span className="text-[#00796b] text-xl">✓</span>
//                 <span className="text-gray-800 font-medium">{feature}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Team Section */}
//         <div className="mt-16">
//           <div className="text-center mb-12">
//             <h3 className="text-3xl font-bold text-[#016055] mb-4">Meet Our Leadership Team</h3>
//             <p className="text-xl text-gray-700">Experienced professionals leading the way</p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               { name: "Rajesh Kumar", role: "Founder & CEO", experience: "15+ years in water purification", image:"https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"},
//               { name: "Priya Sharma", role: "Chief Technology Officer", experience: "PhD in Environmental Engineering",image:"https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png" },
//               { name: "Amit Patel", role: "Chief Operations Officer", experience: "Operations and customer satisfaction expert",image:"https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png" },
//             ].map((member, index) => (
//               <div key={index} className="text-center bg-white p-8 rounded-xl shadow-lg">
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
//                 />
//                 <h4 className="text-xl font-bold text-[#016055] mb-2">{member.name}</h4>
//                 <p className="text-[#009688] font-medium mb-4">{member.role}</p>
//                 <p className="text-gray-700 text-sm">{member.experience}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


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

        {/* Banner */}
        <div className="mb-16">
          <img
            src={aboutbanner}
            alt="About Sea World Water Solution"
            className="w-full h-96 object-contain rounded-2xl shadow-xl"
          />
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

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                role: "Founder & CEO",
                experience: "15+ years in water purification",
                image:
                  "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"
              },
              {
                name: "Priya Sharma",
                role: "Chief Technology Officer",
                experience: "PhD in Environmental Engineering",
                image:
                  "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"
              },
              {
                name: "Amit Patel",
                role: "Chief Operations Officer",
                experience: "Operations and customer satisfaction expert",
                image:
                  "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"
              }
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
