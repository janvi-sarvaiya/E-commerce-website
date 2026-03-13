import React from "react";
import Navbar from "../components/layout/Navbar";
import { Link } from "react-router-dom";

export default function OrderCompleted() {
  return (
    <>
      <Navbar />
      <h1 className="max-w-390 mx-auto px-10 mt-45">
        Thank You for Your Ordering!
      </h1>
      <Link to="/home">Go to Home</Link>
    </>
  );
}
