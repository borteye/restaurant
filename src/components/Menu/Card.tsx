import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import burger from "../../assets/burger.png";
import { FC } from "react";
import { BasicFoodInfo, MenuFoodProps } from "../../types/dishes";
import { useNavigate } from "react-router-dom";

const Card: FC<MenuFoodProps> = ({ dish }) => {
  const navigate = useNavigate();
  const login = () => {
    navigate("/login");
  };
  return (
    <div className="text-light rounded-xl z-10 shadow-[0_3px_10px_rgb(0,0,0,0.2)]  bg-texture bg-cover bg-center">
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
          <div className="flex gap-x-2 w-fit cursor-pointer bg-count px-2  py-[0.125rem] rounded-full ">
            <p onClick={login}>-</p>
            <p>1</p>
            <p onClick={login}>+</p>
          </div>
          <button
            onClick={login}
            className="bg-gradient-to-r cursor-pointer from-cartGradientStart to-cartGradientEnd px-2 py-[0.125rem] rounded-3xl"
          >
            <ShoppingCartIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
