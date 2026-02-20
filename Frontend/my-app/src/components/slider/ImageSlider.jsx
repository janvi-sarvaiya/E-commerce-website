import { TEAMS } from "../../utils/constant";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";

export default function ImageSlider() {
  return (
    <div className="mt-33 px-5 max-w-300 mx-auto">
      <Swiper
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={3}
        pagination={{ el: ".custom-pagination", clickable: true }}
      >
        {TEAMS.map(({ image, name, role }, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col bg-[#F5F5F5] rounded">
              <img src={image} alt={name} className="mx-auto mt-6" />
              <div className="bg-white">
                <h1 className="mt-5 text-3xl font-medium mb-1">{name}</h1>
                <p>{role}</p>
                <div className="flex gap-6 mt-3">
                  <FiTwitter size={20} /> <FaInstagram size={20} />
                  <FaLinkedinIn size={20} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-pagination mt-8 text-center"></div>
    </div>
  );
}
