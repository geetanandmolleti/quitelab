import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import {
  FaGlobe,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  return (
    <div
      className="relative min-h-screen text-white overflow-hidden bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/1200x/b1/58/82/b158825b403e97a91f9704e8091d5ef3.jpg')",
      }}>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-900/85 to-slate-950/95 backdrop-blur-sm -z-10"></div>

      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 w-[700px] h-[700px] bg-indigo-500/25 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-purple-500/25 rounded-full blur-[140px] animate-pulse delay-1000" />
      </div>

      <Navbar />
      <section className="px-6 pt-32 pb-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl" >
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Contact Quitelabs
          </h1>

          <p className="mt-6 text-lg text-slate-300 leading-relaxed">
            Whether you’re an organization, institution, or individual,
            we’re here to collaborate, train, and build impactful solutions.
          </p>
        </motion.div>
      </section>
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }} >
            <h2 className="text-3xl font-semibold mb-6 text-white">
              Get in Touch
            </h2>

            <p className="text-slate-300 max-w-md leading-relaxed">
              Reach out to us for training programs, industry collaborations,
              proof-of-concept development, or general inquiries.
            </p>

            <div className="mt-12 space-y-8">
              <ContactItem icon={<FaGlobe />} label="Website" value="www.quietlabs.com" />
              <ContactItem icon={<FaEnvelope />} label="Email" value="contact@quietlabs.com" />
              <ContactItem icon={<FaPhoneAlt />} label="Phone" value="+91 92916 26666" />
              <ContactItem icon={<FaMapMarkerAlt />} label="Location" value="India" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 shadow-[0_30px_90px_rgba(0,0,0,0.7)] hover:scale-[1.02] transition" >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/10 pointer-events-none"></div>

            <h3 className="text-xl font-medium mb-4 text-white">
              Why QuiteLabs?
            </h3>

            <p className="text-slate-300 leading-relaxed">
              QuietLabs focuses on industry-aligned education, hands-on
              engineering exposure, and real-world systems. Our approach
              ensures measurable skill development and professional readiness.
            </p>

            <ul className="mt-6 space-y-3 text-slate-300 text-sm">
              <li>• Corporate & institutional training</li>
              <li>• Embedded systems & IoT labs</li>
              <li>• Networking & cloud technologies</li>
              <li>• Data-driven platforms & analytics</li>
            </ul>
          </motion.div>

        </div>
      </section>
      <section className="px-6 py-12 border-t border-white/10 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} QuiteLabs. All rights reserved.
      </section>
    </div>
  );
}

function ContactItem({ icon, label, value }) {
  return (
    <div className="flex items-start gap-4 group">
      <div className="text-indigo-400 text-lg mt-1 group-hover:scale-125 group-hover:text-purple-400 transition">
        {icon}
      </div>
      <div>
        <p className="text-sm text-slate-400">{label}</p>
        <p className="text-base group-hover:text-white transition">{value}</p>
      </div>
    </div>
  );
}