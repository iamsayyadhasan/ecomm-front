import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchProducts } from "../api/productApi";

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts()
      .then((res) => {
        console.log(" Products fetched:", res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.error(" API fetch error:", err.message);
        setError("Failed to load products.");
      });
  }, []);

  const handleCategoryRedirect = (categoryName) => {
    const lower = categoryName.toLowerCase();
    if (lower.includes("shoe")) return navigate("/shoes");
    if (lower.includes("t-shirt") || lower.includes("tshirt")) return navigate("/tshirts");
    if (lower.includes("jean")) return navigate("/jeans");
    if (lower.includes("shirt")) return navigate("/shirts");
    return navigate("/products"); 
  };

 
  const displayedCategories = new Set();
  const filteredProducts = products.filter((product) => {
    const category = product.category.toLowerCase();
    if (!displayedCategories.has(category)) {
      displayedCategories.add(category);
      return true;
    }
    return false;
  });

  return (
    <div className="min-h-screen bg-white text-center py-8">
      <h1 className="text-3xl font-bold text-blue-900 mb-4">
        Shop the Look – UrbanWear
      </h1>

      {error && <p className="text-red-600 mb-4">{error}</p>}

      {products.length === 0 && !error ? (
        <p className="text-gray-500">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
          {filteredProducts.map((product) => {
          
            const imageUrl = product.image.startsWith("/images")
              ? `${product.image}`
              : `/images/${product.image}`;

            return (
              <div
                key={product._id}
                className="border rounded-lg shadow hover:shadow-lg transition p-4 cursor-pointer"
                onClick={() => handleCategoryRedirect(product.category)}
              >
                <img
                  src={imageUrl}
                  alt={product.name}
                  className="w-full h-64 object-cover mb-4 rounded"
                />
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-sm text-gray-600">{product.description}</p>
                <p className="mt-2 font-bold text-lg text-green-700">
                  {/* ₹ {product.price} */}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Dashboard;
