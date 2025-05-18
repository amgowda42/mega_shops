import { ProductProvider } from "./ProductContext";
import ProductList from "./ProductList";

const Product = () => {
  return (
    <>
      <ProductProvider>
        <ProductList />
      </ProductProvider>
    </>
  );
};

export default Product;
