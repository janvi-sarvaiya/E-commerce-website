import Title from "../common/Title";
import { useFetchProduct } from "../../api/HTTP_API";
import { Link } from "react-router-dom";
import { CATEGORYICON } from "../../utils/constant";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "swiper/css";

import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";

export default function CategoryWiseProducts() {
  const { data: PRODUCTS } = useFetchProduct();

  const categories = [...new Set(PRODUCTS?.map((product) => product.category))];

  return (
    <div>
      <Title title="Categories" />
      <div className="flex justify-between">
        <h1 className="text-4xl font-semibold mt-5">Browse By Category</h1>
        <div className="flex-1 flex items-center justify-end gap-3">
          <GoArrowLeft className="w-10 h-10 bg-[#F5F5F5] rounded-full p-1.5" />
          <GoArrowRight className="w-10 h-10 bg-[#F5F5F5] rounded-full p-1.5" />
        </div>
      </div>
      <div className="mt-10">
        <Swiper
          slidesPerView={6}
          spaceBetween={35}
          // pagination={{ clickable: true }}
          modules={[Pagination]}
        >
          {categories?.map((value) => {
            const categoryItem = CATEGORYICON.find(
              ({ cname }) => cname == value,
            );
            const Icon = categoryItem.icon;
            return (
              <SwiperSlide
                key={value}
                className="border border-gray-400 rounded text-center py-8"
              >
                <Link
                  to={`/category/${value}`}
                  className="flex flex-col items-center"
                >
                  <Icon size={56} className="mb-3" />
                  {value[0].toUpperCase() + value.slice(1)}
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
