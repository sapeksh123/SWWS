// import { useParams, Link } from "react-router-dom";
// import products from "../data/products.json"; 
// import spares from "../data/spareParts.json";
// import valves from "../data/valves.json";
// import instruments from "../data/instruments.json";

// export default function ProductDetail() {
//   const { id } = useParams();
//   const product = products.find((p) => String(p.id) === String(id));
//   const spare = spares.find((s) => String(s.id) === String(id));
//   const valve = valves.find((v) => String(v.id) === String(id));
//   const instrument = instruments.find((i) => String(i.id) === String(id));

//   if (!product) {
//     return (
//       <div className="py-16 text-center text-gray-700">
//         <h2 className="text-2xl font-bold mb-4">❌ Product not found!</h2>
//         <Link
//           to="/"
//           className="text-teal-600 hover:underline font-medium text-lg"
//         >
//           Go back 
//         </Link>
//       </div>
//     );
//   }
//     if (!spare) {
//     return (
//       <div className="py-16 text-center text-gray-700">
//         <h2 className="text-2xl font-bold mb-4">❌ Spare Parts not found!</h2>
//         <Link
//           to="/"    
//           className="text-teal-600 hover:underline font-medium text-lg"
//         >
//           Go back 
//         </Link>
//       </div>
//     );
//   }
//   if (!valve) {
//     return (
//       <div className="py-16 text-center text-gray-700">
//         <h2 className="text-2xl font-bold mb-4">❌ Valves not found!</h2>
//         <Link
//           to="/"
//           className="text-teal-600 hover:underline font-medium text-lg"
//         >
//           Go back to Products
//         </Link>
//       </div>
//     );
//   }  if (!instrument) {
//     return (
//       <div className="py-16 text-center text-gray-700">
//         <h2 className="text-2xl font-bold mb-4">❌ Instruments not found!</h2>
//         <Link
//           to="/"
//           className="text-teal-600 hover:underline font-medium text-lg"
//         >
//           Go back to Products
//         </Link>
//       </div>
//     );
//   }
//   return (
//     <div className="py-10 px-4 bg-cyan-50 min-h-screen">
//       <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-10 flex flex-col md:flex-row gap-8">
        
//         {/* 🖼️ Image Section */}
//         <div className="md:w-1/2 flex justify-center items-center">
//           <img
//             src={product.image}
//             alt={product.name}
//             className="w-full max-h-[450px] object-contain rounded-xl shadow-sm"
//           />
//         </div>

//         {/* 📄 Details Section */}
//         <div className="md:w-1/2 flex flex-col justify-between">
//           <div>
//             <h2 className="text-3xl font-bold text-gray-800 mb-4">
//               {product.name}
//             </h2>
//             <p className="text-teal-600 font-semibold mb-4 text-xl">
//               {product.price}
//             </p>
//             <p className="text-gray-700 leading-relaxed mb-6">
//               {product.desc}
//             </p>

//             {/* Features */}
//             {product.features?.length > 0 && (
//               <>
//                 <p className="text-black font-semibold mb-2 text-lg">Features:</p>
//                 <ul className="space-y-2 mb-6">
//                   {product.features.map((feature, idx) => (
//                     <li key={idx} className="flex items-start text-gray-600">
//                       <span className="text-cyan-600 mr-2 mt-1">✓</span>
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//               </>
//             )}

//             {/* Specification */}
//             {product.specification?.length > 0 && (
//               <>
//                 <p className="text-black font-semibold mb-2 text-lg">
//                   Specification:
//                 </p>
//                 <ul className="space-y-2 mb-6">
//                   {product.specification.map((spec, idx) => (
//                     <li key={idx} className="flex items-start text-gray-600">
//                       <span className="text-cyan-600 mr-2 mt-1">✓</span>
//                       {spec}
//                     </li>
//                   ))}
//                 </ul>
//               </>
//             )}
//           </div>

        
//           <Link to="/enquiry" className="mt-6">
//             <button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 px-4 rounded-lg font-medium transition-colors text-lg">
//               Get Quote
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }


import { useParams, Link } from "react-router-dom";
import products from "../data/products.json"; 
import spares from "../data/spareParts.json";
import valves from "../data/valves.json";
import instruments from "../data/instruments.json";

export default function ProductDetail() {
  const { id, category } = useParams();

  const categoryMap = {
    products,
    spares,
    valves,
    instruments,
  };

  const items = categoryMap[category] || [];
  const item = items.find((obj) => String(obj.id) === String(id));

  if (!item) {
    return (
      <div className="py-16 text-center text-gray-700">
        <h2 className="text-2xl font-bold mb-4">❌ Item not found!</h2>
        <Link
          to="/"
          className="text-teal-600 hover:underline font-medium text-lg"
        >
          Go back
        </Link>
      </div>
    );
  }

  return (
    <div className="py-10 px-4 bg-cyan-50 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-10 flex flex-col md:flex-row gap-8">
        
        {/* 🖼️ Image Section */}
        <div className="md:w-1/2 flex justify-center items-center">
          <img
            src={item.image}
            alt={item.name}
            className="w-full max-h-[450px] object-contain rounded-xl shadow-sm"
          />
        </div>

        {/* 📄 Details Section */}
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {item.name}
            </h2>
            <p className="text-teal-600 font-semibold mb-2 text-xl">
              {item.price}
            </p>
            <p className="text-gray-500 text-sm mb-4">
              Category: {category.charAt(0).toUpperCase() + category.slice(1)}
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              {item.desc}
            </p>

            {item.features?.length > 0 && (
              <>
                <p className="text-black font-semibold mb-2 text-lg">Features:</p>
                <ul className="space-y-2 mb-6">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-600">
                      <span className="text-cyan-600 mr-2 mt-1">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {item.specification?.length > 0 && (
              <>
                <p className="text-black font-semibold mb-2 text-lg">Specification:</p>
                <ul className="space-y-2 mb-6">
                  {item.specification.map((spec, idx) => (
                    <li key={idx} className="flex items-start text-gray-600">
                      <span className="text-cyan-600 mr-2 mt-1">✓</span>
                      {spec}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          <Link to="/enquiry" className="mt-6">
            <button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 px-4 rounded-lg font-medium transition-colors text-lg">
              Get Quote
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
