import React, { useEffect, useState } from "react";

function Checkout() {
  const [orders, setOrders] = useState([]);
  const username = localStorage.getItem("username");

  useEffect(() => {
    fetch(`http://localhost:5500/api/orders/${username}`)
      .then(res => res.json())
      .then(data => setOrders(data))
      .catch(err => console.error(err));
  }, [username]);

  return (
    <div style={styles.container}>
      <h2>Your Orders 📦</h2>

      {orders.length === 0 && <p>No orders yet</p>}

      {orders.map(order => (
        <div key={order._id} style={styles.card}>
          <p><b>Order ID:</b> {order._id}</p>
          {order.items.map((item, i) => (
            <p key={i}>{item.name} × {item.quantity}</p>
          ))}
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: { maxWidth: "600px", margin: "40px auto" },
  card: {
    border: "1px solid #ccc",
    padding: "15px",
    marginBottom: "15px",
    borderRadius: "8px"
  }
};

export default Checkout;
