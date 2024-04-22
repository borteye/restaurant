import { useMutation } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { selectCountry, selectCountryId } from "../redux/features/filterSlice";
import { BasicCountryInfo } from "../types/dishes";

export const useCountryDishes = (onSuccess: any, onError: any) => {
  const countryid = useSelector(selectCountryId);

  const endpoint = `http://localhost:5000/dishes/${countryid}`;

  const url = async (body: BasicCountryInfo): Promise<any> => {
    try {
      const res = await fetch(endpoint, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        throw new Error(`HTTP error status: ${res.status}`);
      }
      return await res.json();
    } catch (error) {
      throw new Error(`Fetch Rrror: ${error}`);
    }
  };

  return useMutation({
    mutationFn: url,
    onSuccess,
    onError,
  });
};
