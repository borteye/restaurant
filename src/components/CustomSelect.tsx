import { CheckCircleIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import React, { FC, useState } from "react";
import { UseDispatch, useDispatch, useSelector } from "react-redux";
import { ActiveFilter } from "../redux/features/filterSlice";
import { useMutation } from "@tanstack/react-query";
import { DishCatalog } from "../redux/features/dishSlice";
import { useCountryDishes } from "../hooks/useCountryDishes";
import { CustomSelectProps } from "../types/forms";

const CustomSelect: FC<CustomSelectProps> = ({
  handleChange,
  name,
  value,
  width,
  bgColor,
  title,
  options,
}) => {
  const [select, setSelect] = useState<string | undefined>("");
  const [initialValue, setInitialValue] = useState("");
  console.log(options)

  return (
    <select
      onChange={handleChange}
      name={name}
      className={`${width} ${bgColor} border-none outline-none border rounded-xl font-semibold py-2 px-3 items-center gap-x-2  shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]`}
    >
      <option value={initialValue} className={select ? "" : "hidden"}>
        {title}
      </option>
      {options?.map((item, i) => {
        return (
          <option key={i} value={item.countryid?.toString()} className="py-10">
            {item?.name}
          </option>
        );
      })}
    </select>
  );
};

export default CustomSelect;
