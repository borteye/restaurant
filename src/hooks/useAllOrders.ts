import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { selectId, selectRole } from "../redux/features/userSlice";
import { orderDetails } from "../types/orders";

export const useOrders = () => {
  const userId = useSelector(selectId);
  const userRole = useSelector(selectRole);
  const endpoint = `http://localhost:5000/orders/${userRole}/${userId}`;
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
