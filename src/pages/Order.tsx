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
import { useDispatch, useSelector } from "react-redux";
import { selectRole } from "../redux/features/userSlice";
import { roles } from "../roles";
import InfoCard from "../components/InfoCard";
import { useOrders } from "../hooks/useAllOrders";
import { useOrderStatistics } from "../hooks/useOrderStatistics";
import CustomSelect from "../components/CustomSelect";
import Table1 from "../components/Table1";
import totalPrice from "../utils/totalPrice";
import { ActiveOrderHistory, selectedOrder } from "../redux/features/orderSlice";
import { Item } from "../types/dishes";

type Props = {
  homePath: string;
  orderPath: string;
};

const Order = ({ homePath = "/home", orderPath = "/orders" }) => {
  const [showOrderDetails, setShowOrderDetails] = useState<boolean>(false);
  const [orderId, setOrderId] = useState<number>(0);
  const [selectOrder, setSelectOrder] = useState<number>();

  const dispatch = useDispatch();

  const orderDetails = useSelector(selectedOrder);
  const total = totalPrice(orderDetails);

  const handleSelectOrder = (orderDishes: Item[], orderid: number) => {
    setShowOrderDetails(orderId === orderid ? !showOrderDetails : true);
    setSelectOrder(orderid);
    dispatch(ActiveOrderHistory(orderDishes));
  };


  const { pathname } = window.location;
  const role = useSelector(selectRole);

  const OrdersResponse = useOrders()?.data;
  const OrdersData = OrdersResponse?.result;

  const { data: orderStatisticsData } = useOrderStatistics();
  console.log(orderStatisticsData);

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

  const adminColumns = [
    {
      field: "customer",
      header: "Customer",
    },
    {
      field: "address",
      header: "Address",
    },
    {
      field: "orderdate",
      header: "Ordered Date",
    },
    {
      field: "status",
      header: "Status",
    },
  ];

  const customerColumns = [
    {
      field: "ordernumber",
      header: "Order #",
    },
    {
      field: "orderdate",
      header: "Ordered Date",
    },
    {
      field: "address",
      header: "Address",
    },
    {
      field: "status",
      header: "Status",
    },
  ];

  const message = ""

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
              {orderStatisticsData?.map((item: any) => {
                return (
                  <InfoCard
                    title={item?.title}
                    number={item?.number}
                    color={item?.color}
                  />
                );
              })}
            </div>
          )}

          <div className="flex items-center justify-between">
            <SearchInput placeHolder="search" width="w-fit" boxShadow={false} />

            <div className="flex gap-x-8">
            {/* <CustomSelect/> */}
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

      <Table1
        data={OrdersData}
        columns={role === roles?.admin ? adminColumns : customerColumns}
        borderBottom="border-b"
        message="No orders found"
        orderPage={true}
        orderDetails={orderDetails}
        total={total}
        setOrderId={setOrderId}
        selectOrder={selectOrder}
        handleSelectOrder={handleSelectOrder}
        showOrderDetails={showOrderDetails}
      />
    </section>
  );
};

export default Order;
