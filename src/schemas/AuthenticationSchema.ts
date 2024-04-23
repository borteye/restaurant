import * as yup from "yup";

const passwordValidRegex: RegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneNumberRegex: RegExp = /^\d+$/;
export const authSignupSchema = yup.object().shape({
  username: yup.string().max(15, "too long").required("Required"),
  email: yup
    .string()
    .matches(emailRegex, { message: "Enter a valid email" })
    .required("Required"),

  password: yup
    .string()
    .min(8)
    .matches(passwordValidRegex, { message: "Please create a strong password" })
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
  phone_number: yup
    .string()
    .min(10)
    .max(10)
    .matches(phoneNumberRegex, { message: "Enter a vaild phone number" })
    .required("Required"),
});

export const authLoginSchema = yup.object().shape({
  username: yup.string().max(15, "too long").required("Required"),
  password: yup
    .string()
    .min(8, "Password must be a minimum of 8 characters")
    .required("Required"),
});
