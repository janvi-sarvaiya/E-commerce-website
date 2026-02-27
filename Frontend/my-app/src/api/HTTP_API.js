import API from "./axios";
import { useQuery } from "@tanstack/react-query";

export const useFetchProduct = () => {
  const fetchProduct = async () => {
    const response = await API.get("/api/e-commerces?populate=*");
    return response.data.data.sort((a, b) => a.product_id - b.product_id);
  };

  return useQuery({
    queryKey: ["product"],
    queryFn: fetchProduct,
  });
};
