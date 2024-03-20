import React, { FC, useState } from "react";
import tomato from "../../assets/tomato.png";
import MenuCard from "./MenuCard";
import { dummyData } from "../../dummyData";

type Props = {
  menuRef: React.MutableRefObject<null>;
};

const Menu: FC<Props> = ({ menuRef }) => {
  const [selectCategory, setSelectCategory] = useState<string>("Ghanaian");

  function handleCategory(category: string) {
    setSelectCategory(category);
  }

  const filteredData = dummyData?.filter(
    (doc) => doc?.category === selectCategory
  );

  const category = [...new Set(dummyData?.map((val) => val?.category))];
  return (
    <div className="w-full bg-black py-20" ref={menuRef}>
      <div className="relative max-w-[1440px] flex flex-col gap-y-12 mx-auto px-6 md:px-16">
        <h1 className="text-3xl font-bold text-light">MENU</h1>
        <div>
          <ul className=" flex gap-x-8 overflow-x-scroll no-scrollbar ">
            {category?.map((item) => {
              return (
                <li
                  className={`text-light cursor-pointer ${
                    selectCategory === item
                      ? "bg-gradient-to-r from-gradientStart to-gradientEnd"
                      : "bg-overlay text-secondary"
                  }  py-2 font-semibold px-4 w-fit rounded-full`}
                  onClick={() => handleCategory(item)}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="grid grid-cols-1 xs:grid-cols-2  md:grid-cols-3 lg:grid-cols-4  gap-4 lg:gap-8 ">
          <MenuCard dummyData={filteredData} />
        </div>
        <div className=" mt-8 flex justify-center items-center">
          <button className="border-2 border-secondary text-secondary font-semibold py-2 px-4 w-fit rounded-full">
            Czarnjdzke
          </button>
        </div>
        <img
          src={tomato}
          alt="tomato"
          className="absolute  w-32 md:w-44 right-0 bottom-2 filter blur-[2px]"
        />
        {/* <img
          src={chili}
          alt="chili"
          className="absolute transform   filter blur-[1.5px] -left-10 top-48 lg:bottom-12  md:w-44 "
        /> */}
      </div>
    </div>
  );
};

export default Menu;
