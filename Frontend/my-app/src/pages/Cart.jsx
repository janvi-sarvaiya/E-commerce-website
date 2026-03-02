import React, { useMemo } from "react";
import Navbar from "../components/layout/Navbar";
import Breadcrumbs from "../components/common/Breadcrumbs";
import { useSelector } from "react-redux";
import Footer from "../components/layout/Footer";
import { Link, useNavigate } from "react-router-dom";
import { Empty } from "antd";

export default function Cart() {
  const navigate = useNavigate();
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

  return (
    <>
      <Navbar />
      <div className="max-w-390 mx-auto px-10 mt-45">
        <Breadcrumbs />
        <div className="mt-12">
          <div className="grid grid-cols-4 items-center p-5 px-10 shadow-md inset-shadow-sm">
            <p>Product</p>
            <p className="text-right">Price</p>
            <p className="text-right">Quantity</p>
            <p className="text-right">Subtotal</p>
          </div>
          <div className="space-y-8 mt-8">
            {cartItem.length == 0 ? (
              <Empty
                className="flex flex-col items-center"
                description="Your Cart is Empty!"
                image="https://res.cloudinary.com/dxj264ncs/image/upload/v1772445350/emptycart_zb42tu.png"
              />
            ) : (
              cartItem?.map(({ product_id, name, price, quantity, image }) => (
                <div
                  key={product_id}
                  className="grid grid-cols-4 items-center p-4 px-10 shadow-md inset-shadow-sm"
                >
                  <p className="flex items-center gap-5">
                    <img src={image[0]?.url} alt={name} className="w-14 h-12" />
                    {name}
                  </p>
                  <p className="text-right">${price}</p>
                  <input
                    type="number"
                    value={quantity}
                    className="max-w-16 border p-2 px-3 rounded border-gray-400 place-self-end-safe"
                  />
                  <p className="text-right">${price * quantity}</p>
                </div>
              ))
            )}
          </div>

          <div className="mt-7 flex justify-between items-center">
            <Link
              to="/shop"
              className="border rounded py-3 px-10 border-gray-400"
            >
              Return To Shop
            </Link>
            <Link to="" className="border rounded py-3 px-10 border-gray-400">
              Update Cart
            </Link>
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

            <div className="border w-118 p-6 space-y-4 rounded text-center">
              <h1 className="text-xl text-left mb-6">Cart Total</h1>
              <p className="flex justify-between border-b border-b-gray-400 pb-3">
                Subtotal : <span>${totalPrice}</span>
              </p>
              <p className="flex justify-between border-b border-b-gray-400 pb-3">
                Shipping: <span>Free</span>
              </p>
              <p className="flex justify-between">
                Total : <span>${totalPrice}</span>
              </p>
              <button
                to="/checkout"
                onClick={handleCheckout}
                className={`bg-orange text-white py-3 px-8 rounded mt-1 ${cartItem.length == 0 ? "cursor-not-allowed" : "cursor-pointer"}`}
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
