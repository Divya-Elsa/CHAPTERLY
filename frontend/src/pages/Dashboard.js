import { useEffect, useState } from "react";
import { getUsername } from "../utils/auth";

export default function Dashboard() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const user = getUsername();
    setUsername(user);
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div>
      <h1>Dashboard</h1>

      {/* 👤 Show logged-in user */}
      <h3>Welcome, {username ? username : "User"} 👋</h3>

      {/* 🔓 Logout */}
      <button onClick={logout}>Logout</button>
    </div>
  );
}