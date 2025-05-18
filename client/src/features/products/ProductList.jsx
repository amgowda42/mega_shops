import ProductCard from "./ProductCard";
import { useProductContext } from "./ProductContext";
import ProductCardShimmer from "../../components/ui/shimmers/ProductCardShimmer";
const ProductList = () => {
  const { products } = useProductContext();
  console.log(products);
  return <div>Product List</div>;
};

export default ProductList;
