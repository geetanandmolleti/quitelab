import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaLaptopCode, FaMicrochip } from "react-icons/fa";

function Store() {
  const navigate = useNavigate();

  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/15/f2/e7/15f2e75dd7d4b637981d09f1d80367ed.jpg')" }}>

      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10">
        <Navbar />

        <div className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4 pt-24">
          <div className="text-center text-white max-w-5xl w-full">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-extrabold tracking-tight
                         text-4xl sm:text-5xl md:text-6xl mb-12"
            >
              Store
            </motion.h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate("/contact")}
                className="cursor-pointer border border-white/20
                           rounded-2xl p-8 backdrop-blur-md bg-white/10
                           hover:bg-white/20 transition"
              >
                <FaLaptopCode className="text-5xl mx-auto mb-4 text-blue-400" />
                <h2 className="text-2xl font-semibold mb-2">Software</h2>
                <p className="text-white/80">
                  Contact us for modern, scalable software solutions
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate("/hardware")}
                className="cursor-pointer border border-white/20
                           rounded-2xl p-8 backdrop-blur-md bg-white/10
                           hover:bg-white/20 transition"
              >
                <FaMicrochip className="text-5xl mx-auto mb-4 text-green-400" />
                <h2 className="text-2xl font-semibold mb-2">Hardware</h2>
                <p className="text-white/80">
                  Explore reliable and powerful hardware products
                </p>
              </motion.div>
            </div>
          </div> </div>
      </div> </div>
  );
}

export default Store;

