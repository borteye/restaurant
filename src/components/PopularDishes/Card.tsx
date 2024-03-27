import React from "react";
import burger from "../../assets/burger.png";
type Props = {};

const Card = (props: Props) => {
  return (
    <div>
      <div className="w-[11.5rem] font-bold">
        <div className="flex justify-center">
          <img src={burger} alt="burger" className="w-24 " />
        </div>
        <div className="bg-black text-light p-2 flex flex-col rounded-xl -mt-12 ">
          <div className="mt-16 flex flex-col gap-y-2">
            <h1 className="text-center">Hamburger</h1>
            <div className="text-center">
              <p className="text-xs text-secondary">Starting From</p>
              <p>$10.00</p>
            </div>
            <div className="flex items-center justify-between text-sm ">
              <div>4.5</div>
              <div className="text-right">
                <p className="text-xs text-secondary">2130</p>
                <div className="-mt-1 ">Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
