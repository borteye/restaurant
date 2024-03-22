import * as yup from "yup";

const passwordValidRegex: RegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const authSchema = yup.object().shape({
  username: yup
    .string()
    .max(20, "too long")
    // .matches(emailRegex, { message: "Enter a valid email" })
    .required("Requried"),
  password: yup
    .string()
    .min(2)
    // .matches(passwordValidRegex, { message: "Please create a strong password" })
    .required("Required"),
});
