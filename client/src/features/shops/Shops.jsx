import { ShopProvider } from "./ShopContext";
import ShopList from "./ShopList";

const Shops = () => {
  return (
    <>
      <ShopProvider>
        <ShopList />
      </ShopProvider>
    </>
  );
};

export default Shops;
