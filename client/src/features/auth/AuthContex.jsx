import { createContext, useContext, useState } from "react";
import api from "../../api/api";
import { useNavigate } from "react-router";
import { toast } from "sonner";

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (credentials) => {
    try {
      setLoading(true);
      setError(null);
      const res = await api.post("/auth/login", credentials);
      if (res?.data?.success) {
        navigate("/main/home");
        toast.success("Login successful");
      } else {
        setError(res?.data?.message);
        toast.error(res?.data?.message || "Login failed");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Login failed");
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await api.post("/auth/logout");
      if (res?.data?.success) {
        navigate("/login");
        toast.success("Logout successful");
      }
    } catch (err) {
      console.error("Logout error:", err);
      setError("Logout failed");
      toast.error("Logout failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        loading,
        error,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
