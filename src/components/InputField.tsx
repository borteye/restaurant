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
  background,
  border_bottom,
  rounded,
  width,
  fullNameError,
  touchedFullName,
  streetNameError,
  touchedStreetName,
  streetNumberError,
  touchedStreetNumber,
  postalCodeError,
  touchedPostalCode,
  cityError,
  touchedCity,
  phoneNumberError,
  touchedPhoneNumber
}) => {
  return (
    <>
      {!password && (
        <input
          type={type}
          className={`${width} outline-none text-black  ${rounded} ${
            type !== "password" && `bg-${background} px-4 py-1`
          } ${
            (usernameError && touchedUsername) ||
            (emailError && touchedEmail) ||
            (fullNameError && touchedFullName) ||
            (streetNameError && touchedStreetName) ||
            (streetNumberError && touchedStreetNumber) ||
            (postalCodeError && touchedPostalCode) ||
            (cityError && touchedCity)
              ? "input-error"
              : ""
          } ${border_bottom}  `}
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
