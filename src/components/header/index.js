import React from "react";
import logo from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";
import avatar from "../../assets/images/avatar.png"

const Header = () => {
  return (
    <div className="px-6 py-2 header flex justify-between items-center bg-[#0f674d]">
      <NavLink className={"flex justify-start items-center"} to="/">
        <img src={logo} alt="logo" className="w-[60px] mr-1" />
        <span className="text-xl font-bold text-[#fff] uppercase">toyniverse</span>
      </NavLink>
      <div className="w-full justify-end items-center flex space-x-10">
        <NavLink to={'/'} className={"text-white"}>
            Home
        </NavLink>
        <NavLink to={'/'} className={"text-white"}>
            All Toys
        </NavLink>
        <NavLink to={'/'} className={"text-white"}>
            Blogs
        </NavLink>
        <NavLink to={'/'} className={"text-white"}>
            My Toys
        </NavLink>
        <NavLink to={'/'} className={"text-white"}>
            Add a Toy
        </NavLink>
        <Link>
        <img src={avatar} alt="avatar" className="w-[40px] h-[40px] rounded-full bg-white p-1" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
