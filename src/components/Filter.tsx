import { CheckCircleIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import React, { FC, useState } from "react";
import { UseDispatch, useDispatch, useSelector } from "react-redux";
import { ActiveFilter } from "../redux/features/filterSlice";
import { MutationFunction, useMutation } from "@tanstack/react-query";
import {
  ActiveCountryDishes,
  countryDishes,
} from "../redux/features/dishSlice";

type Props = {
  filterBy: {
    title?: string;
    icon: JSX.Element;
    options?: {
      name: string;
      quantity?: number;
      countryid: number;
      optionId?: number;
    }[];
  };
  width?: string;
  position?: string;
  borderColor?: string;
};

const Filter: FC<Props> = ({ filterBy, width, borderColor, position }) => {
  const [select, setSelect] = useState<string | undefined>("");
  const [isVisible, setIsVisible] = useState(false);
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const dispatch = useDispatch();

  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  // const getCountryDishes = async ({ name, countryid }: any) => {
  //   const body = {
  //     name,
  //     countryid,
  //   };
  //   console.log(body);
  //   return await fetch(`http://localhost:5000/dishes/:${name}/:${countryid}`, {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     method: "POST",
  //     body: JSON.stringify(body),
  //   }).then((res) => res.json());
  // };

  // const onSuccess = (data: any) => {

  //   dispatch(ActiveCountryDishes(data));
  // };

  // const onError = (error: any) => {
  //   console.log(error);
  // };

  // const {dish} = useSelector(countryDishes);

  // const { mutate } = useMutation({
  //   mutationKey: ["getCountryDishes"],
  //   mutationFn: getCountryDishes,
  //   onSuccess,
  //   onError,
  // });

  const handleSelect = (name: string, countryid: number) => {
    setSelect(name);
    dispatch(
      ActiveFilter({
        country: name,
        countryid: countryid,
      })
    );
    // mutate({ name, countryid });
  };

  return (
    <div
      onClick={toggleFilter}
      className={`relative cursor-pointer flex w-fit border ${position} ${borderColor} rounded-xl font-semibold py-2 px-3 items-center gap-x-2  shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] `}
    >
      {filterBy.icon}

      <p className="flex gap-x-2">
        {select ? select : "Select Country"}
        <ChevronDownIcon className="w-4" />
      </p>
      <div
        className={`absolute transition-transform ${
          isFilterVisible ? "transform " : "transform hidden scale-95"
        }  overflow-y-scroll no-scrollbar rounded-xl z-10  border p-1 top-12 ${position}  ${width} max-h-[20vh] bg-light  shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]`}
      >
        {filterBy?.options?.map((item, i) => {
          return (
            <div
              key={i}
              className="flex items-center text-black justify-between hover:bg-[#e4e4e4] py-2 px-3 rounded-xl"
              onClick={() => handleSelect(item?.name, item?.countryid)}
            >
              <p>{item?.name}</p>
              <p>{item?.quantity}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Filter;
