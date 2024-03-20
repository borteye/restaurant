import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import React, { FC } from "react";

type Props = {
  handleChange?: () => void;
  handleShowPassword?: () => void;
  showPassword?: boolean;
  type?: string;
};

const InputField: FC<Props> = ({
  handleChange,
  handleShowPassword,
  type,
  showPassword,
}) => {
  return (
    <>
      <input
        type={showPassword ? "text" : type === "email" ? "email":"password"  }
        className="bg-transparent w-full outline-none  "
      />
      {showPassword ? (
        <EyeIcon
          onClick={handleShowPassword}
          className="w-7 text-black cursor-pointer"
        />
      ) : (
        <EyeSlashIcon
          onClick={handleShowPassword}
          className="w-7 text-black cursor-pointer"
        />
      )}
    </>
  );
};

export default InputField;
