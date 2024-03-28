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
        <div className="overflow-x-auto h-full no-scrollbar">
          <table className="min-w-full  overflow-y-scroll">
            <thead>
              <tr className="bg-[#424343] text-white">
                <th className="px-4 py-2 rounded-tl-3xl rounded-bl-3xl">
                  Item ordered
                </th>
                <th className="px-4 py-2">Order number</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Quantity</th>
                <th className="px-4 py-2">Unit price</th>
                <th className="px-4 py-2">Total price</th>
                <th className="px-4 py-2 rounded-tr-3xl rounded-br-3xl">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="text-center border-b">
                <td className="px-4 py-2 flex items-center justify-center">
                  <div className="flex items-center font-bold">
                    <img src={burger} alt="burger" className="w-14" />
                    <p className="ml-2">Gabriel</p>
                  </div>
                </td>
                <td className="px-4 py-2">5564949846541</td>
                <td className="px-4 py-2">27 March,2024</td>
                <td className="px-4 py-2">2</td>
                <td className="px-4 py-2">$200.00</td>
                <td className="px-4 py-2">$400.00</td>
                <td className="px-4 py-2 ">
                  <p className="bg-green-500 rounded-xl text-light">Complete</p>
                </td>
              </tr>
              <tr className="text-center border-b">
                <td className="px-4 py-2 flex items-center justify-center">
                  <div className="flex items-center font-bold">
                    <img src={burger} alt="burger" className="w-14" />
                    <p className="ml-2">Gabriel</p>
                  </div>
                </td>
                <td className="px-4 py-2">5564949846541</td>
                <td className="px-4 py-2">27 March,2024</td>
                <td className="px-4 py-2">2</td>
                <td className="px-4 py-2">$200.00</td>
                <td className="px-4 py-2">$400.00</td>
                <td className="px-4 py-2 ">
                  <p className="bg-green-500 rounded-xl text-light">Complete</p>
                </td>
              </tr>
              
            </tbody>
          </table>
        </div>
      ) : (
        false
      )}
    </>
  );
};

export default Table;
