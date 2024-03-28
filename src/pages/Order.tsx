import {
  CalculatorIcon,
  CalendarIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import Table from "../components/Table";
import {
  CheckCircleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import SearchInput from "../components/SearchInput";
import { ChevronDownIcon, StarIcon } from "@heroicons/react/24/solid";
import Filter from "../components/Filter";
import { useSelector } from "react-redux";
import { selectRole } from "../redux/features/userSlice";
import { roles } from "../roles";

type Props = {
  homePath: string;
  orderPath: string;
};

const Order = ({ homePath = "/home", orderPath = "/orders" }) => {
  const { pathname } = window.location;
  const role = useSelector(selectRole);

  const filterBy = {
    title: "By Status",
    icon: <CheckCircleIcon className="w-6" />,
    options: [
      { name: "All", quantity: 1 },
      { name: "All", quantity: 1 },
      { name: "All", quantity: 1 },
      { name: "All", quantity: 1 },
    ],
  };

  const filterBy1 = {
    title: "By Date",
    icon: <CalendarIcon className="w-6" />,
    options: [{ name: "Hi", quantity: 1 }],
  };
  return (
    <section
      className={`flex flex-col ${
        pathname === orderPath
          ? "w-[calc(100%-51px)] md:w-[calc(100%-60px)] p-6"
          : false
      }   gap-y-16`}
    >
      {homePath === pathname ? (
        <div className="flex font-bold items-center justify-between ">
          <h1 className=" text-lg">Recent Orders</h1>
          <div className="flex items-center text-sm gap-x-2">
            <p>View More</p>
            <div className="bg-count text-light rounded-md py-2">
              <ChevronRightIcon className="w-5 font-bold " />
            </div>
          </div>
        </div>
      ) : orderPath === pathname ? (
        <div className="flex flex-col gap-y-16">
          <h1 className="text-2xl font-bold">Order history</h1>
          {role === roles.admin && (
            <div className="flex justify-between ">
              <div className="text-light">
                <div className="flex items-center gap-x-6">
                  <div className="bg-secondary w-fit p-3 rounded-xl">
                    <StarIcon className="w-7" />
                  </div>
                  <div className="text-black">
                    <p className="text-sm text-secondary">
                      Satisfaction Rating
                    </p>
                    <h1 className="text-2xl font-bold ">95%</h1>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="flex items-center justify-between">
            <SearchInput placeHolder="search" width="w-fit" boxShadow={false} />
            <div className="flex gap-x-8">
              <Filter
                filterBy={filterBy}
                width={"min-w-[14rem]"}
                borderColor={""}
              />
              <Filter
                filterBy={filterBy1}
                width={"min-w-[14rem]"}
                borderColor={""}
              />
            </div>
          </div>
        </div>
      ) : (
        false
      )}

      <Table />
    </section>
  );
};

export default Order;
