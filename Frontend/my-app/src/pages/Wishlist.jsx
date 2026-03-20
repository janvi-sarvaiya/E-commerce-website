import React from "react";
import Navbar from "../components/layout/Navbar";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/product/ProductCard";
import Footer from "../components/layout/Footer";
import { Empty } from "antd";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { clearWishlist } from "../features/wishlistSlice";

import { BsTrash3 } from "react-icons/bs";

export default function Wishlist() {
  const dispatch = useDispatch();
  const wishlistProducts = useSelector(
    (state) => state.wishlist.wishlistProducts,
  );

  const handleMoveAllToBag = (e) => {
    e.preventDefault();
    if (wishlistProducts.length == 0) {
      toast("Please Select a Items !");
      return;
    }
    dispatch(clearWishlist());
    toast.success("Clear Wishlist Successfully !");
  };
  return (
    <>
      <Navbar />
      <div className="max-w-390 mx-auto px-10 mt-45">
        <div className="flex items-center justify-between">
          <h1 className="text-xl">Wishlist ( {wishlistProducts?.length} )</h1>
          <button
            onClick={handleMoveAllToBag}
            className={`flex items-center gap-2 border border-gray-400 rounded py-4 px-10  ${wishlistProducts.length == 0 ? "cursor-not-allowed" : "cursor-pointer"}`}
          >
            Delete All <BsTrash3 size={22} />
          </button>
        </div>

        {wishlistProducts.length == 0 ? (
          <>
            <Empty
              className="flex flex-col items-center mt-15"
              description="Your Wishlist is Empty !"
              image="https://cdni.iconscout.com/illustration/premium/thumb/empty-favorites-illustration-svg-download-png-13391223.png"
              imageStyle={{
                height: "180px",
              }}
            />
            <p className="text-center text-gray-400 text-sm mt-2">
              Tab Heart Button to Start Saving Your Favorite Items.{" "}
              <Link to="/shop" className="underline font-bold">
                Shop Now
              </Link>
            </p>
          </>
        ) : (
          <div className="mt-15 grid grid-cols-5 gap-8">
            {wishlistProducts?.map((product) => (
              <ProductCard
                product={product}
                key={product.product_id}
                isWishlistPage={true}
              />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
