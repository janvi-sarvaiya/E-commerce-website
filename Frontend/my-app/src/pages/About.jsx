import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Breadcrumbs from "../components/common/Breadcrumbs";
import ImageSlider from "../components/slider/ImageSlider";
import { ABOUTDETAIL, SERVICES } from "../utils/constant";

import shopping from "../assets/backgroundImage/shopping.png";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="">
        <div className="mt-12 ml-40">
          <Breadcrumbs />
        </div>

        <div className="flex mt-2 gap-40">
          <div className="ml-40 my-auto flex-1">
            <h1 className="font-semibold text-[54px]">Our Story</h1>
            <p className="my-6">
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
            </p>
            <p>
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.Exclusive has more than 1 Million products
              to offer, growing at a very fast. Exclusive offers a diverse
              assotment in categories ranging from consumer.
            </p>
          </div>
          <img src={shopping} alt="shopping" className="w-210 h-160" />
        </div>

        <div className="mt-30 px-5 grid grid-cols-4 gap-10 max-w-360 mx-auto">
          {ABOUTDETAIL.map(({ icon, people, description }, index) => {
            const Icon = icon;
            return (
              <div
                key={index}
                className="border py-7 text-center flex flex-col items-center rounded border-gray-400
               hover:bg-orange hover:text-white hover:shadow-lg transition duration-200 group"
              >
                <div className="rounded-full bg-black p-2.5 border-10 border-gray-300 group-hover:bg-white">
                  <Icon className="h-8 w-8 text-white group-hover:text-black" />
                </div>
                <h1 className="mt-4 mb-1 text-3xl font-bold">{people}</h1>
                <p>{description}</p>
              </div>
            );
          })}
        </div>

        <div>
          <ImageSlider />
        </div>

        <div className="mt-33 px-5 grid grid-cols-3 max-w-7xl mx-auto gap-22">
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
