import Navbar from "../components/layout/Navbar";
import Breadcrumbs from "../components/common/Breadcrumbs";
import { Link } from "react-router-dom";
import Footer from "../components/layout/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="max-w-390 mx-auto mt-48 px-5">
        <Breadcrumbs />
        <div className="text-center mt-22">
          <h1 className="text-[110px]">404 Not Found</h1>
          <p className="mb-12">
            Your visited page not found. You may go home page.
          </p>
          <Link
            to="/home"
            className="text-white py-4 px-12 rounded bg-orange"
          >
            Back to home page
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
