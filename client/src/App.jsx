import { Route, Routes } from "react-router";
import Layout from "./Layouts/Layout";
import Product from "./features/products/Product";
import Shops from "./features/shops/Shops";
import AboutUs from "./Pages/AboutUs";
import Home from "./Pages/Home";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="shops" element={<Shops />} />
          <Route path="products" element={<Product />} />
          <Route path="aboutus" element={<AboutUs />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
