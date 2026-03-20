import React from "react";
import { useFetchProduct } from "../../api/HTTP_API.js";
import Title from "../common/Title";
import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";

export default function ProductListing() {
  const { data: PRODUCTS, isLoading } = useFetchProduct();

  if (isLoading) {
    return <div className="loader"></div>;
  }

  return (
    <div className="text-center">
      <Title title="Our Products" />
      <div className="flex justify-between">
        <h1 className="text-4xl font-semibold mt-5">Explore Our Products</h1>
        <div className="flex-1 flex items-center justify-end gap-3">
          <GoArrowLeft className="w-10 h-10 bg-[#F5F5F5] rounded-full p-1.5" />
          <GoArrowRight className="w-10 h-10 bg-[#F5F5F5] rounded-full p-1.5" />
        </div>
      </div>
      <div className="mt-10">
        <Swiper
          className="product-grid-swiper"
          slidesPerView={5}
          grid={{
            rows: 2,
            fill: "row",
          }}
          spaceBetween={20}
          pagination={{ el: ".productListing-pagination", clickable: true }}
          modules={[Grid, Pagination]}
        >
          {PRODUCTS?.slice(8).map((product) => (
            <SwiperSlide key={product.product_id}>
              <ProductCard product={product} key={product.product_id} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="productListing-pagination mt-6 text-center mb-10"></div>
        <Link
          to="/shop"
          className="bg-orange py-4 px-12 rounded font-medium text-white"
        >
          View All Products
        </Link>
      </div>
    </div>
  );
}
