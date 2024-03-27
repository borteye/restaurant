import React from "react";
import burger from "../assets/burger.png";

type Props = {};

const Table = (props: Props) => {
  return (
    <>
      <div className="overflow-hidden">
        <table className="min-w-full max-w-[200rem]">
          <thead className="bg-black text-white sticky top-0">
            <tr>
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
        </table>
      </div>

      <div className="overflow-y-auto h-[20vh]">
        <table className="min-w-full">
          <tbody className="text-center">
            <tr>
              <td className="px-4 py-2 flex items-center justify-center">
                <div className="flex items-center font-bold">
                  <img src={burger} alt="burger" className="w-14" />
                  <p className="ml-2">Gabriel</p>
                </div>
              </td>
              <td className="px-4 py-2 border">5564949846541</td>
              <td className="px-4 py-2 border">Leisure Street Nungua J746/35</td>
              <td className="px-4 py-2 text-left">$200.00</td>
              <td className="px-4 py-2 border">Complete</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
