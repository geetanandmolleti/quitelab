import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">

      {/* ===== BACKGROUND VIDEO ===== */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/src/assets/login page video.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* ===== CONTENT ===== */}
      <div className="relative z-10">
        <Navbar />

        <div className="min-h-[calc(100vh-64px)] flex items-center justify-center px-6">
          <div className="text-center max-w-4xl text-white">

            {/* Brand */}
            <p className="uppercase tracking-widest text-indigo-400 text-xs mb-4">
              QuietLabs • Engineering Excellence
            </p>

            {/* Heading */}
            <h1 className="font-bold tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Technology That Works <br className="hidden sm:block" />
              <span className="text-indigo-400">For You</span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-white/85 text-sm sm:text-base md:text-lg leading-relaxed">
              QuietLabs specializes in software engineering, embedded systems,
              IoT solutions, and industry-driven training programs. We build
              real-world skills, scalable platforms, and future-ready engineers.
            </p>

            {/* Highlights */}
            <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-white/80">
              <span className="px-4 py-2 border border-white/20 rounded-full bg-white/5 backdrop-blur">
                Software Engineering
              </span>
              <span className="px-4 py-2 border border-white/20 rounded-full bg-white/5 backdrop-blur">
                Embedded & IoT
              </span>
              <span className="px-4 py-2 border border-white/20 rounded-full bg-white/5 backdrop-blur">
                Industry Training
              </span>
              <span className="px-4 py-2 border border-white/20 rounded-full bg-white/5 backdrop-blur">
                Cloud & Data Platforms
              </span>
            </div>

            {/* CTA */}
            <button
              onClick={() => navigate("/store")}
              className="
                mt-14 px-12 py-4
                rounded-full font-medium text-base

                text-white
                border border-white/40
                bg-white/10
                backdrop-blur-md

                transition-all duration-300 ease-out
                hover:bg-white/20
                hover:border-white/70
                hover:scale-[1.02]
              "
            >
              Explore Products & Labs
            </button>

            {/* Trust line */}
            <p className="mt-8 text-xs text-white/60">
              Trusted by students, professionals, and institutions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
