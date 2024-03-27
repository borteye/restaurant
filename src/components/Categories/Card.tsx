import React from "react";
import pizzaIcon from "../../assets/pizza_icon.png";


type Props = {};

const Card = (props: Props) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-count flex flex-col w-20 h-20 justify-center items-center p-4 rounded-[50%]">
        <img src={pizzaIcon} alt="category icon" className="" />
      </div>
      <p className="text-secondary font-bold">Pizza</p>
    </div>
  );
};

export default Card;
