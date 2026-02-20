import React from "react";
import Rating from "@mui/material/Rating";

import { IoMdHeartEmpty } from "react-icons/io";
import { SlEye } from "react-icons/sl";

export default function ProductCard({ product }) {
  return (
    <div className="group space-y-4">
      <div className="relative w-68 h-62 bg-[#F5F5F5] grid place-content-center px-10 py-8 rounded">
        {product.discount && (
          <p className="absolute top-3 left-3 w-14 h-7 bg-orange text-center text-white text-sm/loose rounded-md">
            -{product.discount}%
          </p>
        )}
        {/* <img src={product.image[0]} alt={product.name} /> */}
        <div className="absolute right-3 top-3 space-y-2 ">
          <IoMdHeartEmpty className="w-8 h-8 bg-white rounded-full p-1" />
          <SlEye className="w-8 h-8 bg-white rounded-full p-1" />
        </div>
        <div className="w-full absolute bottom-0 bg-black text-white rounded-b text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="py-2 font-medium cursor-pointer">
            Add To Cart
          </button>
        </div>
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
