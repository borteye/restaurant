import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React, { FC } from "react";

type Props = {
  placeHolder: string;
  width: string;
  boxShadow: boolean;
};

const SearchInput: FC<Props> = ({ placeHolder, width, boxShadow }) => {
  return (
    <div
      className={`flex items-center border border-[#363636b0]  rounded-3xl ${width}   `}
    >
      <div className="py-2 px-4 bg-count text-light  rounded-3xl">
        <MagnifyingGlassIcon className="w-5" />
      </div>
      <input
        type="text"
        className="bg-transparent outline-none w-full px-4 text-base "
        placeholder={placeHolder}
      />
    </div>
  );
};

export default SearchInput;
