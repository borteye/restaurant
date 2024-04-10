import React, { useState } from "react";
import burger from "../assets/burger.png";
import { useDispatch, useSelector } from "react-redux";
import { selectRole } from "../redux/features/userSlice";
import { useAllOrders } from "../hooks/useAllOrders";
import dateFormatter from "../utils/dateFormatter";
import { Item } from "../types/dishes";
import totalPrice from "../utils/totalPrice";
import {
  ActiveOrderHistory,
  selectedOrder,
} from "../redux/features/orderSlice";

type Props = {
  homePath: string;
  orderPath: string;
};

const Table = ({ homePath = "/home", orderPath = "/orders" }) => {
  const [showOrderDetails, setShowOrderDetails] = useState<boolean>(false);
  const [orderId, setOrderId] = useState<number>();
  const { pathname } = window.location;
  const dispatch = useDispatch();
  const orderDetails = useSelector(selectedOrder);
  const total = totalPrice(orderDetails);

  // const role = useSelector(selectRole);

  const { data, isLoading, isError } = useAllOrders();
  const result = data?.result;

  const handleSelectOrder = (orderDishes: Item[], orderid: number) => {
    setShowOrderDetails(orderId === orderid ? !showOrderDetails : true);
    dispatch(ActiveOrderHistory(orderDishes));
  };

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
        <div className="flex ">
          <div className="overflow-x-scroll  w-full  h-full no-scrollbar">
            <div className="flex justify-between gap-x-6 pr-8  min-w-fit border-b-2 items-center font-semibold py-6 ">
              <p className=" min-w-[15rem]">Customer</p>
              <p className="min-w-[15rem] ">Address</p>
              <p className="min-w-[15rem] ">Ordered Date</p>
              <p className="min-w-[9rem] ">Status</p>
            </div>
            {result?.length ? (
              result?.map((orders) => {
                return (
                  <div
                    onClick={() => {
                      setOrderId(orders?.orderid);
                      handleSelectOrder(orders?.dishes, orders?.orderid);
                    }}
                    className="flex items-center gap-x-6 pr-8 cursor-pointer hover:bg-[#F4F7F9] py-6 min-w-fit border-b justify-between"
                  >
                    <p className="flex min-w-[15rem] items-center gap-x-2 font-semibold ">
                      <img src={burger} alt="" className="w-10" />
                      {orders?.customer}
                    </p>
                    <p className="min-w-[15rem] ">{orders?.address}</p>
                    <p className="min-w-[15rem] ">
                      {dateFormatter(orders?.orderdate)}
                    </p>
                    <p className="min-w-[9rem] bg-red-500 text-center   ">
                      {orders?.status}
                    </p>
                  </div>
                );
              })
            ) : (
              <p className="text-center mt-12 text-2xl">No orders available</p>
            )}
          </div>

          <div
            className={`w-[30%] ${
              showOrderDetails ? "flex" : "hidden"
            } flex-col gap-y-10 p-6 bg-[#F4F7F9] h-fit `}
          >
            <h1 className="text-2xl font-semibold">Detail Order</h1>
            <ul className="flex gap-x-6 border-b font-semibold">
              <li className="border-green-900 border-b-2 py-4">Items</li>
              <li className="py-4">Review</li>
            </ul>
            {orderDetails?.map((dish) => {
              return (
                <div
                  className="mt-10 flex justify-between items-center"
                  key={dish?.dishid}
                >
                  <div className="flex items-center gap-x-6">
                    <img src={burger} alt="" className="w-16" />
                    <div>
                      <p className="text-black">{dish?.name}</p>
                      <p className="text-sm text-secondary">${dish?.price}</p>
                    </div>
                  </div>
                  <p>{dish?.quantity}items</p>
                </div>
              );
            })}

            <div className="flex justify-between items-center">
              <p className="text-2xl font-semibold">Total</p>
              <p>${total?.toFixed(2)}</p>
            </div>
          </div>
        </div>
      ) : (
        false
      )}
    </>
  );
};

export default Table;
