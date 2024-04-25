import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";
import React, { FC } from "react";
import dateFormatter from "../utils/dateFormatter";
import { Item } from "../types/dishes";

type Props = {
  data?: any;
  columns?: any;
  margin?: any;
  shadow?: any;
  rounded?: any;
  borderBottom?: any;
  customersPage?: boolean;
  activeStatus?: string;
  activeStatustatusBg?: string;
  message?: string;
  orderPage?: boolean;
  orderDetails?: Item[];
  total?: number;
  setOrderId?: React.Dispatch<React.SetStateAction<number>>;
  selectOrder?: number;
  handleSelectOrder?: (orderDishes: Item[], orderid: number) => void;
  showOrderDetails?: boolean;
  handleToggle?: (customerid: number) => void;
  handleDeleteCustomer?: (id: number) => void;
  options?: boolean;
  setCustomerId?: React.Dispatch<React.SetStateAction<number>>;
  customerId?: number;
};

const Table1: FC<Props> = ({
  data,
  columns,
  margin,
  shadow,
  rounded,
  borderBottom,
  customersPage,
  message,
  orderPage,
  orderDetails,
  total,
  setOrderId,
  selectOrder,
  handleSelectOrder,
  showOrderDetails,
  handleToggle,
  handleDeleteCustomer,
  options,
  setCustomerId,
  customerId,
}) => {
  console.log(selectOrder);
  return (
    <div className="flex">
      <div className="overflow-x-scroll  w-full  h-full no-scrollbar">
        <div className="flex justify-between gap-x-6 px-12  min-w-fit border-b-2 items-center font-semibold py-6 ">
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
        <div className="flex flex-col px-4">
          {data ? (
            data?.map((row: any) => {
              console.log(row);
              return (
                <>
                  <div
                    onClick={() => {
                      if (setOrderId && handleSelectOrder) {
                        setOrderId(row?.orderid as number);
                        handleSelectOrder(row?.dishes, row?.orderid);
                      }
                    }}
                    className={`${
                      selectOrder === row?.orderid && showOrderDetails === true
                        ? "bg-[#F4F7F9]"
                        : ""
                    }   flex items-center relative ${borderBottom}  ${margin} ${shadow} ${rounded}  gap-x-6 px-8 cursor-pointer hover:bg-[#F4F7F9] py-6 min-w-fit justify-between`}
                  >
                    {columns &&
                      columns?.map((col: any, index: any) => {
                        const isLastItem = index === columns.length - 1;
                        const listItemClasses = isLastItem
                          ? "min-w-[9rem]"
                          : "min-w-[15rem]";
                        const statusStyle =
                          row[col?.field] === row?.status &&
                          "text-[#23BAA6] bg-[#BBF7D0] text-center rounded-2xl";
                        return (
                          <p className={`${listItemClasses} ${statusStyle}`}>
                            {row[col?.field] === row?.orderdate
                              ? dateFormatter(row[col?.field])
                              : row[col?.field]}
                          </p>
                        );
                      })}

                    {customersPage && (
                      <>
                        <EllipsisHorizontalIcon
                          onClick={() => {
                            if (setCustomerId && handleToggle) {
                              setCustomerId(row.id);
                              handleToggle(row.id);
                            }
                          }}
                          className="w-7"
                        />
                      </>
                    )}
                    {options && (
                      <div
                        className={`${
                          customerId === row?.id ? "block" : "hidden"
                        } bg-light border p-2 z-50 absolute right-0 top-14 rounded-xl`}
                      >
                        <div className="flex items-center gap-x-2 py-2 px-4 border rounded-lg border-red-500">
                          <PencilSquareIcon className="w-5" />
                          <p>Edit</p>
                        </div>
                        <div
                          onClick={() =>
                            handleDeleteCustomer &&
                            handleDeleteCustomer(row?.id)
                          }
                          className="flex items-center gap-x-2 py-2 rounded-lg px-4"
                        >
                          <TrashIcon className="w-5" />
                          <p>Delete</p>
                        </div>
                      </div>
                    )}
                  </div>
                </>
              );
            })
          ) : (
            <p>{message}</p>
          )}
        </div>
      </div>
      {orderPage && (
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
      )}
    </div>
  );
};

export default Table1;
