import { createContext, useContext, useState, useEffect } from "react";
import api from "../../api/api";

const ShopContext = createContext();

export const useShopContext = () => {
  useContext(ShopContext);
};

export const ShopProvider = ({ children }) => {
  const [shops, setShops] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchShops = async () => {
    try {
      setLoading(true);
      const res = await api.get("/shops");
      setShops(res?.data?.shops);
    } catch (error) {
      console.error("Fetch shops error:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchShopById = async (id) => {
    try {
      setLoading(true);
      const res = await api.get(`/shops/${id}`);
      setShops(res?.data?.shop);
    } catch (error) {
      console.error("Fetch shop by ID error:", error);
    } finally {
      setLoading(false);
    }
  };

  const createShop = async (data) => {
    try {
      await api.post("/shops", data);
      fetchShops();
    } catch (error) {
      console.error("Create shop error:", error);
    }
  };

  const updateShop = async (id, data) => {
    try {
      await api.put(`/shops/${id}`, data);
      fetchShops();
    } catch (error) {
      console.error("Update shop error:", error);
    }
  };

  const deleteShop = async (id) => {
    try {
      await api.delete(`/shops/${id}`);
      fetchShops();
    } catch (error) {
      console.error("Delete shop error:", error);
    }
  };

  useEffect(() => {
    fetchShops();
  }, []);

  return (
    <ShopContext.Provider
      value={{
        shops,
        loading,
        fetchShopById,
        createShop,
        updateShop,
        deleteShop,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
