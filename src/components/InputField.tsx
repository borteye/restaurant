import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import React, { FC } from "react";
import { TextFieldProps } from "../types/forms";

const InputField: FC<TextFieldProps> = ({
  handleChange,
  togglePasswordVisibility,
  type,
  showPassword,
  value,
  name,
  password,
  usernameError,
  emailError,
  touchedUsername,
  touchedEmail,
  handleBlur,
}) => {
  return (
    <>
      {!password && (
        <input
          type={type}
          className={`w-full outline-none text-black rounded-md ${
            type !== "password" && "bg-tertiary px-4 py-1"
          } ${
            (usernameError && touchedUsername) || (emailError && touchedEmail)
              ? "input-error"
              : ""
          }  `}
          value={value}
          name={name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      )}
      {password && (
        <div className="w-full flex justify-between">
          <input
            type={showPassword ? "text" : "password"}
            className={`w-full outline-none text-black rounded-md ${
              type !== "password" && "bg-tertiary px-4 py-1"
            } ${usernameError && touchedUsername ? "input-error" : ""}  `}
            value={value}
            name={name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {showPassword ? (
            <EyeIcon
              onClick={togglePasswordVisibility}
              className="w-6 sm:w-7 text-black cursor-pointer mr-4"
            />
          ) : (
            <EyeSlashIcon
              onClick={togglePasswordVisibility}
              className="w-6 sm:w-7 text-black cursor-pointer mr-4"
            />
          )}
        </div>
      )}
    </>
  );
};

export default InputField;
