import { useQuery } from "@tanstack/react-query";

export const useOrderStatistics = () => {
  const endpoint = "http://localhost:5000/orderStatistics";
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
    queryKey: ["orderStatistics"],
    queryFn: url,
  });
};
