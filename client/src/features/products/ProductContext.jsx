import { createContext, useContext, useState, useEffect } from "react";
import api from "../../api/api";

const ProductContext = createContext();

export const useProductContext = () => useContext(ProductContext);
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await api.get("/products");
      setProducts(res?.data?.products);
    } catch (error) {
      console.error("Fetch products error:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchProductById = async (id) => {
    try {
      setLoading(true);
      const res = await api.get(`/products/${id}`);
      setProducts(res?.data?.product);
    } catch (error) {
      console.error("Fetch product by ID error:", error);
    } finally {
      setLoading(false);
    }
  };

  const createProduct = async (data) => {
    try {
      await api.post("/products", data);
      fetchProducts();
    } catch (error) {
      console.error("Create product error:", error);
    }
  };

  const updateProduct = async (id, data) => {
    try {
      await api.put(`/products/${id}`, data);
      fetchProducts();
    } catch (error) {
      console.error("Update product error:", error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await api.delete(`/products/${id}`);
      fetchProducts();
    } catch (error) {
      console.error("Delete product error:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        fetchProductById,
        createProduct,
        updateProduct,
        deleteProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
