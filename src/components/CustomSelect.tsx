import { CheckCircleIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import React, { FC, useState } from "react";
import { UseDispatch, useDispatch, useSelector } from "react-redux";
import { ActiveFilter } from "../redux/features/filterSlice";
import { useMutation } from "@tanstack/react-query";
import { DishCatalog } from "../redux/features/dishSlice";
import { useCountryDishes } from "../hooks/useCountryDishes";
import { SelectOptionProps } from "../types/forms";

type Props = {};
const CustomSelect: FC<SelectOptionProps> = ({
  filterBy,
  handleBlur,
  handleChange,
  name,
  value,
  width,
  bgColor,
  homePath = "/home",
  addDishPath = "/add-dish",
}) => {
  const [select, setSelect] = useState<string | undefined>("");
  const [initialValue, setInitialValue] = useState("");
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const { pathname } = window.location;
  const dispatch = useDispatch();

  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  const onSuccess = (data: any) => {
    dispatch(
      DishCatalog({
        dishes: data,
      })
    );
  };

  const onError = (error: any) => {
    console.log(error);
  };

  const { mutate } = useCountryDishes(onSuccess, onError);

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setInitialValue(e.target.value);
    const [countryId, name] = e.target.value.split("|");
    const countryid = parseInt(countryId);
    setSelect(name);
    dispatch(
      ActiveFilter({
        country: name,
        countryid: countryid,
      })
    );
    mutate({ name, countryid });
  };

  return (
    <select
      onChange={pathname === addDishPath ? handleChange : handleSelect}
      name={name}
      className={`${width} ${bgColor} border-none outline-none border rounded-xl font-semibold py-2 px-3 items-center gap-x-2  shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]`}
    >
      <option value={initialValue} className={select ? "" : "hidden"}>
        {filterBy.title}
      </option>
      {filterBy?.options?.map((item, i) => {
        return (
          <option
            key={i}
            value={item?.countryid || item?.categoryid}
            className=" py-10"
          >
            {item.name}
          </option>
        );
      })}
    </select>
  );
};

export default CustomSelect;
