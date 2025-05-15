import { NavLink } from "react-router";
const Header = () => {
  return (
    <div className="mx-auto border-b-2 border-b-blue-400 p-5">
      <div className="mx-auto max-w-2xs flex justify-between text-base font-medium">
        <NavLink
          to=""
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-black"
          }
        >
          Home
        </NavLink>  
        <NavLink
          to="shops"
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-black"
          }
        >
          Shops
        </NavLink>
        <NavLink
          to="products"
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-black"
          }
        >
          Products
        </NavLink>
        <NavLink
          to="aboutus"
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-black"
          }
        >
          About Us
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
