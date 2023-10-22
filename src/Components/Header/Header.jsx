import { useState } from "react";
import { BiLogoRedbubble } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Header = () => {
  // state for hamburger
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className=" sticky top-0 left-0 bg-white flex h-16  justify-around items-center rounded-sm font-custom shadow-md">
      <div
        className="flex justify-center items-center text-blue-950 p-4 cursor-pointer"
        onClick={() => {
          location.reload();
        }}
      >
        <BiLogoRedbubble className="text-5xl text-red-600 font-bold" />
        <h1 className="text-2xl font-semibold">RedBubble</h1>
      </div>

      <div className="flex items-center gap-6 text-[1.2rem] font-semibold p-4">
        {/* Responsive menu */}
        <div className=" relative flex justify-center gap-4 items-center">
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } fixed md:relative md:top-0 md:right-0  top-20 right-0 w-80 md:w-auto h-[calc(100vh-4rem)] md:h-fit md:p-0 px-4 py-6 md:bg-inherit bg-blue-300  md:flex gap-6`}
          >
            <NavLink to={"/"}>
              <h1 className="hover:text-green-500 cursor-pointer">Home</h1>
            </NavLink>
            <h1 className="hover:text-green-500 cursor-pointer">Shop</h1>
            <h1 className="hover:text-green-500 cursor-pointer">About</h1>
            <h1 className="hover:text-green-500 cursor-pointer">Contact</h1>
            <NavLink to={"/account"}>
              <h1 className="hover:text-green-500 cursor-pointer">Account</h1>
            </NavLink>
          </div>
          {!isMenuOpen ? (
            <GiHamburgerMenu
              className="text-3xl md:hidden cursor-pointer"
              onClick={toggleMenu}
            />
          ) : (
            <AiOutlineClose
              className="text-3xl md:hidden cursor-pointer "
              onClick={toggleMenu}
            />
          )}

          <h1>
            <AiOutlineShoppingCart className="text-3xl" />
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
