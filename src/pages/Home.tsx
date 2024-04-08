import { GlobeAltIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useSelector } from "react-redux";
import Cart from "../components/Cart/Cart";
import Categories from "../components/Categories/Categories";
import Filter from "../components/Filter";
import PopularDishes from "../components/PopularDishes/PopularDishes";
import SearchInput from "../components/SearchInput";
import { cartItems } from "../redux/features/cartSlice";
import { BasicCountryInfo } from "../types/dishes";
import dateFormatter from "../utils/dateFormatter";
import Order from "./Order";
import CheckOut from "../components/CheckOut";

const Home = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const getCountries = async () => {
    return await fetch("http://localhost:5000/all-countries").then((res) =>
      res.json()
    );
  };

  const cartToggle = () => {
    setIsActive(() => !isActive);
  };

  const { data, isLoading, isError } = useQuery<BasicCountryInfo[], Error>({
    queryKey: ["countries"],
    queryFn: getCountries,
  });

  const countries = {
    title: "Country",
    icon: <GlobeAltIcon className="w-6" />,
    options: data,
  };

  const cart = useSelector(cartItems);

  return (
    <div className=" w-[calc(100%-51px)]  md:w-[calc(100%-60px)] bg-[#1d1d1d] text-light h-screen overflow-y-scroll no-scrollbar justify-between p-6  flex ">
      <div
        className={`${
          isActive ? "w-[73%]" : "w-full"
        } duration-200 flex flex-col gap-y-8`}
      >
        <nav className="flex items-center justify-between ">
          <div>
            <h1 className="text-2xl font-bold">Pakecho Restaurant</h1>
            <p className="text-secondary">{dateFormatter()}</p>
          </div>
          <div className="flex w-[60%] items-center gap-x-4">
            <SearchInput
              placeHolder="Discover dishes by their country of origin or name"
              width="w-[95%]"
              boxShadow={true}
            />
            <div className="relative">
              <ShoppingCartIcon
                onClick={cartToggle}
                className="w-8 cursor-pointer "
              />
              <p className="bg-primary absolute -top-1 -right-1 px-[6px] text-sm font-bold rounded-full">
                {cart?.length}
              </p>
            </div>
          </div>
        </nav>

        <div className="flex flex-col justify-between no-scrollbar h-full  gap-y-14 ">
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

      <Cart isActive={isActive} />
      <CheckOut/>
    </div>
  );
};

export default Home;
