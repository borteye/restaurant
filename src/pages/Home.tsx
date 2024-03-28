import React from "react";
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

type Props = {};

const Home = (props: Props) => {
  const filterBy = {
    title: "Country",
    icon: <GlobeAltIcon className="w-6" />,
    options: [{ name: "Ghana" }, { name: "America" }],
  };
  return (
    <div className="w-[calc(100%-51px)] md:w-[calc(100%-60px)] bg-[#1d1d1d] text-light h-screen overflow-y-scroll no-scrollbar p-6 ">
      <nav className="flex items-center justify-between ">
        <div>
          <h1 className="text-2xl font-bold">Pakecho Restaurant</h1>
          <p className="text-secondary">{dateFormatter()}</p>
        </div>
        <SearchInput
          placeHolder="Search Food, Cuisine or a Dish"
          width="w-[60%]"
          boxShadow={true}
        />
      </nav>
      <Filter filterBy={filterBy} width={"w-fit"} borderColor={"border-[#292929]"} />
      <div className="flex flex-col justify-between  h-full  gap-y-14 ">
        <Categories />
        <PopularDishes />
        <Order />
      </div>
    </div>
  );
};

export default Home;
