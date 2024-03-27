import { ChevronRightIcon } from "@heroicons/react/24/outline";
import React from "react";
import Card from "./Card";

type Props = {};

const PopularDishes = (props: Props) => {
  return (
    <section className="flex flex-col">
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
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default PopularDishes;
