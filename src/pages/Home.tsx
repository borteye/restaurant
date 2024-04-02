import React, { useEffect, useState } from "react";
import dateFormatter from "../utils/dateFormatter";
import {
  MagnifyingGlassIcon,
  ChevronRightIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/solid";
import pizzaIcon from "../assets/pizza_icon.png";
import Categories from "../components/Categories/Categories";
import PopularDishes from "../components/PopularDishes/PopularDishes";
import Order from "./Order";
import SearchInput from "../components/SearchInput";
import Filter from "../components/Filter";
import { useQuery } from "@tanstack/react-query";
import { Countries } from "../types/dishes";

type Props = {};

const Home = (props: Props) => {
  const getCountries = async () => {
    return await fetch("http://localhost:5000/all-countries").then((res) =>
      res.json()
    );
  };

  const { data, isLoading, isError, isFetching } = useQuery<Countries[], Error>(
    {
      queryKey: ["countries"],
      queryFn: getCountries,
    }
  );

  console.log({ isLoading, isFetching });
  const countries = {
    title: "Country",
    icon: <GlobeAltIcon className="w-6" />,
    options: data,
  };

  return (
    <div className="w-[calc(100%-51px)] md:w-[calc(100%-60px)] bg-[#1d1d1d] text-light h-screen overflow-y-scroll no-scrollbar p-6 flex flex-col gap-y-8 ">
      <nav className="flex items-center justify-between ">
        <div>
          <h1 className="text-2xl font-bold">Pakecho Restaurant</h1>
          <p className="text-secondary">{dateFormatter()}</p>
        </div>
        <SearchInput
          placeHolder="Discover dishes by their country of origin or name"
          width="w-[60%]"
          boxShadow={true}
        />
      </nav>

      <div className="flex flex-col justify-between  h-full  gap-y-14 ">
        <Filter
          filterBy={countries}
          width="w-[10rem]"
          borderColor="border-[#292929]"
        />
        <Categories />
        <PopularDishes />
        <Order />
      </div>
    </div>
  );
};

export default Home;
