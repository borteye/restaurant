import React, { FC, useState } from "react";
import dateFormatter from "../utils/dateFormatter";
import { useDispatch, useSelector } from "react-redux";
import { Item } from "../types/dishes";
import {
  ActiveOrderHistory,
  selectedOrder,
} from "../redux/features/orderSlice";
import totalPrice from "../utils/totalPrice";
import burger from "../assets/burger.png";

type Props = {
  data?: any;
  columns?: any;
};

const Table: FC<Props> = ({ data, columns }) => {
  const [showOrderDetails, setShowOrderDetails] = useState<boolean>(false);
  const [orderId, setOrderId] = useState<number>();
  const [selectOrder, setSelectOrder] = useState<number>();

  const dispatch = useDispatch();

  const orderDetails = useSelector(selectedOrder);
  const total = totalPrice(orderDetails);

  const handleSelectOrder = (orderDishes: Item[], orderid: number) => {
    setShowOrderDetails(orderId === orderid ? !showOrderDetails : true);

    setSelectOrder(orderid);

    dispatch(ActiveOrderHistory(orderDishes));
  };

  return (
    <div className="flex ">
      <div className="overflow-x-scroll  w-full  h-full no-scrollbar">
        <div className="flex justify-between gap-x-6 px-8  min-w-fit border-b-2 items-center font-semibold py-6 ">
          {columns &&
            columns?.map((col: any, index: any) => {
              const isLastItem = index === columns.length - 1;
              const listItemClasses = isLastItem
                ? "min-w-[9rem]"
                : "min-w-[15rem]";
              return (
                <p key={index} className={listItemClasses}>
                  {col?.header}
                </p>
              );
            })}
        </div>

        <div className="flex flex-col">
          {data ? (
            data?.map((orders: any, i: any) => {
              return (
                <div
                  key={i}
                  onClick={() => {
                    setOrderId(orders?.orderid);
                    handleSelectOrder(orders?.dishes, orders?.orderid);
                  }}
                  className={` ${
                    selectOrder === orders?.orderid && showOrderDetails === true
                      ? "bg-[#F4F7F9]"
                      : ""
                  } flex items-center gap-x-6 px-8 cursor-pointer hover:bg-[#F4F7F9] py-6 min-w-fit border-b justify-between`}
                >
                  {columns &&
                    columns?.map((col: any, index: any) => {
                      const isLastItem = index === columns.length - 1;
                      const listItemClasses = isLastItem
                        ? "min-w-[9rem] "
                        : "min-w-[15rem] ";
                      const statusStyle =
                        orders[col?.field] === orders?.status &&
                        "bg-green-200 text-green-700 text-center rounded-2xl";
                      return (
                        <p
                          key={index}
                          className={`${listItemClasses} ${statusStyle}`}
                        >
                          {orders[col?.field] === orders?.orderdate
                            ? dateFormatter(orders[col?.field])
                            : orders[col?.field]}
                        </p>
                      );
                    })}
                </div>
              );
            })
          ) : (
            <p className="text-2xl text-center mt-10">No orders found</p>
          )}
        </div>
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
                <img src={dish?.imageurl} alt="" className="w-16" />
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
  );
};

export default Table;
