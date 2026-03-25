import Navbar from "../components/layout/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/layout/Footer";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
