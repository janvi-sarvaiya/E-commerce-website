import React from "react";
import Title from "../common/Title";
import { Link } from "react-router-dom";
import { useFetchProduct } from "../../api/HTTP_API.js";
import ProductCard from "./ProductCard";

export default function BestSellingProducts() {
  const { data: PRODUCTS, isLoading } = useFetchProduct();

  if (isLoading) {
    return <div className="loader"></div>;
  }

  return (
    <div>
      <Title title="This Month" />
      <div className="flex justify-between">
        <h1 className="text-4xl font-semibold mt-5">Best Selling Products</h1>
        <Link
          to="/shop"
          className="bg-orange rounded py-4 px-12 h-13 text-white"
        >
          View All
        </Link>
      </div>
      <div className="mt-12 grid grid-cols-5 gap-8">
        {PRODUCTS?.slice(4, 9).map((product) => (
          <ProductCard key={product.product_id} product={product} />
        ))}
      </div>
    </div>
  );
}
