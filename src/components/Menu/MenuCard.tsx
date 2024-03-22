import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import burger from "../../assets/burger.png";
import { FC } from "react";
import { FoodDetails } from "../../types/Dishes/typings";

type Props = {
  dummyData: FoodDetails[];
};

const MenuCard: FC<Props> = ({ dummyData }) => {
  
  return (
    <>
      {dummyData?.map((dish, i) => {
        return (
          <div
            className="text-light rounded-xl z-10 shadow-[0_3px_10px_rgb(0,0,0,0.2)]  bg-texture bg-cover bg-center"
            key={i}
          >
            <div className="bg-[#0000008c] h-full flex flex-col gap-y-4 justify-center items-center  rounded-xl px-4 py-4">
              <div className="w-full">
                <p className="font-bold">{dish?.price}</p>
              </div>

              <img src={dish?.image} alt="burger" className="lg:w-32 w-20" />
              <div>
                <h1 className="font-bold">{dish?.name}</h1>
                <p className="text-sm w-full text-secondary  text-ellipsis leading-none">
             {dish?.description}
                </p>
              </div>
              <div className="w-full flex items-center text-sm gap-x-4">
                <div className="flex gap-x-2 w-fit bg-count px-2  py-[0.125rem] rounded-full ">
                  <p>-</p>
                  <p>1</p>
                  <p>+</p>
                </div>
                <button className="bg-gradient-to-r from-cartGradientStart to-cartGradientEnd px-2 py-[0.125rem] rounded-3xl">
                  <ShoppingCartIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MenuCard;
