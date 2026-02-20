import { Link } from "react-router-dom";
import iphone from "../../assets/backgroundImage/iphone.png";
import jbl from "../../assets/backgroundImage/jbl.png";
import woman from "../../assets/backgroundImage/woman-back.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { BsApple } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa6";

export default function IntroSlider() {
  return (
    <div>
      <Swiper pagination={{ clickable: true }} modules={[Pagination]}>
        <SwiperSlide>
          <div className="bg-black text-white flex items-center justify-between h-86">
            <div className="pl-16">
              <p className="flex items-center gap-5">
                <BsApple size={50} /> iPhone 14 Series
              </p>
              <h1 className="mt-5 font-semibold text-5xl/14 ">
                Up to 10% off Voucher
              </h1>
              <Link
                to="/shop"
                className="flex items-center mt-5 gap-2 border-b-3 border-b-gray-500 w-26"
              >
                Shop Now <FaArrowRight size={20} />
              </Link>
            </div>
            <img src={iphone} alt="iphone" className="mt-4" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-black text-white flex items-center justify-between h-86">
            <div className="pl-16">
              <h1 className="mt-5 font-semibold text-5xl/15 ">
                Enhance Your Music Experience
              </h1>
              <Link
                to="/shop"
                className="flex items-center mt-5 gap-2 border-b-3 border-b-gray-500 w-26"
              >
                Shop Now <FaArrowRight size={20} />
              </Link>
            </div>
            <img src={jbl} alt="JBL" className="w-110 h-65 pr-6" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-black text-white flex items-center justify-between h-86">
            <div className="pl-16">
              <h1 className="mt-5 font-semibold text-3xl/15 ">
                Women’s Collections
              </h1>
              <p className="text-gray-300">
                Featured woman collections that give you another vibe.
              </p>
              <Link
                to="/shop"
                className="flex items-center mt-5 gap-2 border-b-3 border-b-gray-500 w-26"
              >
                Shop Now <FaArrowRight size={20} />
              </Link>
            </div>
            <img src={woman} alt="woman" className="pr-6" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
