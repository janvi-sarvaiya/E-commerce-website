import Title from "../components/common/Title";
import Breadcrumbs from "../components/common/Breadcrumbs";
import { useFetchProduct } from "../api/HTTP_API";
import ProductCard from "../components/product/ProductCard";

export default function Shop() {
  const { data: PRODUCTS } = useFetchProduct();

  return (
    <>
      <div className="max-w-390 mx-auto px-10 mt-40">
        <Breadcrumbs />
        <div className="mt-10">
          <Title title="Our Products" />
        </div>
        <div className="mt-8 grid grid-cols-5 gap-10">
          {PRODUCTS?.map((product) => (
            <ProductCard key={product.product_id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
