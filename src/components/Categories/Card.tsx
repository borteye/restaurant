import { FC } from "react";
import { CategoryCardProps } from "../../types/dishes";

const Card: FC<CategoryCardProps> = ({ item }) => {
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
};

export default Card;
