

import { useState } from "react"
import { X, ZoomIn } from "lucide-react"

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  const galleryImages = [
    {
      id: 1,
      src: "https://www.aquabestuae.com/wp-content/uploads/2023/05/best-alkaline-ro-system.jpeg",
      title: "Modern Kitchen Installation",
      description: "Premium RO system installed in contemporary kitchen",
    },
    {
      id: 2,
      src: "https://www.maxwaterflow.com/assets/images/default/shop/101080-systems-plain.jpg",
      title: "Commercial RO Plant",
      description: "Large capacity RO plant for office building",
    },
    {
      id: 3,
      src: "https://www.aquabestuae.com/wp-content/uploads/2023/05/best-alkaline-ro-system.jpeg",
      title: "Product Range",
      description: "Complete range of RO water purification systems",
    },
    {
      id: 4,
      src: "https://www.maxwaterflow.com/assets/images/default/shop/101080-systems-plain.jpg",
      title: "Professional Installation",
      description: "Certified technician performing installation",
    },
    {
      id: 5,
      src: "https://www.aquabestuae.com/wp-content/uploads/2023/05/best-alkaline-ro-system.jpeg",
      title: "Expert Team",
      description: "Our experienced water purification specialists",
    },
    {
      id: 6,
      src: "https://www.maxwaterflow.com/assets/images/default/shop/101080-systems-plain.jpg",
      title: "Alkaline Water Purifier",
      description: "Advanced alkaline water purifier with pH control",
    },
  ]

  const openModal = (image) => setSelectedImage(image)
  const closeModal = () => setSelectedImage(null)

  return (
    <div className="py-16 px-4 bg-cyan-50">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1  className="text-4xl md:text-5xl font-bold text-[#016055] mb-4">Gallery</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our work, products, and installations
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 rounded-xl"
              onClick={() => openModal(image)}
            >
              <div className="relative">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-contain group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-gray-800">
                    <h3 className="font-bold text-lg">{image.title}</h3>
                    <p className="text-sm text-gray-700">{image.description}</p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <ZoomIn className="h-6 w-6 text-gray-800" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

       
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button onClick={closeModal} className="absolute top-4 right-4 text-black hover:text-gray-300 z-10">
              <X className="h-8 w-8" />
            </button>

            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
              <h3 className="text-2xl font-bold mb-1">{selectedImage.title}</h3>
              <p className="text-sm text-gray-200">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
