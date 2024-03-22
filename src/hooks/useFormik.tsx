import { useFormik } from "formik";
import { authSchema } from "../AuthenticationSchema";

export const useFormikHook = () => {
  const onSubmit = () => {
    console.log("submitted");
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: authSchema,
    onSubmit,
  });
  console.log(formik);
  return formik;
};
