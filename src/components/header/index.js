import React from "react";
import logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import avatar from "../../assets/images/avatar.png";

const Header = () => {
  return (
    <div className="header py-2 bg-[#0f674d]">
        <div className="flex justify-between items-center custom-container">
      <NavLink className={"flex justify-start items-center"} to="/">
        <img src={logo} alt="logo" className="w-[60px] mr-1" />
        <span className="text-xl font-bold text-[#fff] uppercase">
          toyniverse
        </span>
      </NavLink>
      <div className="w-full justify-end items-center flex space-x-10">
        <NavLink to={"/"} className={"text-white"}>
          Home
        </NavLink>
        <NavLink to={"/all-toys"} className={"text-white"}>
          All Toys
        </NavLink>
        <NavLink to={"/blogs"} className={"text-white"}>
          Blogs
        </NavLink>
        <NavLink to={"/my-toys"} className={"text-white"}>
          My Toys
        </NavLink>
        <NavLink to={"/add-toy"} className={"text-white"}>
          Add a Toy
        </NavLink>
        <NavLink to={'/profile'}>
          <img
            src={avatar}
            alt="avatar"
            className="w-[40px] h-[40px] rounded-full bg-white p-1"
          />
        </NavLink>
      </div>
    </div>
    </div>
  );
};

export default Header;
