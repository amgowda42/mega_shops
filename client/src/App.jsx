import { Route, Routes } from "react-router";
import Layout from "./Layouts/Layout";
import Product from "./features/products/Product";
import Shops from "./features/shops/Shops";
import AboutUs from "./Pages/AboutUs";
import Home from "./Pages/Home";
import { ShopProvider } from "./features/shops/ShopContext";
import { ProductProvider } from "./features/products/ProductContext";

const App = () => {
  return (
    <div className="App">
      <ShopProvider>
        <ProductProvider>
          <Routes>
            <Route path="" element={<Layout />}>
              <Route path="" element={<Home />} />
              <Route path="shops" element={<Shops />} />
              <Route path="products" element={<Product />} />
              <Route path="aboutus" element={<AboutUs />} />
            </Route>
          </Routes>
        </ProductProvider>
      </ShopProvider>
    </div>
  );
};

export default App;
