import { useQuery } from "@tanstack/react-query";

export const useCustomerStatistics = () => {
  const endpoint = "http://localhost:5000/customerStatistics";
  const url = async (): Promise<any> => {
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
    queryKey: ["customerStatistics"],
    queryFn: url,
  });
};
