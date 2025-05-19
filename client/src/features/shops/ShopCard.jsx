const ShopCard = ({ shop }) => {
  return (
    <div className="p-4 space-y-2 rounded-xl shadow bg-white hover:shadow-md transition">
      <div className="text-lg font-semibold text-gray-900">{shop?.name}</div>
      <div className="text-base text-green-600">📍 {shop?.location}</div>
      <div className="text-base text-blue-600">👤 Owner: {shop?.owner}</div>
    </div>
  );
};

export default ShopCard;
