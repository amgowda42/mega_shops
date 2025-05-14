import React from "react";

const ShopCard = ({ name ="hhhd", location = "jgjjg", owner="fjjoko " }) => {
  return (
    <div className="border-[0.5px] border-red-500 rounded-sm p-4 shadow-sm max-w-sm bg-white">
      <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
      <p className="text-sm text-gray-600 mt-1">📍 {location}</p>
      <p className="text-sm text-gray-600 mt-1">👤 Owner: {owner}</p>
    </div>
  );
};

export default ShopCard;
