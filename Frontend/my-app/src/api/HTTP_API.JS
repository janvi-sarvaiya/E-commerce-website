import API from "./axios";
import { useQuery } from "@tanstack/react-query";

export const useFetchProduct = () => {
  const fetchProduct = async () => {
    const response = await API.get("/api/e-commerces");
    return response.data.data;
  };

  return useQuery({
    queryKey: ["product"],
    queryFn: fetchProduct,
  });
};
