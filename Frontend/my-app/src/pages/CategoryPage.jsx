import React from "react";
import { useParams } from "react-router-dom";
import { useFetchProduct } from "../api/HTTP_API";
import Navbar from "../components/layout/Navbar";
import Title from "../components/common/Title";
import Breadcrumbs from "../components/common/Breadcrumbs";
import ProductCard from "../components/product/ProductCard";
import Footer from "../components/layout/Footer";

export default function CategoryPage() {
  const { category } = useParams();
  const { data: PRODUCTS } = useFetchProduct();

  const filterProducts = PRODUCTS?.filter(
    (product) => product.category == category,
  );

  return (
    <>
      <Navbar />
      <div className="max-w-390 mx-auto px-10 mt-40">
        <Breadcrumbs />
        <div className="mt-10">
          <Title
            title={`${category[0].toUpperCase()}${category.slice(1)} Category`}
          />
        </div>

        <div className="mt-8 grid grid-cols-5 gap-10">
          {filterProducts?.map((product) => (
            <ProductCard key={product.product_id} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
