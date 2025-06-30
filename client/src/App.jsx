import { Navigate, Route, Routes, Outlet } from "react-router";
import Layout from "./Layouts/Layout";
import Product from "./features/products/Product";
import Shops from "./features/shops/Shops";
import AboutUs from "./Pages/AboutUs";
import Home from "./Pages/Home";
import LoginForm from "./features/auth/LoginForm";
import { Toaster } from "sonner";
import ProductDetailsPage from "./features/products/ProductDetailsPage";
import { ProductProvider } from "./features/products/ProductContext";

const App = () => {
  return (
    <div className="App">
      <Toaster position="bottom-right" closeButton />
      <Routes>
        <Route path="" element={<Navigate to="login" />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="main" element={<Layout />}>
          <Route path="" element={<Navigate to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="shops" element={<Shops />} />
          <Route path="products" element={<Product />} />
          <Route
            path="products"
            element={
              <ProductProvider>
                <Outlet />
              </ProductProvider>
            }
          >
            <Route index element={<Product />} />
            <Route path=":id" element={<ProductDetailsPage />} />
          </Route>
          <Route path="aboutus" element={<AboutUs />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
