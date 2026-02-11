import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/login";
import Home from "./pages/home";
import Store from "./pages/store";
import Contact from "./pages/contact";
import Hardware from "./pages/hardware";
import Navbar from "./components/Navbar.jsx";

function App() {
  const [auth, setAuth] = useState(!!localStorage.getItem("token")); // check if token exists

  const ProtectedRoute = ({ children }) => {
    return auth ? children : <Navigate to="/" />;
  };

  return (
    <Routes>
      <Route path="/" element={<Login setAuth={setAuth} />} />
      <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
      <Route path="/store" element={<ProtectedRoute><Store /></ProtectedRoute>} />
      <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
      <Route path="/hardware" element={<ProtectedRoute><Hardware /></ProtectedRoute>} />
    </Routes>
  );
}

export default App;
