import { useQuery } from "@tanstack/react-query";

export const useCountryDishes = (id: string) => {
  const url = async (): Promise<any> => {
    const endpoint = `http://localhost:5000/dishes/${id}`;
    try {
      const res = await fetch(endpoint);
      if (!res.ok) {
        throw new Error(`HTTP error status: ${res.status}`);
      }
      console.log(res);
      return await res.json();
    } catch (error) {
      throw new Error(`Error in fetch: ${error}`);
    }
  };

  return useQuery({
    queryKey: ["dishes"],
    queryFn: url,
    enabled: false,
  });
};
