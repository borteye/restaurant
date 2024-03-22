import { useState } from "react";
import { useNavigate } from "react-router-dom";
import github from "../assets/github.svg";
import google from "../assets/google.svg";
import logo from "../assets/logo.png";
import foodImg from "../assets/signup.jpg";
import InputField from "../components/InputField";
import { useFormik } from "formik";
import { authSchema } from "../AuthenticationSchema";
import { MyFormValues } from "../types/forms";

type Props = {};

const SignUp = (props: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(true);
  };

  const login = () => {
    navigate("/login");
  };
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },

    validationSchema: authSchema,

    onSubmit: (values: MyFormValues) => {
      console.log(values);
    },
  });

  const url = "https://dummyjson.com/auth/login";
  const method = "POST";

  const { values, touched, handleBlur, handleChange, handleSubmit, errors } =
    formik;

  return (
    <>
      <div className="text-light bg-signupImage md:bg-none fixed md:relative  inset-0 bg-cover bg-center bg-no-repeat flex flex-col justify-between  md:flex-row-reverse">
        <div className=" md:bg-texture md:bg-cover md:bg-center  md:w-1/2">
          <div className="bg-[#0000007e] h-screen overflow-y-scroll no-scrollbar  px-6 md:px-16 py-8 ">
            <div className="flex flex-col gap-y-4 max-w-max_lg lg:mx-auto">
              <img src={logo} alt="logo" className="w-28 lg:w-36 " />
              <h1 className="text-authClamp font-bold">Get Started</h1>
              <p className="text-tertia">
                Sign in with your email address and password.
              </p>
              <form className="flex flex-col gap-y-10">
                <div className="flex flex-col gap-y-2">
                  <label className="text-sm text-secondary">
                    Email Address
                  </label>
                  <div className=" ">
                    <InputField
                      type={"email"}
                      value={values.username}
                      name={"email"}
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
                      errors.password && touched.password ? "input-error" : ""
                    } `}
                  >
                    <InputField
                      togglePasswordVisibility={togglePasswordVisibility}
                      showPassword={showPassword}
                      value={values.password}
                      name={"password"}
                      handleChange={handleChange}
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
                <div>
                  <button className="bg-black text- font-semibold px-12 py-3 w-full md:w-fit">
                    Sign Up
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
                Already have an account?{" "}
                <span
                  className="text-green-800 font-bold cursor-pointer"
                  onClick={login}
                >
                  Login
                </span>
              </p>
            </div>
          </div>
        </div>
        <img
          src={foodImg}
          alt="login_img"
          className="w-1/2 h-screen object-cover hidden md:block"
        />
      </div>
    </>
  );
};

export default SignUp;
