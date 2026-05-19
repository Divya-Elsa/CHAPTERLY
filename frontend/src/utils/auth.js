import { jwtDecode } from "jwt-decode";

export const getUsername = () => {
  const token = localStorage.getItem("token");

  if (!token) return null;

  try {
    const decoded = jwtDecode(token);
    return decoded.sub; // 👈 this comes from backend (setSubject)
  } catch (err) {
    return null;
  }
};