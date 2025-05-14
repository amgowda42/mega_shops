import ShopCard from "./ShopCard";

const Shops = () => {
  return (
    <div>
      <div className="w-2xl mx-auto text-center">
        <h4 className="text-red-500 text-base font-medium">Shops</h4>
        <h6>List of Shop Available in diffferent locations in india</h6>
      </div>
      <ShopCard />
    </div>
  );
};

export default Shops;
