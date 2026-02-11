import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API = "http://localhost:5500/api/auth";

export default function Login() {
  const navigate = useNavigate();
  const [isRegister, setIsRegister] = useState(false);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const url = isRegister ? `${API}/register` : `${API}/login`;

      const payload = isRegister
        ? {
            username: form.username.trim(),
            email: form.email.trim(),
            password: form.password,
          }
        : {
            email: form.email.trim(),
            password: form.password,
          };

      const { data } = await axios.post(url, payload, {
        headers: { "Content-Type": "application/json" },
      });

      if (!data?.token) {
        throw new Error("Authentication failed");
      }

      localStorage.setItem("token", data.token);
      navigate("/hardware");
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Unable to authenticate. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-950 text-slate-300 flex flex-col">

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 w-[700px] h-[700px] bg-indigo-600/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-3xl animate-float delay-2000" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl animate-float delay-4000" />

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* ================= HERO ================= */}
      <section className="px-6 pt-28 pb-24 max-w-7xl mx-auto w-full">
        <h1 className="text-5xl md:text-6xl font-semibold text-white tracking-tight">
          QuietLabs
        </h1>

        <p className="mt-8 max-w-3xl text-lg text-slate-400 leading-relaxed">
          Building industry-ready engineers through hands-on training,
          real-world problem solving, and cutting-edge technology platforms.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          <Stat value="10+" title="Years Experience" />
          <Stat value="100+" title="Training Programs" />
          <Stat value="50+" title="Industry Partners" />
          <Stat value="5K+" title="Engineers Trained" />
        </div>
      </section>

      {/* ================= OFFERINGS ================= */}
      <section className="px-6 py-24 max-w-7xl mx-auto w-full">
        <h2 className="text-3xl font-semibold text-white mb-14">
          What We Do
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          <Card
            title="Engineering Training"
            text="Structured programs with labs, assessments, and real-world use cases."
          />
          <Card
            title="Embedded & IoT Labs"
            text="Hands-on exposure to microcontrollers, sensors, and real-time systems."
          />
          <Card
            title="Industry Solutions"
            text="Custom software solutions and proof-of-concept development."
          />
        </div>
      </section>

      {/* ================= PHILOSOPHY ================= */}
      <section className="px-6 py-24 bg-slate-900/40 border-y border-slate-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-semibold text-white">
              Our Philosophy
            </h2>
            <p className="mt-6 text-slate-400 leading-relaxed">
              Learning should be practical, measurable, and aligned with
              industry demands.
            </p>
          </div>

          <ul className="space-y-4 text-slate-400">
            <li>• Industry-aligned curriculum</li>
            <li>• Hands-on labs & projects</li>
            <li>• Outcome-driven assessments</li>
            <li>• Practitioner mentorship</li>
          </ul>
        </div>
      </section>

      {/* ================= LOGIN ================= */}
      <section className="bg-slate-900/80 backdrop-blur border-t border-slate-800 px-6 py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          <div>
            <h2 className="text-3xl font-semibold text-white">
              Platform Access
            </h2>
            <p className="mt-4 text-slate-400 max-w-md">
              Sign in to access training dashboards, hardware resources,
              and internal tools.
            </p>
          </div>

          <form
            onSubmit={submitHandler}
            className="bg-slate-950 border border-slate-800 rounded-2xl p-10 shadow-2xl max-w-md w-full"
          >
            <h3 className="text-xl font-medium text-white mb-8">
              {isRegister ? "Create Account" : "Sign In"}
            </h3>

            {isRegister && (
              <Input
                placeholder="Username"
                value={form.username}
                onChange={(e) =>
                  setForm({ ...form, username: e.target.value })
                }
              />
            )}

            <Input
              type="email"
              placeholder="Email address"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />

            <Input
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
            />

            {error && (
              <p className="text-red-500 text-sm mt-3">{error}</p>
            )}

            <button
              disabled={loading}
              className="w-full mt-8 bg-indigo-600 hover:bg-indigo-500 transition py-3 rounded-lg text-white font-medium disabled:opacity-50"
            >
              {loading
                ? "Authenticating..."
                : isRegister
                ? "Register"
                : "Sign In"}
            </button>

            <p
              onClick={() => setIsRegister(!isRegister)}
              className="mt-6 text-sm text-indigo-400 hover:text-indigo-300 cursor-pointer"
            >
              {isRegister
                ? "Already have an account? Sign in"
                : "New user? Create an account"}
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function Stat({ value, title }) {
  return (
    <div>
      <p className="text-3xl font-semibold text-white">{value}</p>
      <p className="text-sm text-slate-400 mt-1">{title}</p>
    </div>
  );
}

function Card({ title, text }) {
  return (
    <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8">
      <h3 className="text-lg font-medium text-white mb-3">{title}</h3>
      <p className="text-sm text-slate-400 leading-relaxed">{text}</p>
    </div>
  );
}

function Input({ type = "text", placeholder, value, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
      className="w-full mb-4 px-4 py-3 rounded-md bg-slate-800 text-white placeholder-slate-500 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />
  );
}
