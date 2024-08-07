import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useSelector } from "react-redux";
import { cartItems } from "../../redux/features/cartSlice";
import totalPrice from "../../utils/totalPrice";
import Card from "./Card";

type Props = {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  setIsCheckoutActive: React.Dispatch<React.SetStateAction<boolean>>;
};

const Cart = ({ isActive, setIsActive, setIsCheckoutActive }: Props) => {
  const cart = useSelector(cartItems);
  const total = totalPrice(cart);

  const isButtonDisabled = () => {
    const checkDisable = cart?.length ? false : true;
    return checkDisable;
  };

  const handleConfirmOrder = () => {
    setIsActive(false);
    setIsCheckoutActive(true);
  };

  return (
    <div
      className={` bg-[#525252] w-[25%] rounded-3xl p-8 fixed ${
        isActive ? "flex" : "hidden"
      } flex-col justify-between top-4 inset-y-4 right-4`}
    >
    
      <p className="flex items-center gap-x-3">
        <ShoppingCartIcon className="w-7" />
        Cart
      </p>
      <div className="flex flex-col gap-y-10  ">
        {cart?.length ? (
          cart?.map((dish, i) => {
            return <Card dish={dish} key={i} />;
          })
        ) : (
          <p className="text-center text-2xl text-[#a7a7a7]">
            Your cart is empty . . .
          </p>
        )}
      </div>
      <div className="text-sm">
        <div className="flex justify-between">
          <p>Sub Total</p>
          <p>${total?.toFixed(2)}</p>
        </div>
        <div className="flex justify-between">
          <p>Delivery Charge</p>
          <p>$10</p>
        </div>

        <hr className="border-t-2 border-[#6D6D6D] my-6" />
        <div className="flex text-xl justify-between font-semibold">
          <p>TOTAL</p>
          <p>${total?.toFixed(2)}</p>
        </div>
      </div>
      <button
        disabled={isButtonDisabled()}
        onClick={handleConfirmOrder}
        className="bg-[#1D1D1D] w-full text-lg py-3 rounded-full font-semibold disabled:bg-[#a7a7a7c0] disabled:text-[#525252]"
      >
        Confirm Order
      </button>
    </div>
  );
};

export default Cart;
