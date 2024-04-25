import { ChevronRightIcon } from "@heroicons/react/24/outline";
import React, { useEffect } from "react";
import Card from "./Card";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import {
  ActiveFilter,
  selectCountry,
  selectCountryId,
} from "../../redux/features/filterSlice";
import { BasicPopularDishesInfo, DishDetails } from "../../types/dishes";
import { DishCatalog, selectDishes } from "../../redux/features/dishSlice";

type Props = {};

const PopularDishes = (props: Props) => {
  const dispatch = useDispatch();
  const dishCatalog = useSelector(selectDishes);
  const getDishes = () => {
    return fetch(`http://localhost:5000/dishes`).then((res) => res.json());
  };

  const { data } = useQuery({
    queryKey: ["dishes"],
    queryFn: getDishes,
  });

  useEffect(() => {
    if (data) {
      dispatch(
        DishCatalog({
          dishes: data,
        })
      );
    }
  }, [data, dispatch]);

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
      <div className="flex gap-x-8 overflow-x-scroll no-scrollbar">
        {dishCatalog?.length ? (
          dishCatalog?.map((dish, i: number) => {
            return <Card dish={dish} key={i} />;
          })
        ) : (
          <p>No content found</p>
        )}
      </div>
    </section>
  );
};

export default PopularDishes;
