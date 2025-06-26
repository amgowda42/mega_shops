import ShopCard from "./ShopCard";
import { useShopContext } from "./ShopContext";
import ShopCardShimmer from "../../components/ui/shimmers/ShopCardShimmer";

const ShopList = () => {
  const { shops, loading } = useShopContext();
  const shimmerArray = new Array(4).fill(null);
  return (
    <div>
      <div className="w-2xl mx-auto text-center">
        <h4 className="text-red-500 text-base font-medium">Shops</h4>
        <h6>List of Shop Available in diffferent locations in india</h6>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {loading ? (
          shimmerArray.map((_, index) => <ShopCardShimmer key={index} />)
        ) : shops && Array?.isArray(shops) && shops?.length > 0 ? (
          shops?.map((shop) => <ShopCard key={shop?._id} shop={shop} />)
        ) : (
          <p>Something went Wrong</p>
        )}
      </div>
    </div>
  );
};

export default ShopList;
