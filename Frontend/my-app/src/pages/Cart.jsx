import React, { useMemo, useState } from "react";
import Navbar from "../components/layout/Navbar";
import Breadcrumbs from "../components/common/Breadcrumbs";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/layout/Footer";
import { Link, useNavigate } from "react-router-dom";

import { updateCartQuantity } from "../features/cartSlice";
import CartTable from "../components/product/CartTable";
import TotalPriceTable from "../components/common/TotalPriceTable";

export default function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [tempQuantity, setTempQuantity] = useState({});
  const cartItem = useSelector((state) => state.cart.cartItem);

  const totalPrice = useMemo(() => {
    return cartItem?.reduce((acc, cur) => acc + cur.quantity * cur.price, 0);
  }, [cartItem]);

  const handleCheckout = (e) => {
    e.preventDefault();
    if (cartItem.length == 0) {
      return;
    }
    navigate("/checkout");
  };

  const handleUpdateCart = (e) => {
    e.preventDefault();
    if (cartItem.length == 0) {
      return;
    }
    Object.keys(tempQuantity).forEach((key) => {
      const [product_id, productSize] = key.split("-");
      dispatch(
        updateCartQuantity({
          product_id: +product_id,
          quantity: +tempQuantity[key],
          productSize,
        }),
      );
    });
    console.log("update cart successfully");
    setTempQuantity({});
  };

  return (
    <>
      <Navbar />
      <div className="max-w-390 mx-auto px-10 mt-45">
        <Breadcrumbs />
        <div className="mt-12">
          <CartTable
            cartItem={cartItem}
            tempQuantity={tempQuantity}
            setTempQuantity={setTempQuantity}
          />

          <div className="mt-7 flex justify-between items-center">
            <Link
              to="/shop"
              className="border rounded py-3 px-10 border-gray-400"
            >
              Return To Shop
            </Link>
            <button
              onClick={handleUpdateCart}
              className={`border rounded py-3 px-10 border-gray-400 ${cartItem.length == 0 ? "cursor-not-allowed" : "cursor-pointer"}`}
            >
              Update Cart
            </button>
          </div>

          <div className="flex justify-between mt-18">
            <div className="space-x-3">
              <input
                type="text"
                placeholder="Coupon Code"
                className="border rounded py-2.5 px-6"
              />
              <button
                className={`bg-orange text-white py-2.5 px-10 rounded ${cartItem.length == 0 ? "cursor-not-allowed" : "cursor-pointer"}`}
              >
                Apply Coupon
              </button>
            </div>

            <div className="border w-118 p-6 rounded text-center">
              <h1 className="text-xl text-left mb-6">Cart Total</h1>
              <TotalPriceTable totalPrice={totalPrice} />
              <button
                to="/checkout"
                onClick={handleCheckout}
                className={`bg-orange text-white py-3 px-8 rounded mt-3 ${cartItem.length == 0 ? "cursor-not-allowed" : "cursor-pointer"}`}
              >
                Procees to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
