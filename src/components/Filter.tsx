import { CheckCircleIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import React, { FC, useState } from "react";

type Props = {
  filterBy: {
    title: string;
    icon: JSX.Element;
    options: {
      name?: string;
      quantity?: number;
    }[];
  };
  width: string;
  borderColor: string
};

const Filter: FC<Props> = ({ filterBy, width, borderColor }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };
  return (
    <div
      onClick={toggleFilter}
      className={`relative cursor-pointer flex w-fit border ${borderColor} rounded-xl font-semibold py-2 px-3 items-center gap-x-2  shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] `}
    >
      {filterBy.icon}
      <p className="flex gap-x-2">
        {filterBy.title} <ChevronDownIcon className="w-4" />
      </p>
      <div
        className={`absolute transition-transform ${
          isFilterVisible ? "transform " : "transform hidden scale-95"
        }  overflow-y-scroll no-scrollbar rounded-xl z-10  border p-1 top-12 right-12  ${width} max-h-[20vh] bg-light  shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]`}
      >
        {filterBy.options.map((option) => {
          return (
            <div className="flex items-center text-black justify-between hover:bg-[#e4e4e4] py-2 px-3 rounded-xl">
              <p>{option.name}</p>
              <p>{option.quantity}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Filter;
