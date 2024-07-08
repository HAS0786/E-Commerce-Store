import React, { useContext, useState } from "react";
import DropdownNav from "./Dropdown";
import { AuthThemes } from "../../AuthTheme/ThemeContext";
import { IoSunnyOutline } from "react-icons/io5";
import { FaOpencart } from "react-icons/fa";
import { RxMoon } from "react-icons/rx";
import { TbBrandVscode } from "react-icons/tb";
import { Link } from "react-router-dom";
import ProductPath from "../../../public/path";
import { AuthContext } from "../../AuthContext/FormContext";
import Cart from "../../CartPage/Cart";
import Toggle from "./Toggle";
const Navbar = ({ cartItems }) => {
  const { token, setToken } = useContext(AuthContext);
  const { themes, setthemes } = useContext(AuthThemes);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);


  // function for action of Button:::
  const handleLogout = () => {
    setToken("");
  };

  // Toggle themes between dark and light
  const toggleTheme = () => {
    setthemes(themes === "dark" ? "light" : "dark");
  };

  return (
    <div className="bg-red-500 p-3 relative">
      <div className="flex justify-between items-center">
        <div className="flex gap-44 items-center">
          <div className="font-semibold ml-7">
            <Link to={"/"}>
              <TbBrandVscode size={30} />
            </Link>
          </div>
          <div className="hidden md:block">
            <DropdownNav />
          </div>
        </div>

        <div className="flex gap-6 justify-center">
          {!token ? (
            <button>
              <Link to={ProductPath.Form}>Login</Link>
            </button>
          ) : (
            <button onClick={handleLogout}>Logout</button>
          )}
          <span>
            <Link
              to={ProductPath.Cart}
              className="flex items-center"
              onClick={() => setShowCart(!showCart)}
            >
              <FaOpencart size={25} />
              Cart
            </Link>
          </span>
          <span>
            <button className="p-0 mt-1" onClick={toggleTheme}>
              {themes === "dark" ? (
                // <RxMoon size={20} />
                <Toggle/>
              ) : (
                // <IoSunnyOutline size={20} />
                <Toggle/>
              )}
            </button>
          </span>
          <button
            className="md:hidden"
            onClick={() => setSidebarOpen(!isSidebarOpen)}
          >
            Products
          </button>
        </div>
      </div>
      {isSidebarOpen && (
        <div className="fixed right-11 top-40 z-30 flex flex-col bg-gray-800 text-white p-4 w-64">
          <DropdownNav isSidebar={true} />
          <button
            onClick={() => setSidebarOpen(false)}
            className="mt-4 bg-red-500 p-2 rounded"
          >
            Close Menu
          </button>
        </div>
      )}
       {/* <Cart cartItems={cartItems} /> */}
    </div>
  );
};

export default Navbar