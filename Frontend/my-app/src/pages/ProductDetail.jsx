import React from "react";
import { useParams } from "react-router-dom";
import { useFetchProduct } from "../api/HTTP_API";
import { addToCart } from "../features/cartSlice";
import { useDispatch } from "react-redux";
import Navbar from "../components/layout/Navbar";
import Breadcrumbs from "../components/common/Breadcrumbs";

export default function ProductDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data: PRODUCT } = useFetchProduct();

  const product = PRODUCT?.find(({ product_id }) => product_id === +id);

  return (
    <>
      <Navbar />
      <div className="max-w-390 mx-auto mt-48 px-5">
        <Breadcrumbs />
        <div className="mt-15">
          <img src={product.image[0].url} alt={product.name} />
          <p>{product.name}</p>
          <p>{product.price}</p>
          <button onClick={() => dispatch(addToCart(product))}>Buy Now</button>
        </div>
      </div>
    </>
  );
}
