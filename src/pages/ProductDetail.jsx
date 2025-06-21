import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../api/productApi";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchProductById(id)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.error("Error fetching product:", err.message);
        setError("Failed to load product.");
      });
  }, [id]);

  if (error) {
    return (
      <div className="text-center text-red-500 py-10">{error}</div>
    );
  }

  if (!product) {
    return (
      <div className="text-center text-gray-600 py-10">Loading product details...</div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      <div className="flex flex-col md:flex-row gap-10">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 h-auto object-cover rounded-lg shadow"
        />

        <div className="md:w-1/2 space-y-4">
          <h1 className="text-3xl font-bold text-gray-900">
            {product.name}
          </h1>
          <p className="text-lg text-gray-700">{product.description}</p>
          <p className="text-2xl text-green-700 font-semibold">
            ₹ {product.price}
          </p>
          <p className="text-sm text-gray-500">
            Category: {product.category}
          </p>

          <button className="bg-primary text-white px-6 py-3 rounded hover:bg-accent hover:text-black transition mt-4">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
