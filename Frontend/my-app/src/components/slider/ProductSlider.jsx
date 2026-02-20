import React from "react";
import Title from "../common/Title";
import CountDownTimer from "../common/CountDownTimer";
import ProductCard from "../common/ProductCard";
import { useFetchProduct } from "../../api/HTTP_API.JS";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "swiper/css";

import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";

export default function ProductSlider() {
  const { data: PRODUCTS } = useFetchProduct();

  return (
    <div className="text-center">
      <Title title="Today's" />
      <div className="flex justify-between items-baseline-last gap-21.5">
        <h1 className="text-4xl font-semibold mt-6">Flash Sales</h1>
        <CountDownTimer />
        <div className="flex-1 flex items-center justify-end gap-3">
          <GoArrowLeft className="w-10 h-10 bg-[#F5F5F5] rounded-full p-1.5" />
          <GoArrowRight className="w-10 h-10 bg-[#F5F5F5] rounded-full p-1.5" />
        </div>
      </div>
      <div className="mt-10">
        <Swiper
          slidesPerView={5}
          spaceBetween={20}
          pagination={{ el: ".custom-pagination", clickable: true }}
          modules={[Pagination]}
        >
          {PRODUCTS?.slice(0, 10).map((product) => (
            <SwiperSlide key={product.product_id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-pagination mt-6 text-center mb-10"></div>
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
