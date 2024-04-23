import { StarIcon } from "@heroicons/react/24/solid";
import React from "react";

type Props = {
  title: string;
  number: number;
  color?: string;
};

const InfoCard = ({ title, number, color }: Props) => {
  return (
    <div className="flex items-center gap-x-6 text-light">
      <div
        className={`${
          color ? `bg-[${color}]`: "bg-secondary"
        }  w-fit p-3 rounded-xl`}
      >
        <StarIcon className="w-7" />
      </div>
      <div className="text-black">
        <p className="text-sm text-secondary">{title}</p>
        <h1 className="text-2xl font-bold ">{number}</h1>
      </div>
    </div>
  );
};

export default InfoCard;
