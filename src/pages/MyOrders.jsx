import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

function MyOrders() {
  const { token } = useAuth();
  const [orders, setOrders] = useState([]);
 
  useEffect(() => {
    console.log(token)
     const fetchOrders = async () => {
      try {
        const res = await axios.get("/api/order/my-orders", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setOrders(res.data.orders);
      } catch (error) {
        console.error("Error fetching orders", error);
      }
    };

    fetchOrders();
  }, [token]);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">🧾 My Orders</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order._id}
              className="border p-4 rounded shadow bg-white"
            >
              <p className="text-gray-600">Order ID: {order._id}</p>
              <p>Date: {new Date(order.createdAt).toLocaleString()}</p>
              <p className="font-semibold">Total: ₹{order.totalAmount.toFixed(2)}</p>
              <ul className="mt-2">
                {order.items.map((item) => (
                  <li key={item.product._id}>
                    {item.product.name} x {item.quantity}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyOrders;
