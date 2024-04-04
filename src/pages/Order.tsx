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
import OrderCard from "../components/OrderCard";

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
      { name: "All", quantity: 1, optionId: 1 },
      { name: "All", quantity: 1, optionId: 2 },
      { name: "All", quantity: 1, optionId: 3 },
      { name: "All", quantity: 1, optionId: 4 },
    ],
  };

  const filterBy1 = {
    title: "By Date",
    icon: <CalendarIcon className="w-6" />,
    options: [
      { name: "All", quantity: 1, optionId: 1 },
      { name: "All", quantity: 1, optionId: 2 },
      { name: "All", quantity: 1, optionId: 3 },
      { name: "All", quantity: 1, optionId: 4 },
    ],
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
              <OrderCard />
              <OrderCard />
              <OrderCard />
              <OrderCard />
            </div>
          )}

          <div className="flex items-center justify-between">
            <SearchInput placeHolder="search" width="w-fit" boxShadow={false} />
            <div className="flex gap-x-8">
              {/* <Filter
                filterBy={filterBy}
                width="min-w-[14rem]"
                position="right-12"
              /> */}
              {/* <Filter
                filterBy={filterBy1}
                width="min-w-[14rem]"
                position="right-12"
              /> */}
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
