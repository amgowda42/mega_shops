import ShopCard from "./ShopCard";
import { useShopContext } from "./ShopContext";

const Shops = () => {
  const { shops } = useShopContext();

  return (
    <div>
      <div className="w-2xl mx-auto text-center">
        <h4 className="text-red-500 text-base font-medium">Shops</h4>
        <h6>List of Shop Available in diffferent locations in india</h6>
      </div>
      {shops && Array?.isArray(shops) && shops?.length > 0 ? (
        shops?.map((shop) => <ShopCard key={shop?._id} shop={shop} />)
      ) : (
        <p>Something went Wrong</p>
      )}
    </div>
  );
};

export default Shops;
