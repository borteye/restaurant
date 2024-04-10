import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { selectId, selectRole } from "../redux/features/userSlice";
import { BasicCustomerDetails } from "../types/user";

export const useAllCustomers = () => {
  const userId = useSelector(selectId);
  const userRole = useSelector(selectRole);
  const endpoint = `http://localhost:5000/customers/${userId}/${userRole}`;
  const url = async (): Promise<BasicCustomerDetails[]> => {
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
    queryKey: ["customers"],
    queryFn: url,
  });
};
