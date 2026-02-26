import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import IntroSlider from "../components/slider/IntroSlider";
import ProductSlider from "../components/slider/ProductSlider";
import MusicBanner from "../components/common/MusicBanner";
import BestSellingProducts from "../components/product/BestSellingProducts";
import ProductListing from "../components/product/ProductListing";
import ImageGallery from "../components/layout/ImageGallery";
import { SERVICES } from "../utils/constant";
import CategoryWiseProducts from "../components/product/CategoryWiseProducts";

import { MdArrowForwardIos } from "react-icons/md";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="max-w-390 mx-auto px-10 mt-28">
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

        <div className="mt-15">
          <CategoryWiseProducts />
        </div>
        <hr className="mt-18 text-slate-300" />

        <div className="mt-15">
          <BestSellingProducts />
        </div>

        <div className="mt-30">
          <MusicBanner />
        </div>

        <div className="mt-18">
          <ProductListing />
        </div>

        <div className="mt-25">
          <ImageGallery />
        </div>

        <div className="mt-30 px-5 grid grid-cols-3 max-w-7xl mx-auto gap-22">
          {SERVICES.map(({ icon, title, subTitle }, index) => {
            const Icon = icon;
            return (
              <div key={index} className="flex flex-col items-center">
                <div className="bg-black p-2 rounded-full text-white border-10 border-gray-300">
                  <Icon className="h-10 w-10" />
                </div>
                <h1 className="mt-4 font-semibold text-xl mb-2">{title}</h1>
                <p>{subTitle}</p>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
