import React, { FC } from "react";
import burger from "../../assets/burger.png";
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/outline";
import { CartCardProps } from "../../types/dishes";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../redux/features/cartSlice";

const Card: FC<CartCardProps> = ({ dish }) => {
  const dispatch = useDispatch();

  const incrementItemQuantity = (dishid: number) => {
    dispatch(increaseQuantity(dishid));
  };

  const adjustItemQuantity = (dishid: number, quantity: number) => {
    if (quantity === 1) {
      handleRemoveItem(dishid);
    } else if (quantity > 0) {
      dispatch(decreaseQuantity(dishid));
    }
  };
  const handleRemoveItem = (dishid: number) => {
    dispatch(removeFromCart(dishid));
  };
  return (
    <div className="flex items-center justify-between w-full ">
      <img src={burger} alt="cart image" className="w-16" />
      <div className="flex items-center justify-between w-[75%] border-b pb-5 ">
        <div className="flex flex-col gap-y-2 ">
          <h1 className="font-semibold">{dish?.name}</h1>
          <div className="flex items-center gap-x-5">
            <MinusCircleIcon
              className="w-6 cursor-pointer"
              onClick={() => adjustItemQuantity(dish?.dishid, dish?.quantity)}
            />
            <p>{dish?.quantity}</p>
            <PlusCircleIcon
              className="w-6 cursor-pointer"
              onClick={() => incrementItemQuantity(dish?.dishid)}
            />
          </div>
        </div>
        <button
          onClick={() => handleRemoveItem(dish?.dishid)}
          className="bg-light py-1 px-3 rounded-3xl "
        >
          <TrashIcon className="w-6 text-black" />
        </button>
      </div>
    </div>
  );
};

export default Card;
