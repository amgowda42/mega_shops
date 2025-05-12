import { Route, Routes } from "react-router";
import Layout from "./Layouts/Layout";
import Product from "./features/products/Product";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="products" element={<Product />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
