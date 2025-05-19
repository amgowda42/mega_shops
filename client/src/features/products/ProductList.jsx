import ProductCard from "./ProductCard";
import { useProductContext } from "./ProductContext";
import ProductCardShimmer from "../../components/ui/shimmers/ProductCardShimmer";
const ProductList = () => {
  const { products, loading } = useProductContext();
  const shimmerArray = new Array(6).fill(null);
  return (
    <div>
      <div className="w-2xl mx-auto text-center">
        <h4 className="text-red-500 text-base font-medium">Products</h4>
        <h6>List of Products Available in different categories</h6>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {loading ? (
          shimmerArray.map((_, index) => <ProductCardShimmer key={index} />)
        ) : products && Array?.isArray(products) && products?.length > 0 ? (
          products?.map((product) => (
            <ProductCard key={product?._id} product={product} />
          ))
        ) : (
          <p>Something went Wrong</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
