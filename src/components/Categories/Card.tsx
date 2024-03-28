import React from "react";
import pizzaIcon from "../../assets/Categories/usa.jpg";


type Props = {};

const Card = (props: Props) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-[#292929] flex flex-col w-24 h-24 justify-center items-center p-4 rounded-[50%] ">
        <img src={pizzaIcon} alt="category icon" className="" />
        <p className="text-secondary font-bold">USA</p>
      </div>
    
    </div>
  );
};

export default Card;
