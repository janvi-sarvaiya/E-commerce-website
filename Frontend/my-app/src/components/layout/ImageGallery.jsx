import Title from "../common/Title";
import { Link } from "react-router-dom";
import woman from "../../assets/backgroundImage/woman-back.png";

export default function ImageGallery() {
  return (
    <div>
      <Title title="Featured" />
      <h1 className="mt-5 font-semibold text-4xl">New Arrival</h1>

      <div className="mt-10 flex items-center gap-6 text-white">
        <div className="relative bg-black h-150 w-full">
          <img
            src="https://res.cloudinary.com/dxj264ncs/image/upload/v1771304184/ps5_qlvvcd.png"
            alt="ps5"
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
          />
          <div className="absolute bottom-0 p-10">
            <h1 className="font-semibold text-2xl">PlayStation 5</h1>
            <p className="text-sm w-55 my-4">
              Black and White version of the PS5 coming out on sale.
            </p>
            <Link to="/shop" className="border-b border-b-gray-400 pb-1">
              Shop Now
            </Link>
          </div>
        </div>
        <div className="h-150 w-full grid grid-cols-2 gap-6">
          <div className="bg-black col-span-2 relative">
            <div className="absolute bottom-0 p-10">
              <h1 className="font-semibold text-2xl">Women’s Collections</h1>
              <p className="text-sm w-55 my-4">
                Featured woman collections that give you another vibe.
              </p>
              <Link to="/shop" className="border-b border-b-gray-400 pb-1">
                Shop Now
              </Link>
            </div>
            <img
              src={woman}
              alt="woman"
              className="absolute right-0 bottom-0"
            />
          </div>

          <div className="bg-black items-stretch relative">
            <img
              src="https://res.cloudinary.com/dxj264ncs/image/upload/v1771304156/bluetooth_w8njp0.png"
              alt="blutooth"
              className="absolute left-1/2 transform -translate-x-1/2 top-8"
            />
            <div className="absolute bottom-0 p-6">
              <h1 className="font-semibold text-2xl">Speakers</h1>
              <p className="text-sm w-55 my-2">Amazon wireless speakers</p>
              <Link to="/shop" className="border-b border-b-gray-400 pb-1">
                Shop Now
              </Link>
            </div>
          </div>

          <div className="bg-black items-stretch relative">
            <img
              src="https://res.cloudinary.com/dxj264ncs/image/upload/v1771304183/perfume_apusbb.png"
              alt="perfume"
              className="absolute left-1/2 transform -translate-x-1/2 top-8"
            />
            <div className="absolute bottom-0 p-6">
              <h1 className="font-semibold text-2xl">Perfume</h1>
              <p className="text-sm w-55 my-2">GUCCI INTENSE OUD EDP </p>
              <Link to="/shop" className="border-b border-b-gray-400 pb-1">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
