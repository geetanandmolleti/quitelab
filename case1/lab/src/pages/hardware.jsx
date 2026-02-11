import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import {
  FaMicrochip,
  FaSnowflake,
  FaBroadcastTower,
  FaCube,
  FaAtom,
  FaLightbulb,
  FaWaveSquare,
  FaShieldAlt,
  FaServer,
  FaRandom,
  FaLock,
} from "react-icons/fa";

const API_ORDERS = "http://localhost:5500/api/orders";

export default function Hardware() {
  const token = localStorage.getItem("token");

  /* 🔹 QUANTUM HARDWARE PRODUCTS */
  const electronics = [
    {
      id: "qpu",
      name: "Quantum Processing Unit (QPU)",
      price: 2500000,
      icon: <FaMicrochip />,
    },
    {
      id: "cryogenic",
      name: "Cryogenic Refrigerator",
      price: 1800000,
      icon: <FaSnowflake />,
    },
    {
      id: "control-electronics",
      name: "Quantum Control Electronics",
      price: 750000,
      icon: <FaBroadcastTower />,
    },
    {
      id: "vacuum-chamber",
      name: "Ultra-High Vacuum Chamber",
      price: 420000,
      icon: <FaCube />,
    },
    {
      id: "superconducting-qubits",
      name: "Superconducting Qubits",
      price: 900000,
      icon: <FaAtom />,
    },
    {
      id: "trapped-ion",
      name: "Trapped Ion Qubits",
      price: 1200000,
      icon: <FaAtom />,
    },
    {
      id: "photonic-qubits",
      name: "Photonic Qubits",
      price: 680000,
      icon: <FaLightbulb />,
    },
    {
      id: "spin-qubits",
      name: "Spin Qubits",
      price: 540000,
      icon: <FaWaveSquare />,
    },
    {
      id: "laser-system",
      name: "Precision Laser System",
      price: 360000,
      icon: <FaLightbulb />,
    },
    {
      id: "microwave-generator",
      name: "Microwave Signal Generator",
      price: 290000,
      icon: <FaWaveSquare />,
    },
    {
      id: "magnetic-shield",
      name: "Magnetic Shielding Unit",
      price: 210000,
      icon: <FaShieldAlt />,
    },
    {
      id: "classical-control",
      name: "Classical Control Computer",
      price: 500000,
      icon: <FaServer />,
    },
    {
      id: "qrng",
      name: "Quantum Random Number Generator",
      price: 175000,
      icon: <FaRandom />,
    },
    {
      id: "qkd",
      name: "Quantum Key Distribution Module",
      price: 650000,
      icon: <FaLock />,
    },
  ];

  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [message, setMessage] = useState("");

  /* 🔥 FETCH ORDERS ON LOGIN / RELOAD */
  useEffect(() => {
    const fetchOrders = async () => {
      if (!token) return;

      try {
        const { data } = await axios.get(`${API_ORDERS}/my`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const formatted = data.flatMap((order) =>
          order.items.map((item) => ({
            ...item,
            shippingAddress: order.shippingAddress,
          }))
        );

        setCart(formatted);
      } catch (err) {
        console.error(err);
      }
    };

    fetchOrders();
  }, [token]);

  const placeOrder = async (item) => {
    if (!token) return setMessage("Please login first");

    const street = prompt("Street:");
    const city = prompt("City:");
    const phone = prompt("Phone:");

    if (!street || !city || !phone) return;

    const qty = quantities[item.id] || 1;

    try {
      const payload = {
        items: [{ name: item.name, price: item.price, quantity: qty }],
        totalAmount: item.price * qty,
        shippingAddress: { street, city, phone },
      };

      await axios.post(API_ORDERS, payload, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setMessage("Order placed successfully ✔");

      const { data } = await axios.get(`${API_ORDERS}/my`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setCart(
        data.flatMap((order) =>
          order.items.map((i) => ({
            ...i,
            shippingAddress: order.shippingAddress,
          }))
        )
      );
    } catch {
      setMessage("Order failed");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="max-w-7xl mx-auto p-10">
        <h1 className="text-4xl font-bold mb-10">
          Quantum Hardware Marketplace
        </h1>

        {message && <p className="mb-6 text-green-400">{message}</p>}

        {/* PRODUCTS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {electronics.map((item) => (
            <div
              key={item.id}
              className="bg-white/10 p-6 rounded-xl text-center hover:bg-white/15 transition"
            >
              <div className="text-4xl mb-4 text-indigo-400">
                {item.icon}
              </div>
              <h3 className="font-semibold mb-1">{item.name}</h3>
              <p className="mb-3 text-indigo-300">₹{item.price}</p>

              <input
                type="number"
                min="1"
                className="mt-2 w-16 text-black text-center rounded"
                value={quantities[item.id] || 1}
                onChange={(e) =>
                  setQuantities({
                    ...quantities,
                    [item.id]: e.target.value,
                  })
                }
              />

              <button
                onClick={() => placeOrder(item)}
                className="block mt-4 w-full bg-indigo-600 py-2 rounded hover:bg-indigo-700"
              >
                Order
              </button>
            </div>
          ))}
        </div>

        {/* ORDERS */}
        <h2 className="text-2xl font-bold mt-16 mb-4">My Orders</h2>

        {cart.length === 0 ? (
          <p>No orders yet</p>
        ) : (
          cart.map((o, i) => (
            <div key={i} className="bg-white/10 p-4 rounded mb-3">
              {o.name} × {o.quantity} — ₹{o.price * o.quantity}
              <p className="text-sm opacity-70">
                {o.shippingAddress.street},{" "}
                {o.shippingAddress.city} | 📞{" "}
                {o.shippingAddress.phone}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
