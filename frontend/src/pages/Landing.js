import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Landing() {
  const navigate = useNavigate();
  const [exit, setExit] = useState(false);

  const handleStart = () => {
    setExit(true);

    // delay for animation then navigate
    setTimeout(() => {
      navigate("/dashboard");
    }, 600);
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center bg-[#0b0b0f] text-white transition-all duration-700 ${
        exit ? "-translate-y-full opacity-0" : "translate-y-0"
      }`}
    >

      {/* BIG BRAND TITLE */}
      <h1
        className="text-7xl md:text-8xl font-bold tracking-widest"
        style={{ fontFamily: "Amsterdam" }}
      >
        Chapterly
      </h1>

      {/* START BUTTON */}
      <button
        onClick={handleStart}
        className="mt-10 flex items-center gap-2 text-lg font-semibold hover:scale-110 transition"
      >
        START <span className="text-2xl">→</span>
      </button>

    </div>
  );
}

export default Landing;