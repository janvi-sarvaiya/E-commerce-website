import { Link } from "react-router-dom";
import JBL from "../../assets/backgroundImage/jbl.png";

export default function MusicBanner() {
  return (
    <div className="bg-black grid grid-cols-2 gap-10 h-110 px-16 items-center">
      <div>
        <p className="text-[#00FF66] font-bold text-lg">Categories</p>
        <h1 className="mt-5 font-semibold text-5xl/15 text-white">
          Enhance Your Music Experience
        </h1>
        <div className="text-white flex gap-6 mt-6 mb-12">
          <p className="w-16 h-16 bg-white rounded-full text-black flex flex-col justify-center text-center text-[12px]">
            <span className="font-bold text-xl -mb-1.5">23</span>Hours
          </p>
          <p className="w-16 h-16 bg-white rounded-full text-black flex flex-col justify-center text-center text-[12px]">
            <span className="font-bold text-xl -mb-1.5">05</span>Days
          </p>
          <p className="w-16 h-16 bg-white rounded-full text-black flex flex-col justify-center text-center text-[12px]">
            <span className="font-bold text-xl -mb-1.5">59</span>Minutes
          </p>
          <p className="w-16 h-16 bg-white rounded-full text-black flex flex-col justify-center text-center text-[12px]">
            <span className="font-bold text-xl -mb-1.5">35</span>Seconds
          </p>
        </div>
        <Link
          to="/shop"
          className="bg-[#00FF66] text-white px-12 py-4 rounded hover:bg-[#07d459] cursor-pointer"
        >
          Buy Now!
        </Link>
      </div>
      <img src={JBL} alt="JBL" />
    </div>
  );
}
