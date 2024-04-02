import React, { FC } from "react";
import pizzaIcon from "../../assets/Categories/usa.jpg";
import { CategoryCardProps } from "../../types/dishes";

const Card: FC<CategoryCardProps> = ({ data }) => {
  return (
    <div className="flex gap-x-16  justify-center items-center">
      {data?.map((item) => {
        return (
          <div
            key={item?.categoryid}
            className="bg-[#292929] cursor-pointer flex flex-col w-28 h-28 justify-center items-center p-4 rounded-[50%] "
          >
            <p className="text-secondary font-bold text-sm text-center">
              {item?.name}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
