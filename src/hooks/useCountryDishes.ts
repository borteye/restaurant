import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { selectCountry, selectCountryId } from "../redux/features/filterSlice";
import { BasicCountryInfo } from "../types/dishes";

export const useCountryDishes = (id: string) => {
  const countryId = useSelector(selectCountryId);

  console.log("countryId", { countryId });
  const url = async (): Promise<any> => {
    const endpoint = `http://localhost:5000/dishes/${id}`;
    try {
      const res = await fetch(endpoint);
      if (!res.ok) {
        throw new Error(`HTTP error status: ${res.status}`);
      }
      console.log(res)
      return await res.json();
    } catch (error) {
      throw new Error(`Error in fetch: ${error}`);
    }
  };

  return useQuery({
    queryKey: ["countryDishes"],
    queryFn: url,
    enabled: false,
  });
};
