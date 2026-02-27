import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchProduct } from "../api/HTTP_API";
import { addToCart } from "../features/cartSlice";
import { useDispatch } from "react-redux";
import Navbar from "../components/layout/Navbar";
import Breadcrumbs from "../components/common/Breadcrumbs";
import Rating from "@mui/material/Rating";
import QunatityBox from "../components/product/QunatityBox";
import Footer from "../components/layout/Footer";

import { IoMdHeartEmpty } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { LuRefreshCcw } from "react-icons/lu"; 
import ProductImageGallery from "../components/product/ProductImageGallery";

export default function ProductDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [quantity, setQunatity] = useState(1);
  const { data: PRODUCT } = useFetchProduct();

  const product = PRODUCT?.find(({ product_id }) => product_id === +id);

  return (
    <>
      <Navbar />
      <div className="max-w-390 mx-auto mt-48 px-5">
        <Breadcrumbs />
        <div className="mt-12 grid grid-cols-2 gap-18">
          <ProductImageGallery product={product} />

          <div>
            <h1 className="text-2xl font-semibold">{product.name}</h1>
            <div className="flex mt-4 items-center gap-3 text-gray-500">
              <Rating
                name="half-rating-read"
                defaultValue={product.rating}
                precision={0.5}
                readOnly
              />
              <p>( {product.reviews} Reviews )</p> |
              <p
                className={`${product.inStock ? "text-[#00FF66]" : "text-red-500"}`}
              >
                {product.inStock ? "In Stock" : "Out of Stock"}
              </p>
            </div>

            <p className="mt-3 text-2xl">${product.price.toFixed(2)}</p>
            <p className="mt-4">{product?.description[0].children[0].text}</p>
            <hr className="mt-4 text-gray-400" />
            <div className="flex items-center gap-4 text-xl mt-6">
              <p>Size : </p>
              {product.size.map((val) => (
                <span
                  key={val}
                  className="text-[16px] border w-10 h-9 text-center place-content-center rounded border-gray-400
                   hover:bg-orange hover:text-white transition duration-300"
                >
                  {val}
                </span>
              ))}
            </div>

            <div className="mt-5 flex items-center gap-4">
              <QunatityBox quantity={quantity} setQunatity={setQunatity} />
              <button
                onClick={() =>
                  product.inStock && dispatch(addToCart({ product, quantity }))
                }
                className={`text-white py-2.5 px-12 rounded ${product.inStock ? "bg-orange cursor-pointer" : "bg-[#ca3c3c] cursor-not-allowed"}`}
              >
                Buy Now
              </button>
              <button className="border border-gray-400 rounded p-1.5">
                <IoMdHeartEmpty size={32} />
              </button>
            </div>

            <div className="mt-7 border border-gray-400  rounded">
              <div className="flex items-center gap-4 p-4 border-b border-b-gray-400">
                <TbTruckDelivery size={40} />
                <div>
                  <p className="font-bold">Free Delivery</p>
                  <small className="underline">
                    Enter your postal code for Delivery Availability
                  </small>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4">
                <LuRefreshCcw size={35} />
                <div>
                  <p className="font-bold">Return Delivery</p>
                  <small>Free 30 Days Delivery Returns. Details</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
