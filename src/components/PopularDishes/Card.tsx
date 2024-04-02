import React, { FC } from "react";
import burger from "../../assets/burger.png";
import { PopularDishesCardProps } from "../../types/dishes";
import { selectCountryId } from "../../redux/features/filterSlice";
import { useSelector } from "react-redux";
type Props = {};

const Card: FC<PopularDishesCardProps> = ({ data }) => {
  const selectedCountryId = useSelector(selectCountryId);
  return (
    <div className="flex gap-x-8 overflow-x-scroll no-scrollbar">
      {selectedCountryId !== null
        ? data
            ?.filter((doc) => doc?.countryid === selectedCountryId)
            ?.map((dish, i) => {
              return (
                <div
                  key={i}
                  className=" max-w-[15rem] min-w-[15rem] cursor-pointer  font-bold"
                >
                  <div className="flex justify-center">
                    <img src={burger} alt="burger" className="w-24 " />
                  </div>
                  <div className="bg-[#313131] min-h-[270px] text-light p-2 flex flex-col rounded-xl -mt-12 ">
                    <div className="mt-16 flex flex-col gap-y-2 justify-between">
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
                        <div className="text-right">
                          <p className="text-xs text-secondary">
                            {dish?.available}
                          </p>
                          <div className=" ">Available</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
        : data?.map((dish, i) => {
            return (
              <div
                key={i}
                className=" max-w-[15rem] min-w-[15rem] cursor-pointer  font-bold"
              >
                <div className="flex justify-center">
                  <img src={burger} alt="burger" className="w-24 " />
                </div>
                <div className="bg-[#313131] min-h-[270px] text-light p-2 flex flex-col rounded-xl -mt-12 ">
                  <div className="mt-16 flex flex-col gap-y-2 justify-between">
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
                      <div className="text-right">
                        <p className="text-xs text-secondary">
                          {dish?.available}
                        </p>
                        <div className=" ">Available</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

      {/* selectCountryId !== null ? data
        ?.filter((doc) => doc.countryid === selectedCountryId)
        .map((dish, i) => {
          return (
            <div
              key={i}
              className=" max-w-[15rem] min-w-[15rem] cursor-pointer  font-bold"
            >
              <div className="flex justify-center">
                <img src={burger} alt="burger" className="w-24 " />
              </div>
              <div className="bg-[#313131] min-h-[270px] text-light p-2 flex flex-col rounded-xl -mt-12 ">
                <div className="mt-16 flex flex-col gap-y-2 justify-between">
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
                    <div className="text-right">
                      <p className="text-xs text-secondary">
                        {dish?.available}
                      </p>
                      <div className=" ">Available</div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
    </div>
  );
};

export default Card;
