import * as yup from "yup";

const passwordValidRegex: RegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const authSchema = yup.object().shape({
  email: yup
    .string()
    .matches(emailRegex, { message: "Enter a valid email" })
    .required("Requried"),
  password: yup
    .string()
    .min(8)
    .matches(passwordValidRegex, { message: "Please create a strong password" })
    .required("Required"),
});
