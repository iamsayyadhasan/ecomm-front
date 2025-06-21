import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

function Sunglass() {
  const [products, setProducts] = useState([]);
  const { user } = useAuth();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products/category/Sunglasses")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Sunglasses fetch error:", err));
  }, []);

  const handleAddToCart = (product) => {
    if (!user) {
      navigate("/login");
    } else {
      addToCart(product);
      alert("✅ Added to cart!");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl text-center font-bold mb-6">Sunglasses Collection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="border p-4 rounded shadow hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-48 w-full object-cover mb-2 rounded"
            />
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-sm text-gray-600">{product.description}</p>
            <p className="text-lg font-bold text-green-700">₹ {product.price}</p>
            <button
              onClick={() => handleAddToCart(product)}
              className="mt-3 bg-indigo-600 text-white px-4 py-1 rounded hover:bg-indigo-700 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sunglass;
