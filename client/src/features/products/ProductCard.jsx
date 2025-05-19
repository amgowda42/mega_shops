const ProductCard = ({ product }) => {
  return (
    <div className="p-4 space-y-2 rounded-xl shadow bg-white hover:shadow-md transition">
      <div className="text-lg font-semibold text-gray-900">
        🛍️ Name: {product?.name}
      </div>
      <div className="text-base text-green-600">
        💰 Price: ₹{product?.price}
      </div>
      <div className="text-base text-blue-600">
        📦 Quantity: {product?.quantity}
      </div>
    </div>
  );
};

export default ProductCard;
