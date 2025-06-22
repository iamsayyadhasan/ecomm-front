import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "./AuthContext";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { user, token } = useAuth();
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const fetchCart = async () => {
      if (!user || !user._id || !token) return;

      try {
        const res = await axios.get(
          `https://ecomm-back-sbvq.onrender.com/api/cart/user/${user._id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        setCart(res.data.cart || []);
      } catch (err) {
        console.error("❌ Failed to fetch cart", err.response?.data || err);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, [user, token]);

 
  const addToCart = async (product) => {
    if (!token) return console.error("❌ No token available for add to cart");

    try {
      const res = await axios.post(
        "https://ecomm-back-sbvq.onrender.com/api/cart/add",
        { product }, 
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      setCart(res.data.cart || []);
    } catch (err) {
      console.error(" Add to cart failed", err.response?.data || err);
    }
  };

  
  const removeFromCart = async (productId) => {
    if (!token) return console.error("❌ No token available to remove from cart");

    try {
      const res = await axios.delete(
        `https://ecomm-back-sbvq.onrender.com/api/cart/remove/${productId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      setCart(res.data.cart || []);
    } catch (err) {
      console.error(" Remove from cart failed", err.response?.data || err);
    }
  };

  
  const updateQuantity = async (productId, newQty) => {
    if (!token) return console.error("❌ No token available to update quantity");

    try {
      const res = await axios.put(
        "https://ecomm-back-sbvq.onrender.com/api/cart/update",
        {
          productId,
          quantity: newQty,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      setCart(res.data.cart || []);
    } catch (err) {
      console.error(" Update quantity failed", err.response?.data || err);
    }
  };

  return (
    <CartContext.Provider
      value={{ cart,setCart, loading, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
