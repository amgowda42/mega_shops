import { RiDeleteBin6Line } from "react-icons/ri";
import { LiaEditSolid } from "react-icons/lia";
import { FaEye } from "react-icons/fa";
import { useProductContext } from "./ProductContext";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const { updateProduct, deleteProduct } = useProductContext();

  const [isEditModelOpen, setIsEditModelOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const openEditModal = () => {
    reset({
      product: product?.name || "",
      price: product?.price || "",
      quantity: product?.quantity || "",
    });
    setIsEditModelOpen(true);
  };

  const handleEditProduct = (data) => {
    const updatedProduct = {
      name: data.product,
      price: data.price,
      quantity: data.quantity,
    };

    updateProduct(product?._id, updatedProduct);
    setIsEditModelOpen(false);
  };

  const handleDeleteProduct = () => {
    deleteProduct(product?._id);
  };

  const handleViewProduct = () => {
    navigate(`/main/products/${product?._id}`);
  };

  return (
    <div className="p-4 space-y-2 rounded-xl shadow bg-white hover:shadow-md transition">
      <div className="flex text-lg font-semibold text-gray-900 justify-between items-center">
        <span>🛍️ Name: {product?.name}</span>
        <div className="flex items-center space-x-2">
          <FaEye className="cursor-pointer" onClick={handleViewProduct} />
          <LiaEditSolid onClick={openEditModal} className="cursor-pointer" />
          <RiDeleteBin6Line
            onClick={handleDeleteProduct}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="text-base text-green-600">
        💰 Price: ₹{product?.price}
      </div>
      <div className="text-base text-blue-600">
        📦 Quantity: {product?.quantity}
      </div>

      {isEditModelOpen && (
        <div className="fixed inset-0 bg-white flex justify-center items-center z-20">
          <div className="bg-white rounded-lg p-6 w-full max-w-md relative shadow-lg">
            <button
              onClick={() => setIsEditModelOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-2xl cursor-pointer"
            >
              &times;
            </button>
            <h3 className="text-lg font-semibold mb-4">Edit Product</h3>
            <form onSubmit={handleSubmit(handleEditProduct)}>
              <label htmlFor="product" className="block mb-2 font-medium">
                Product Name
              </label>
              <input
                type="text"
                id="product"
                {...register("product", {
                  required: "Product name is required",
                })}
                className="border border-gray-300 rounded p-2 w-full mb-2"
              />
              {errors.product && (
                <p className="text-red-500 text-sm">{errors.product.message}</p>
              )}

              <label htmlFor="price" className="block mb-2 font-medium mt-3">
                Price
              </label>
              <input
                type="number"
                id="price"
                {...register("price", {
                  required: "Price is required",
                  min: { value: 0, message: "Price must be at least 0" },
                })}
                className="border border-gray-300 rounded p-2 w-full mb-2"
              />
              {errors.price && (
                <p className="text-red-500 text-sm">{errors.price.message}</p>
              )}

              <label htmlFor="quantity" className="block mb-2 font-medium mt-3">
                Quantity
              </label>
              <input
                type="number"
                id="quantity"
                {...register("quantity", {
                  required: "Quantity is required",
                  min: { value: 0, message: "Quantity must be at least 0" },
                })}
                className="border border-gray-300 rounded p-2 w-full mb-4"
              />
              {errors.quantity && (
                <p className="text-red-500 text-sm">
                  {errors.quantity.message}
                </p>
              )}

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

export default ProductCard;
