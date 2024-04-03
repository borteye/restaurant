import React, { FC, useState } from "react";
import burger from "../../assets/burger.png";
import { BasicCartInfo, PopularDishesCardProps } from "../../types/dishes";
import { selectCountryId } from "../../redux/features/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import {
  addToCart,
  cartItems,
  updateCart,
} from "../../redux/features/cartSlice";
type Props = {};

const Card: FC<PopularDishesCardProps> = ({ dish }) => {
  const dispatch = useDispatch();

  const cart = useSelector(cartItems);

  const exist = cart.find((doc) => doc.dishid === dish.dishid);

  const handleAddToCart = (dishid: number, name: string, price: string) => {
    dispatch(
      addToCart({
        dishid: dishid,
        name: name,
        price: price,
        quantity: 1,
        totalPrice: price,
      })
    );
  };
  return (
    <div className=" max-w-[15rem] min-w-[15rem] cursor-pointer  font-bold">
      <div className="flex justify-center">
        <img src={burger} alt="burger" className="w-24 " />
      </div>
      <div className="bg-[#313131] min-h-[270px] text-light p-2 flex flex-col rounded-xl -mt-12">
        <div className="mt-16 flex flex-col gap-y-2 justify-between h-[200px]">
          <h1 className="text-center">{dish?.name}</h1>
          <p className="font-normal text-center line-clamp-3 hover:line-clamp-none leading-none text-sm text-secondary">
            {dish?.description}
          </p>
          <div className="text-center">
            <p className="text-xs text-secondary">Starting From</p>
            <p>${dish?.price}</p>
          </div>
          <div className="flex items-center justify-between text-sm ">
            <div>4.5</div>
            <button
              onClick={() => {
                if (exist) {
                  dispatch(updateCart(1));
                } else if (!exist) {
                  handleAddToCart(dish?.dishid, dish?.name, dish?.price);
                }
              }}
              className="bg-gradient-to-r cursor-pointer from-cartGradientStart to-cartGradientEnd px-2 py-[0.125rem] rounded-3xl"
            >
              <ShoppingCartIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
