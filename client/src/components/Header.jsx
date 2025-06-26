import { NavLink } from "react-router";
import { CiPower } from "react-icons/ci";
import { useAuthContext } from "../features/auth/AuthContex";
const Header = () => {
  const { logout } = useAuthContext();

  return (
    <div className="mx-auto border-b-2 border-b-blue-400 flex items-center  p-5">
      <div className="mx-auto w-full max-w-2xs flex justify-between text-base font-medium">
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
      <CiPower
        title="Logout"
        className="text-3xl font-bold cursor-pointer"
        onClick={() => logout()}
      />
    </div>
  );
};

export default Header;
