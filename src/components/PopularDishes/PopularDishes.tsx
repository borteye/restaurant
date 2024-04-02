import { ChevronRightIcon } from "@heroicons/react/24/outline";
import React from "react";
import Card from "./Card";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import {
  ActiveFilter,
  selectCountry,
  selectCountryId,
} from "../../redux/features/filterSlice";

type Props = {};

const PopularDishes = (props: Props) => {
  const countrySelected = useSelector(selectCountry);
  const selectedCountryId = useSelector(selectCountryId);
  const getDishes = () => {
    return fetch(
      `http://localhost:5000/all-dishes`
    ).then((res) => res.json());
  };

  const { data } = useQuery({
    queryKey: ["dishes"],
    queryFn: getDishes,
    // enabled: false,
  });

  return (
    <section className="flex flex-col gap-y-8">
      <div className="flex font-bold items-center justify-between ">
        <h1 className=" text-lg">Popular Dishes</h1>
        <div className="flex items-center text-sm gap-x-2">
          <p>View More</p>
          <div className="bg-count text-light rounded-md py-1">
            <ChevronRightIcon className="w-5 font-bold " />
          </div>
        </div>
      </div>

      <Card data={data} />
    </section>
  );
};

export default PopularDishes;
