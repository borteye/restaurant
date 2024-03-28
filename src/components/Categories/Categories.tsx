import React from "react";

import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Card from "./Card";

type Props = {};

const Categories = (props: Props) => {
  return (
    <section className="flex flex-col gap-y-8">
      <div className="flex font-bold items-center justify-between ">
        <h1 className=" text-lg">Categorires</h1>
        <div className="flex items-center text-sm gap-x-2">
          <p>View More</p>
          <div className="bg-count text-light rounded-md py-1">
            <ChevronRightIcon className="w-5 font-bold " />
          </div>
        </div>
      </div>
      <div className="flex gap-x-8 overflow-x-scroll no-scrollbar">
        <Card />
      </div>
    </section>
  );
};

export default Categories;
