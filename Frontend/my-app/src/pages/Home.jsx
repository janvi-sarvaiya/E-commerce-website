import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import IntroSlider from "../components/slider/IntroSlider";
import ProductSlider from "../components/slider/ProductSlider";
import MusicBanner from "../components/common/MusicBanner";

import { MdArrowForwardIos } from "react-icons/md";
 
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="max-w-390 mx-auto px-10">
        <div className="grid grid-cols-4 gap-15">
          <div className="border-r border-slate-400 pr-6">
            <ul className="space-y-4 mt-10">
              <li className="flex justify-between items-center">
                Woman’s Fashion <MdArrowForwardIos />
              </li>
              <li className="flex justify-between items-center">
                Men’s Fashion <MdArrowForwardIos />
              </li>
              <li>Electronics</li>
              <li>Home & Lifestyle</li>
              <li>Medicine</li>
              <li>Sports & Outdoor</li>
              <li>Baby’s & Toys</li>
              <li>Groceries & Pets</li>
              <li>Health & Beauty</li>
            </ul>
          </div>
          <div className="w-full col-span-3 mt-10">
            <IntroSlider />
          </div>
        </div>

        <div className="mt-33">
          <ProductSlider />
        </div>
        <hr className="mt-15 text-slate-300" />

        {/* <div className="mt-30">
          <MusicBanner />
        </div> */}
      </div>
      <Footer />
    </>
  );
}
