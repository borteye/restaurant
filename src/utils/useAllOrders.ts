import { useQuery } from "@tanstack/react-query";
import { orderDetails } from "../types/orders";

export const useAllOrders = () => {
  const endpoint = "http://localhost:5000/orders";
  const url = async (): Promise<orderDetails> => {
    try {
      const res = await fetch(endpoint);
      if (!res.ok) {
        throw new Error(`HTTP error status: ${res.status}`);
      }
      return await res.json();
    } catch (error) {
      throw new Error(`Error in fetch: ${error}`);
    }
  };

  return useQuery({
    queryKey: ["orders"],
    queryFn: url,
  });
};
