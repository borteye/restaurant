import React from "react";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { ClockIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import Card from "./Card";

type Props = {};

const Cart = (props: Props) => {
  return (
    <div className=" bg-[#525252] w-[25%] rounded-3xl p-8 fixed flex flex-col justify-between top-4 inset-y-4 right-4">
      <div className="bg-[#6D6D6D] p-6 flex flex-col gap-y-4 rounded-3xl">
        <h1 className="text-2xl font-semibold ">DELIVERY ADDRESS</h1>
        <p className="text-sm flex items-center gap-x-2">
          <MapPinIcon className="w-5" />
          Po. 1478, Street No. 52, West New York
        </p>
        <p className="text-sm flex items-center gap-x-2">
          <ClockIcon className="w-5" />
          20 min
        </p>
      </div>
      <div className="flex items-center justify-between">
        <p className="flex items-center gap-x-3">
          <ShoppingCartIcon className="w-7" />
          Cart
        </p>
        <p className="text-[#a7a7a7]">Order ID: #1099 </p>
      </div>
      <div className="flex flex-col gap-y-10  ">
        <Card />
        <Card />
      </div>
      <div className="text-sm">
        <div className="flex justify-between">
          <p>Sub Total</p>
          <p>$155.20</p>
        </div>
        <div className="flex justify-between">
          <p>Delivery Charge</p>
          <p>$10</p>
        </div>

        <hr className="border-t-2 border-[#6D6D6D] my-6" />
        <div className="flex text-xl justify-between font-semibold">
          <p>TOTAL</p>
          <p>$165.20</p>
        </div>
      </div>
      <button className="bg-[#1D1D1D] w-full text-lg py-3 rounded-full font-semibold">
        Confirm Order
      </button>
    </div>
  );
};

export default Cart;
