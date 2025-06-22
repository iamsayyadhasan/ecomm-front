import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CartPage() {
  const { cart, setCart } = useCart();
  const { user, token } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  useEffect(() => {
    console.log(token);
    if (token) {
      axios
        .get(`https://ecomm-back-sbvq.onrender.com/api/cart/user/${user._id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setCart(res.data.cart || []);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Failed to fetch cart", err);
          setLoading(false);
        });
    }
  }, [user, setCart]);

  const handleQuantityChange = async (id, delta) => {
  try {
    const item = cart.find((item) => item.product._id === id);
    if (!item) return;

    const newQty = item.quantity + delta;

    if (newQty <= 0) {
      await axios.delete(
        `https://ecomm-back-sbvq.onrender.com/api/cart/remove/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } else {
      await axios.put(
        `https://ecomm-back-sbvq.onrender.com/api/cart/update`,
        { productId: id, quantity: newQty },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    }

    const res = await axios.get(
      `https://ecomm-back-sbvq.onrender.com/api/cart/user/${user._id}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    setCart(res.data.cart);
  } catch (error) {
    console.error("Error updating cart quantity:", error);
  }
};

  const handleCheckout = async () => {
    console.log("token");
    try {
      const res = await axios.post(
        "https://ecomm-back-sbvq.onrender.com/api/order",
        {
          items: cart.map((item) => ({
            product: item.product._id,
            quantity: item.quantity,
          })),
          totalAmount,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setCart([]);
      navigate("/my-orders");
    } catch (error) {
      console.error("Checkout failed", error);
    }
  };

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  if (loading) {
    return (
      <div className="text-center mt-20 text-lg">🛒 Loading your cart...</div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-6 max-w-3xl mx-auto">
          {cart.map((item) => (
            <div
              key={item.product._id}
              className="flex items-center gap-4 p-4 border rounded shadow"
            >
              <img
                src={item.product.image}
                alt={item.product.name}
                className="w-24 h-24 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{item.product.name}</h3>
                <p className="text-gray-600">₹ {item.product.price}</p>
                <div className="flex items-center mt-2 space-x-2">
                  <button
                    onClick={() => handleQuantityChange(item.product._id, -1)}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item.product._id, 1)}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={() =>
                  handleQuantityChange(item.product._id, -item.quantity)
                }
                className="text-red-600 hover:text-red-800"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="text-right mt-6 text-xl font-bold">
            Total: ₹ {totalAmount.toFixed(2)}
          </div>

          <div className="text-right">
            <button
              onClick={handleCheckout}
              className="mt-4 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
