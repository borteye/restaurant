import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import React, { FC } from "react";
import { useFormikHook } from "../hooks/useFormik";
import { TextFieldProps } from "../types/Forms/typings";

const InputField: FC<TextFieldProps> = ({
  handleChange,
  togglePasswordVisibility,
  type,
  showPassword,
  value,
  name,
  emailError,
  touchedEmail,
  handleBlur,
}) => {
  return (
    <>
      <input
        type={showPassword ? "text" : type === "email" ? "email" : "password"}
        className={`w-full outline-none text-black rounded-md ${
          type !== "password" && "bg-tertiary px-4 py-1"
        } ${emailError && touchedEmail ? "input-error" : ""}  `}
        value={value}
        name={name}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {showPassword ? (
        <EyeIcon
          onClick={togglePasswordVisibility}
          className="w-7 text-black cursor-pointer mr-4"
        />
      ) : (
        <EyeSlashIcon
          onClick={togglePasswordVisibility}
          className="w-7 text-black cursor-pointer mr-4"
        />
      )}
    </>
  );
};

export default InputField;
