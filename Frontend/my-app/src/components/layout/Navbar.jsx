import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import Logout from "../common/Logout";
import { useUser } from "@clerk/clerk-react";

import { FiSearch } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { GrCart } from "react-icons/gr";
import { GoPerson } from "react-icons/go";
import { FiShoppingBag } from "react-icons/fi";
import { ImCancelCircle } from "react-icons/im";
import { FaRegStar } from "react-icons/fa";

export default function Navbar() {
  const [show, setShow] = useState(false);

  const { isSignedIn, user } = useUser();
  console.log("user == ", user);
  return (
    <div className="">
      <div className="bg-black w-full text-white flex items-center justify-center p-2">
        <p className="text-sm flex-1 text-center">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <span>
            <Link to="/shop" className="font-bold underline ml-2">
              ShopNow
            </Link>
          </span>
        </p>
        <select name="language" id="language" className="bg-black mr-30">
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
        </select>
      </div>

      <div>
        <nav className="flex items-center justify-around mt-5 p-3 w-full border-b border-slate-300">
          <h1 className="text-2xl font-bold">Exclusive</h1>
          <div className="flex gap-12">
            <NavLink
              to="/home"
              className={({ isActive }) => (isActive ? "border-b" : "")}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "border-b" : "")}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "border-b" : "")}
            >
              Contact
            </NavLink>
            <NavLink
              to="/"
              onClick={(e) => {
                if (isSignedIn) e.preventDefault();
              }}
              className={({ isActive }) =>
                isSignedIn
                  ? "text-gray-400 cursor-not-allowed"
                  : isActive
                    ? "border-b"
                    : ""
              }
            >
              Sign Up
            </NavLink>
          </div>
          <div className="flex gap-6 relative">
            <div className="flex items-center rounded bg-[#f0eeee]">
              <input
                type="text"
                placeholder="What are you looking for?"
                className=" text-sm py-2 px-4 w-full outline-none"
              />
              <div className="pr-4">
                <FiSearch className="h-6 w-6" />
              </div>
            </div>

            {isSignedIn && (
              <div className="flex items-center gap-6">
                <Link to="/wishlist">
                  <Badge badgeContent={1} color="error">
                    <IoMdHeartEmpty className="w-7 h-7" />
                  </Badge>
                </Link>
                <Link to="/cart">
                  <Badge badgeContent={1} color="error">
                    <GrCart className="w-7 h-7" />
                  </Badge>
                </Link>
                <div>
                  <button
                    className="hover:bg-orange hover:rounded-full hover:text-white p-1 transition-all duration-300 cursor-pointer"
                    onClick={() => setShow(() => !show)}
                  >
                    <GoPerson className="w-8 h-8" />
                  </button>
                  {show && (
                    <div className="absolute bg-black/45 backdrop-blur-lg text-white w-58 -right-5 top-12 flex flex-col p-4 space-y-4 rounded z-50">
                      <Link to="/account" className="flex items-center gap-3">
                        <GoPerson className="w-6 h-6" /> Manage My Account
                      </Link>
                      <Link to="/cart" className="flex items-center gap-3">
                        <FiShoppingBag className="w-6 h-6" /> My Order
                      </Link>
                      <Link to="/" className="flex items-center gap-3">
                        <ImCancelCircle className="w-6 h-6" /> My Cancellations
                      </Link>
                      <Link to="/" className="flex items-center gap-3">
                        <FaRegStar className="w-6 h-6" /> My Reviews
                      </Link>
                      <Logout />
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}
