import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={styles.nav}
    >
      {/* Logo */}
      <motion.h2
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={styles.logo}
        onClick={() => navigate("/home")}>
        Quitelabs
      </motion.h2>

      {/* Links */}
      <div style={styles.links}>
        {[
          { label: "Home", path: "/home" },
          { label: "Store", path: "/store" },
          { label: "Contact", path: "/contact" }
        ].map(({ label, path }) => (
          <motion.button
            key={path}
            onClick={() => navigate(path)}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            style={{
              ...styles.link,
              background: isActive(path)
                ? "rgba(255,255,255,0.18)"
                : "transparent"
            }} >
            {label}
          </motion.button>
        ))}

        {/* Logout */}
        <motion.button
          onClick={() => navigate("/")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ ...styles.link, ...styles.logout }}
        >
          Logout
        </motion.button>
      </div>
    </motion.nav>
  );
}

const styles = {
  nav: {
    position: "sticky",
    top: 0,
    zIndex: 9999,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 64px",
    background: "rgba(0,0,0,0.6)",
    backdropFilter: "blur(14px)",
    color: "#fff",
    boxShadow: "0 12px 30px rgba(0,0,0,0.45)"
  },

  logo: {
    fontSize: "28px",
    fontWeight: "800",
    cursor: "pointer",
    letterSpacing: "0.6px"
  },

  links: {
    display: "flex",
    gap: "20px",
    alignItems: "center"
  },

  link: {
    background: "transparent",
    color: "#fff",
    border: "none",
    padding: "10px 18px",
    cursor: "pointer",
    fontSize: "16px",
    borderRadius: "10px",
    transition: "background 0.2s ease"
  },

  logout: {
    background: "#fff(194, 165, 165, 0.99)",
    fontWeight: "600"
  }
};

export default Navbar;
