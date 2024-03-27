import React from "react";
import dateFormatter from "../utils/dateFormatter";
import {
  MagnifyingGlassIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
import pizzaIcon from "../assets/pizza_icon.png";
import Categories from "../components/Categories/Categories";
import PopularDishes from "../components/PopularDishes/PopularDishes";
import Order from "./Order";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="w-[calc(100%-62px)] p-6 ">
      <nav className="flex items-center justify-between ">
        <div>
          <h1 className="text-2xl font-bold">Pakecho Restaurant</h1>
          <p className="text-secondary">{dateFormatter()}</p>
        </div>
        <div className="flex items-center border-2 rounded-2xl w-[60%] ">
          <input
            type="text"
            className="bg-transparent outline-none w-full px-4 text-xl"
            placeholder="Search Food, Cuisine or a Dish"
          />
          <div className="py-1 px-3 bg-count text-light  rounded-2xl">
            <MagnifyingGlassIcon className="w-6" />
          </div>
        </div>
      </nav>
      <div className="flex flex-col justify-between h-[calc(100%-(62px+1.5rem))]">
      <Categories />
      <PopularDishes />
      <Order />
      </div>
     
    </div>
  );
};

export default Home;
