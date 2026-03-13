import API from "./axios";
import { useMutation, useQuery } from "@tanstack/react-query";

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

export const useCheckoutOrder = () => {
  const postData = async (checkoutData) => {
    const response = await API.post("/api/orders", { data: checkoutData });
    return response.data;
  };

  return useMutation({
    mutationFn: postData,
    onSuccess: (data) => {
      console.log("Order saved:", data);
    },
    onError: (error) => {
      console.log("Order error:", error.response?.data);
    },
  });
};
