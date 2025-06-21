import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";  
import { fetchProducts } from "../api";  
function Dashboard() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchProducts()
      .then((res) => {
        setProducts(res.data);
        console.log("Products fetched:", res.data);
      })
      .catch((err) => {
        console.error("API fetch error:", err.message);
        setError("Failed to load products.");
      });
  }, []);

  return (
    <div className="min-h-screen bg-white text-center py-8">
      <h1 className="text-3xl font-bold text-blue-900 mb-4">
        Shop the Look – UrbanWear
      </h1>

      {error && <p className="text-red-500">{error}</p>}

      {products.length === 0 && !error ? (
        <p className="text-gray-500">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
          {products.map((product) => (
            <Link to={`/product/${product._id}`} key={product._id}>
              <div className="border rounded-lg shadow hover:shadow-lg transition p-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover mb-4"
                />
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-sm text-gray-600">{product.description}</p>
                <p className="mt-2 font-bold text-lg text-green-700">
                  ₹ {product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dashboard;
