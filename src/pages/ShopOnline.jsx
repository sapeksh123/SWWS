

import { ShoppingCart, Star, Search, Truck, Shield, ChartArea } from "lucide-react"
import { useState } from "react"

export default function ShopOnline() {
  const [searchTerm, setSearchTerm] = useState("")

  const products = [
    {
      id: 1,
      name: "Aqua Fresh RO System",
      price: 12999,
      originalPrice: 15999,
      rating: 4.5,
      reviews: 234,
      image: "https://m.media-amazon.com/images/I/615rIO67c2L._SL1500_.jpg",
      features: ["7-Stage Purification", "10L Tank", "UV+UF+RO"],


    },
    {
      id: 2,
      name: "Premium Alkaline RO",
      price: 18999,
      originalPrice: 22999,
      rating: 4.7,
      reviews: 156,
      image: "https://m.media-amazon.com/images/I/615rIO67c2L._SL1500_.jpg",
      features: ["pH Control", "Mineral Enhancement", "Smart Display"],


    },
    {
      id: 3,
      name: "Sediment Filter Set",
      price: 899,
      originalPrice: 1199,
      rating: 4.3,
      reviews: 89,
      image: "https://m.media-amazon.com/images/I/615rIO67c2L._SL1500_.jpg",
      features: ["5 Micron", "6 Month Life", "Universal Fit"],

    },
    {
      id: 4,
      name: "RO Membrane",
      price: 1299,
      originalPrice: 1599,
      rating: 4.6,
      reviews: 167,
      image: "https://m.media-amazon.com/images/I/615rIO67c2L._SL1500_.jpg",
      features: ["75 GPD", "High Rejection", "2 Year Life"],

    },
  ]

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="py-16 px-4 bg-cyan-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#016055] mb-4">Shop Online</h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Browse our complete range of water purification products
          </p>
        </div>

        {/* Benefits */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          <div className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
            <Truck className="h-8 w-8 text-teal-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800 mb-1">Free Delivery</h3>
            <p className="text-sm text-gray-600">On orders above ₹999</p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
            <Shield className="h-8 w-8 text-teal-700 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800 mb-1">Genuine Products</h3>
            <p className="text-sm text-gray-600">100% authentic guarantee</p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
            <Star className="h-8 w-8 text-yellow-500 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800 mb-1">Expert Support</h3>
            <p className="text-sm text-gray-600">24/7 customer care</p>
          </div>
        </div>

        {/* Search */}
        <div className="bg-white rounded-xl p-6 mb-10 shadow-md max-w-xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="hover:shadow-xl transition-all duration-300 bg-white border border-gray-100 rounded-xl overflow-hidden relative"
            >


              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-contain"
              />

              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>

                <div className="flex items-center mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < Math.floor(product.rating)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                          }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">({product.reviews})</span>
                </div>

                <div className="mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-teal-700">₹{product.price.toLocaleString()}</span>
                    <span className="text-sm text-gray-400 line-through">
                      ₹{product.originalPrice.toLocaleString()}
                    </span>
                  </div>
                </div>

                <ul className="space-y-1 mb-4">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-center">
                      <span className="w-2 h-2 bg-teal-600 rounded-full mr-2 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">  
                  <a
                    href="/buy-now"
                    className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white py-2 px-3 rounded-lg font-medium flex items-center justify-center shadow-md transition-all duration-300"
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Buy Now
                  </a>


                  <a
                    href="https://wa.me/918888888888"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white py-2 px-4 rounded-lg font-medium flex items-center justify-center shadow-md transition-all duration-300"
                  >
                    <ChartArea className="h-5 w-5 mr-2" />
                    Enquiry
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
