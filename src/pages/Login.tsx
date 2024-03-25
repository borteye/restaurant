import { useState } from "react";
import { useNavigate } from "react-router-dom";
import github from "../assets/github.svg";
import google from "../assets/google.svg";
import food from "../assets/login.jpg";
import logo from "../assets/logo.png";
import InputField from "../components/InputField";
import { useFormik } from "formik";

import { fetchData } from "../hooks/fetch";

import { authSchema } from "../AuthenticationSchema";

type Props = {};

const Login = (props: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(() => !showPassword);
  };

  const signUp = () => {
    navigate("/sign-up");
  };

  //  const url = "";
  // const method = "";

  // const fetchData = (values:MyFormValues) => {
  //   const url = 'https://dummyjson.com/auth/login';
  //   const method = 'POST'; // or any other method you want
  //   return useFetch({ url, method, body: values });
  // };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },

    validationSchema: authSchema,

    onSubmit: async (values) => {
      try {
        const url = `http://localhost:5000/auth/login`;
        const method = "GET";
        fetchData({ url, method });

        // await useFetch({ url, method, body: values });
      } catch (error) {
        console.error(error);
      }
    },
  });

  console.log(formik.errors);

  const { values, touched, handleBlur, handleChange, handleSubmit, errors } =
    formik;

  return (
    <>
      <div className="text-light bg-loginImage md:bg-none fixed md:relative inset-0 bg-cover bg-center bg-no-repeat flex flex-col justify-between md:flex-row ">
        <div className=" md:bg-texture md:bg-cover md:bg-center  md:w-1/2">
          <div className="bg-[#0000007e] h-screen overflow-y-scroll no-scrollbar px-6 md:px-16 py-8 ">
            <div className="flex flex-col gap-y-4 max-w-max_lg lg:mx-auto">
              <img src={logo} alt="logo" className="w-28 lg:w-36 " />
              <h1 className="text-authClamp font-bold leading-none">
                Welcome Back
              </h1>
              <p className="text-tertia">
                Sign in with your username and password.
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col gap-y-10">
                <div className="flex flex-col gap-y-2">
                  <label className="text-sm text-secondary">Username</label>
                  <div className=" ">
                    <InputField
                      type={"text"}
                      value={values.username}
                      name={"username"}
                      handleChange={handleChange}
                      usernameError={errors.username}
                      touchedUsername={touched.username}
                      handleBlur={handleBlur}
                    />
                    {errors.username && touched.username ? (
                      <div className="text-error">{errors.username}</div>
                    ) : (
                      false
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-y-2">
                  <label className="text-sm text-secondary">Password</label>
                  <div
                    className={`bg-tertiary flex items-center rounded-md ${
                      errors.password && touched.password ? "input-error " : ""
                    } `}
                  >
                    <InputField
                      togglePasswordVisibility={togglePasswordVisibility}
                      showPassword={showPassword}
                      value={values.password}
                      name={"password"}
                      handleChange={handleChange}
                      password={true}
                      handleBlur={handleBlur}
                    />
                  </div>
                  {errors.password && touched.password ? (
                    <div className="text-error mt-[-0.5rem] ">
                      {errors.password}
                    </div>
                  ) : (
                    false
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-x-2">
                    <input type="checkbox" /> <p>Remember me</p>
                  </div>
                  <p className="text-secondary">Forgot Password?</p>
                </div>
                <div>
                  <button
                    type="submit"
                    className="bg-black text- font-semibold px-12 py-3 w-full md:w-fit"
                  >
                    Sign In
                  </button>
                </div>
              </form>
              <p className="text-center relative or">OR</p>
              <div className="flex justify-center gap-x-8">
                <button className="bg-tertiary p-2 rounded-md">
                  <img src={github} alt="github" className="w-9" />
                </button>
                <button className="bg-tertiary p-2 rounded-md">
                  <img src={google} alt="github" className="w-9" />
                </button>
              </div>
              <p>
                Don't have an account?{" "}
                <span
                  className="text-green-800 font-bold cursor-pointer"
                  onClick={signUp}
                >
                  Sign Up
                </span>
              </p>
            </div>
          </div>
        </div>
        <img
          src={food}
          alt="login  image"
          className="w-1/2 h-screen object-cover hidden md:block"
        />
      </div>
    </>
  );
};

export default Login;
