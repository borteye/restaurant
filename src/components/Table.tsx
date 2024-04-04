import React from "react";
import burger from "../assets/burger.png";
import { useSelector } from "react-redux";
import { selectRole } from "../redux/features/userSlice";

type Props = {
  homePath: string;
  orderPath: string;
};

const Table = ({ homePath = "/home", orderPath = "/orders" }) => {
  const { pathname } = window.location;
  const role = useSelector(selectRole);
  return (
    <>
      {pathname === homePath ? (
        <div className="overflow-x-auto max-h-[25vh]no-scrollbar">
          <table className="min-w-full  overflow-y-scroll">
            <thead>
              <tr className="bg-[#424343] text-white">
                <th className="px-4 py-2 rounded-tl-3xl rounded-bl-3xl">
                  Customer
                </th>
                <th className="px-4 py-2">Order number</th>
                <th className="px-4 py-2">Address</th>
                <th className="px-4 py-2">Amount</th>
                <th className="px-4 py-2 rounded-tr-3xl rounded-br-3xl">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="text-center">
                <td className="px-4 py-2 flex items-center justify-center">
                  <div className="flex items-center font-bold">
                    <img src={burger} alt="burger" className="w-14" />
                    <p className="ml-2">Gabriel</p>
                  </div>
                </td>
                <td className="px-4 py-2">5564949846541</td>
                <td className="px-4 py-2">Leisure Street Nungua J746/35</td>
                <td className="px-4 py-2">$200.00</td>
                <td className="px-4 py-2 ">
                  <p className="bg-green-500 rounded-xl text-light">Complete</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : pathname === orderPath ? (
        <div className="overflow-x-scroll border w-[screen]  h-full no-scrollbar">
          <div className="flex justify-between gap-x-6 w-[screen] border border-red-500 items-center font-semibold py-6 ">
            <p className=" min-w-[18rem]">Customer</p>
            <p className="min-w-[18rem] ">Address</p>
            <p className="min-w-[18rem] ">Menu</p>
            <p className="min-w-[18rem] border">Status</p>
          </div>
          <hr />
          <div className="flex items-center gap-x-6 justify-between">
          <p className="flex min-w-[18rem] items-center gap-x-4 font-semibold " >
            <img src={burger} alt="" className="w-14" />
            Gabriel Borteye
          </p>
            <p className="min-w-[18rem] ">Address</p>
            <p className="min-w-[18rem] ">Menu</p>
            <p className="min-w-[18rem] ">Status</p>
          </div>
        </div>
      ) : (
        false
      )}
    </>
  );
};

export default Table;
