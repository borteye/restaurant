import { StarIcon } from "@heroicons/react/24/solid";
import React from "react";

type Props = {};

const OrderCard = (props: Props) => {
  return (
    <div className="flex items-center gap-x-6 text-light">
      <div className="bg-secondary w-fit p-3 rounded-xl">
        <StarIcon className="w-7" />
      </div>
      <div className="text-black">
        <p className="text-sm text-secondary">Satisfaction Rating</p>
        <h1 className="text-2xl font-bold ">95%</h1>
      </div>
    </div>
  );
};

export default OrderCard;
