import React from "react";
import { Link } from "react-router-dom";
import Qrcode from "../../assets/icon/Qrcode.png";
import gpay from "../../assets/icon/g-pay.png";
import appstore from "../../assets/icon/appstore.png";

import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { LuSendHorizontal } from "react-icons/lu";
import { FaRegCopyright } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="mt-20 bg-black text-white w-full">
      <div className="pt-16 px-4 grid grid-cols-5 gap-20 pb-12 max-w-360 mx-auto">
        <div>
          <h2 className="font-bold text-2xl">Exclusive</h2>
          <p className="text-xl font-bold my-4">Subscribe</p>
          <p>Get 10% off your first order</p>
          <div className="flex items-center rounded border mt-4">
            <input
              type="email"
              placeholder="Enter your Email"
              className="py-3 px-4 outline-none w-full"
            />
            <div className="pr-4">
              <LuSendHorizontal className="h-6 w-6" />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-6">Support</h2>
          <p>2436 Main Street Springfield, IL 62704 United States</p>
          <p className="my-4">exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        <div className="flex flex-col">
          <h2 className="text-xl font-bold mb-6">Account</h2>
          <Link to="/account">My Account</Link>
          <p className="my-3">
            <Link to="/login">Login</Link> / <Link to="/">Register</Link>
          </p>
          <Link to="/cart">Cart</Link>
          <Link to="/wishlist" className="my-3">
            Wishlist
          </Link>
          <Link to="/shop">Shop</Link>
        </div>

        <div className="flex flex-col">
          <h2 className="text-xl font-bold mb-6">Quick Link</h2>
          <Link to="/home">Privacy Policy</Link>
          <Link to="/home" className="my-4">
            Terms Of Use
          </Link>
          <Link to="/home" className="mb-4">
            FAQ
          </Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-6">Download App</h2>
          <small className="text-slate-400">
            Save $3 with App New User Only
          </small>
          <div className="mt-2 grid grid-flow-col gap-2">
            <img src={Qrcode} alt="Qrcode" className="row-span-3" />
            <img src={gpay} alt="gpay" className="col-span-9" />
            <img src={appstore} alt="appstore" className="col-span-9" />
          </div>
          <div className="flex items-center gap-8 mt-4">
            <FaFacebookF className="w-5 h-5" />
            <FiTwitter className="w-5 h-5" />
            <FaInstagram className="w-5 h-5" />
            <FaLinkedinIn className="w-5 h-5" />
          </div>
        </div>
      </div>

      <hr className="text-gray-600" />
      <p className="flex items-center gap-2 text-gray-400 justify-center p-6">
        <FaRegCopyright /> Copyright Exclusive 2026. All right reserved
      </p>
    </div>
  );
}
