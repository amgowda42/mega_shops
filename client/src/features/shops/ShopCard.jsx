const ShopCard = ({ shop }) => {
  return (
    <div className="border-[0.5px] space-y-2 border-red-500 rounded-sm p-4 shadow-sm max-w-sm bg-[#F8F8FF] font-medium">
      <h2 className="text-xl font-semibold text-red-500">{shop?.name}</h2>
      <p className="text-sm text-gray-600">📍 {shop?.location}</p>
      <p className="text-sm text-gray-600">👤 Owner: {shop?.owner}</p>
    </div>
  );
};

export default ShopCard;
