import { ChevronRightIcon } from "@heroicons/react/24/outline";
import React from "react";
import Table from "../components/Table";

type Props = {
  path: string;
};

const Order = ({ path = "/home" }) => {
  const { pathname } = window.location;
  return (
    <section className="border border-red-500">
      {path === pathname ? (
        <div className="flex font-bold items-center justify-between ">
          <h1 className=" text-lg">Categorires</h1>
          <div className="flex items-center text-sm gap-x-2">
            <p>View More</p>
            <div className="bg-count text-light rounded-md py-1">
              <ChevronRightIcon className="w-5 font-bold " />
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
