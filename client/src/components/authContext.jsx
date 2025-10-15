// src/components/authContext.jsx
import { createContext, useState } from "react";
import api from "../api/axios.js";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Signup
  const signup = async (data) => {
    try {
      const res = await api.post("/auth/signup", data, { withCredentials: true });
      return res.data; // backend returns user info
    } catch (err) {
      throw err;
    }
  };

  // Login
  const login = async (credentials) => {
    try {
      const res = await api.post("/auth/login", credentials, { withCredentials: true });
      // backend returns user info
      if (res.data?.user) {
        setUser({
          id: res.data.user._id,
          userName: res.data.user.userName,
          email: res.data.user.email,
        });
      }
      return res.data;
    } catch (err) {
      throw err;
    }
  };

  // Logout
  const logout = async () => {
    try {
      await api.post("/auth/logout", {}, { withCredentials: true });
      setUser(null);
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
}
