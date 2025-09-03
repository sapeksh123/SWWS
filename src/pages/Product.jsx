import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Import all data
import products from "../data/products.json";
import spares from "../data/spareParts.json";
import valves from "../data/valves.json";
import instruments from "../data/instruments.json";

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const navigate = useNavigate();

  // ✅ handle card click with category
  const handleCardClick = (id, category) => {
    navigate(`/${category}/${id}`);
  };

  // ✅ merge all items with category type
  const getFilteredItems = () => {
    let allItems = [
      ...products.map((p) => ({ ...p, type: "products" })),
      ...spares.map((s) => ({ ...s, type: "spares" })),
      ...valves.map((v) => ({ ...v, type: "valves" })),
      ...instruments.map((i) => ({ ...i, type: "instruments" })),
    ];

    if (filter !== "all") {
      allItems = allItems.filter((item) => item.type === filter);
    }

    if (search.trim() !== "") {
      allItems = allItems.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    return allItems;
  };

  const filteredItems = getFilteredItems();

  return (
    <div className="min-h-screen bg-cyan-50 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#016055] mb-4">Products</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Offering top-quality water purification products along with expert installation and maintenance services to ensure clean and safe water for your home or business.
          </p>

        </div>

        {/* Search + Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 justify-between">
          <input
            type="text"
            placeholder="Search products..."
            className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-1/2"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-1/4"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="products">Products</option>
            <option value="spares">Spares</option>
            <option value="valves">Valves</option>
            <option value="instruments">Instruments</option>
          </select>
        </div>

        {/* Products Grid */}
        {filteredItems.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">
            No products found.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredItems.map((item) => (
              <div
                key={`${item.type}-${item.id}`}
                className="flex flex-col bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-contain rounded-t-xl p-2"
                />

                {/* Content */}
                <div className="flex flex-col flex-grow p-6">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3 text-center">
                    {item.name}
                  </h3>

                  {/* Price (optional) */}
                  {/* <div className="text-xl font-bold text-teal-600 mb-4 text-center">
          {item.price}
        </div> */}

                  {/* Button locked at bottom */}
                  <div className="mt-auto">
                    <button
                      className="w-full bg-teal-600 cursor-pointer hover:bg-teal-700 text-white py-2 rounded-lg font-medium transition-colors text-sm"
                      onClick={() => handleCardClick(item.id, item.type)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>


        )}
      </div>
    </div>
  );
}
