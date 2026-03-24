import React, { memo, useEffect } from "react";
import Rating from "@mui/material/Rating";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, removeToWishlist } from "../../features/wishlistSlice";
import { useUser } from "@clerk/clerk-react";

import { IoMdHeartEmpty } from "react-icons/io";
import { SlEye } from "react-icons/sl";
import { IoMdHeart } from "react-icons/io";
import { BsTrash3 } from "react-icons/bs";
import { toast } from "react-toastify";

function ProductCard({ product, isWishlistPage = false }) {
  const { user } = useUser();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const wishlistProducts = useSelector(
    (state) => state.wishlist.wishlistProducts,
  );

  const isWishlistItem = wishlistProducts.some(
    (item) => item.product_id === product.product_id,
  );

  useEffect(() => {
    if (isWishlistItem) {
      return;
    }
  }, [isWishlistItem]);

  const handleWishlistToggle = () => {
    if (!user) {
      toast.error("Please Login to Add Item in Wishlist!");
      navigate("/login");
      return;
    } else {
      if (isWishlistItem) {
        dispatch(removeToWishlist({ product_id: product.product_id }));
      } else {
        dispatch(addToWishlist(product));
      }
    }
  };

  return (
    <div className="group space-y-4">
      <div className="relative w-68 h-62 bg-[#F5F5F5] grid place-content-center px-10 py-8 rounded">
        {product.discount && (
          <p className="absolute top-3 left-3 w-14 h-7 bg-orange text-center text-white text-sm/loose rounded-md">
            -{product.discount}%
          </p>
        )}
        <Link to={`/shop/${product.product_id}`}>
          <img src={product.image[0].url} alt={product.name} />
        </Link>
        <div className="absolute right-3 top-3 space-y-2 ">
          <button
            onClick={handleWishlistToggle}
            className={`rounded-full cursor-pointer bg-white`}
          >
            {isWishlistPage ? (
              <BsTrash3 size={30} className="p-1" />
            ) : isWishlistItem ? (
              <IoMdHeart size={32} className="p-1 text-orange" />
            ) : (
              <IoMdHeartEmpty size={32} className="p-1" />
            )}
          </button>
          <Link to={`/shop/${product.product_id}`}>
            <SlEye className="w-8 h-8 bg-white rounded-full p-1" />
          </Link>
        </div>
        <Link
          className="w-full absolute bottom-0 bg-black text-white rounded-b text-center opacity-0 py-2 font-medium cursor-pointer group-hover:opacity-100 transition-opacity duration-300"
          to={`/shop/${product.product_id}`}
        >
          Add To Cart
        </Link>
      </div>
      <div className="space-y-1 text-left">
        <h1 className=" font-medium text-lg">{product.name}</h1>
        <p className="text-orange font-medium flex gap-3">
          ${product.price}
          <del className="text-black/40">${product.originalPrice}</del>
        </p>
        <p className="flex gap-2 items-center font-medium">
          <Rating
            name="half-rating-read"
            defaultValue={product.rating}
            precision={0.5}
            readOnly
            size="small"
          />
          <span className="text-black/50 text-sm">( {product.reviews} )</span>
        </p>
      </div>
    </div>
  );
}

export default memo(ProductCard);
