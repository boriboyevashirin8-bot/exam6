import React from "react";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import { Badge } from "antd";
import { useSelector } from "react-redux";
import logo from "../../assets/img/logo.svg";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa6";
import { IoBagRemoveSharp } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { RiLoginBoxFill } from "react-icons/ri";



const Header = () => {
  const { data } = useSelector((state) => state.cartSlice);
  return (
    <header className="w-full shadow-sm ">
      <div className="bg-gray-100 text-sm py-2 px-4 hidden md:flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <FaLocationDot />
            <p>
              Город: <span className="font-semibold">Ташкент</span>
            </p>
          </div>
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-1">
              <FaHandshake className="text-[20px]" />
              <p className="hidden sm:block">Продавайтена Zon.uz</p>
            </div>
            <div className="flex items-center gap-1">
              <IoBagRemoveSharp className="text-[20px]" />
              <p className="hidden sm:block">Покупать как юрлицо</p>
            </div>
            <div className="flex items-center gap-1">
              <p className="hidden sm:block">Помощь</p>
              <FaChevronRight className="text-[15px]" />
            </div>
            <p className="hidden sm:block">Контакты</p>
          </div>
        </div>

        <ul className="flex items-center gap-4">
          <li className="flex items-center gap-1">
            <FaPhoneAlt />
            <a className="font-bold "> +998-78 555-35-00</a>
          </li>
        </ul>
      </div>
      <div className="w-[90%] m-auto flex item-center justify-between gap-5 py-4">
        <img src={logo} alt="Logo" width={150} />
        <div className="flex-1 relative w-50 md:w-1/2 text-center">
          <input
            type="text"
            placeholder="Найти товары"
            className="w-full border rounded-[5px] px-4 py-2 pr-10 text-sm focus:outline-none"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-200 p-2 rounded hover:bg-gray-300 transition">
            <FaMagnifyingGlass className="text-gray-600" />
          </button>
        </div>

        <div className="flex items-center gap-4">
          <Link to={"/"}><FaHome  className="text-[25px]" /></Link>
          <RiLoginBoxFill  className="text-[25px]" />
        </div>
        <div className="flex items-center gap-4">
          <Link to={"/like"}>
            <FaRegHeart className="text-[25px]" />
          </Link>
          <Badge count={data.length}>
            <Link to={"/cart"}>
              <LuShoppingBag className="text-[25px]" />
            </Link>
          </Badge>
          <button className=" w-20 h-8 bg-blue-400 rounded-[5px] ">
            Войти
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
