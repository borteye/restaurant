import React from "react";
import burger from "../../assets/burger.png";
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/outline";

type Props = {};

const Card = (props: Props) => {
  return (
    <div className="flex items-center justify-between w-full ">
     
        <img src={burger} alt="cart image" className="w-16" />
        <div className="flex items-center justify-between w-[75%] border-b pb-5 ">
          <div className="flex flex-col gap-y-2 ">
            <h1 className="font-semibold">Cheese Burger</h1>
            <div className="flex items-center gap-x-5">
              <MinusCircleIcon className="w-6" />
              <p>2</p>
              <PlusCircleIcon className="w-6" />
            </div>
          </div>
          <button className="bg-light py-1 px-3 rounded-3xl ">
            <TrashIcon className="w-6 text-black" />
          </button>
        </div>
      
    </div>
  );
};

export default Card;
