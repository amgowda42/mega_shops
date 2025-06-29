import { useState } from "react";
import ProductCard from "./ProductCard";
import { useProductContext } from "./ProductContext";
import ProductCardShimmer from "../../components/ui/shimmers/ProductCardShimmer";
const ProductList = () => {
  const { products, loading, createProduct } = useProductContext();
  const shimmerArray = new Array(4).fill(null);
  const [isAddModelOpen, setIsAddModelOpen] = useState(false);

  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = new FormData(form);

    const data = {
      name: formData.get("product"),
      price: formData.get("price"),
      quantity: formData.get("quantity"),
    };
    createProduct(data);
    form.reset();
    setIsAddModelOpen(false);
  };

  return (
    <div className="relative">
      <div className="w-2xl mx-auto text-center space-y-3">
        <h4 className="text-red-500 text-2xl font-medium">Products</h4>
        <h6>List of Products Available in different categories</h6>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 cursor-pointer"
          onClick={() => setIsAddModelOpen(true)}
        >
          Add Product
        </button>
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

      {isAddModelOpen && (
        <div className="fixed inset-0 bg-white flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 w-full max-w-md relative shadow-lg z-20">
            <button
              onClick={() => setIsAddModelOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-2xl cursor-pointer"
            >
              &times;
            </button>
            <h3 className="text-lg font-semibold mb-4">Add Product</h3>
            <form onSubmit={handleAddProduct}>
              <label htmlFor="product" className="block mb-2 font-medium">
                Product Name
              </label>
              <input
                type="text"
                id="product"
                name="product"
                className="border border-gray-300 rounded p-2 w-full mb-4"
                required
              />
              <label htmlFor="price" className="block mb-2 font-medium">
                Price
              </label>
              <input
                type="number"
                id="price"
                name="price"
                className="border border-gray-300 rounded p-2 w-full mb-4"
                required
              />
              <label htmlFor="quantity" className="block mb-2 font-medium">
                Quantity
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                className="border border-gray-300 rounded p-2 w-full mb-4"
                required
              />
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded cursor-pointer"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
