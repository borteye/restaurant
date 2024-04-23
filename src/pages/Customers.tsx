import React, { useState } from "react";
import burger from "../assets/burger.png";
import SearchInput from "../components/SearchInput";
import OrderCard from "../components/InfoCard";
import { useSelector } from "react-redux";
import { selectRole } from "../redux/features/userSlice";
import { roles } from "../roles";
import {
  EllipsisHorizontalIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import { useAllCustomers } from "../hooks/useAllCustomers";
import { useDeleteCustomer } from "../hooks/useDeleteCustomer";
import InfoCard from "../components/InfoCard";
import { useCustomerStatistics } from "../hooks/useCustomerStatistics";
type Props = {};

const Customers = () => {
  const [options, setOptions] = useState<boolean>(false);
  const [customerId, setCustomerId] = useState<number>();

  const userRole = useSelector(selectRole);

  const handleToggle = (customerId: number) => {
    setOptions(customerId === customerId ? !options : true);
  };

  const {
    data: allCustomersData,
    isLoading: allCustomersLoading,
    isError: allCustomersError,
  } = useAllCustomers();

  const { data: customerStatisticsData } = useCustomerStatistics();
  console.log(customerStatisticsData);

  const onSuccess = (data: any) => {
    const { success, error } = data;
    alert(error);
  };

  const onError = (error: any) => {
    console.log(error);
  };

  const { mutate } = useDeleteCustomer(
    onSuccess,
    onError,
    customerId as number
  );

  const handleDeleteCustomer = (id: number) => {
    setCustomerId(id);
    mutate({ id });
    setOptions(false);
  };

  return (
    <div className="flex flex-col w-[calc(100%-51px)] md:w-[calc(100%-60px)] p-6 gap-y-16">
      <div className="flex flex-col gap-y-16">
        <h1 className="text-2xl font-bold">Customers</h1>

        {userRole === roles?.admin && (
          <div className="flex justify-between">
            {customerStatisticsData?.map((item: any) => {
              return <InfoCard title={item?.title} number={item?.number} />;
            })}
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
      <div className="overflow-x-scroll  w-full  h-screen no-scrollbar">
        <div className="flex justify-between gap-x-6 pr-8 px-8 min-w-fit border-b-2 items-center font-semibold py-6 ">
          <p className=" min-w-[15rem]">Name</p>
          <p className="min-w-[15rem] ">Email</p>
          <p className="min-w-[15rem] ">Phone number</p>
          <p className="min-w-[9rem] ">Gender</p>
          <p className="min-w-[9rem] ">Status</p>
          <p className="w-7"></p>
        </div>

        <div className="flex flex-col gap-y-2 py-2 px-1 ">
          {allCustomersData?.map((customer) => {
            return (
              <div
                key={customer?.id}
                className="relative  flex items-center gap-x-6 pr-8 px-8 cursor-pointer rounded-xl bg-[#F4F7F9] hover:bg-[#FFF] py-6 min-w-fit shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] justify-between"
              >
                <p className="flex min-w-[15rem] items-center gap-x-2 font-semibold ">
                  <img src={burger} alt="" className="w-10" />
                  {customer?.username}
                </p>
                <p className="min-w-[15rem] ">{customer?.email}</p>
                <p className="min-w-[15rem] ">24/04/2024</p>
                <p className="min-w-[9rem]">Male</p>
                <p className="min-w-[9rem]  bg-green-200 text-green-700 text-center rounded-2xl ">
                  {customer?.status}
                </p>
                <p>
                  <EllipsisHorizontalIcon
                    onClick={() => handleToggle(customer?.id)}
                    className="w-7"
                  />
                </p>
                <div
                  className={`${
                    options ? "block" : "hidden"
                  } bg-light border p-2 z-50 absolute right-0 top-14 rounded-xl`}
                >
                  <div className="flex items-center gap-x-2 py-2 px-4 border rounded-lg border-red-500">
                    <PencilSquareIcon className="w-5" />
                    <p>Edit</p>
                  </div>
                  <div
                    onClick={() => handleDeleteCustomer(customer?.id)}
                    className="flex items-center gap-x-2 py-2 rounded-lg px-4"
                  >
                    <TrashIcon className="w-5" />
                    <p>Delete</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Customers;
