import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing">
      <h1>CHAPTERLY</h1>
      <p>Your reading journey starts here</p>

      <button onClick={() => navigate("/dashboard")}>
        START
      </button>
    </div>
  );
}

export default Landing;