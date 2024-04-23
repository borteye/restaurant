import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authSignupSchema } from "../schemas/AuthenticationSchema";
import github from "../assets/github.svg";
import google from "../assets/google.svg";
import logo from "../assets/logo.png";
import foodImg from "../assets/signup.jpg";
import InputField from "../components/InputField";
import { fetchData } from "../hooks/fetch";
import { SignUpValues } from "../types/forms";
import { signupResponse } from "../types/response";

const SignUp = () => {
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
      email: "",
      password: "",
      confirmPassword: "",
      phone_number: "",
      gender: "",
    },

    validationSchema: authSignupSchema,

    onSubmit: async (values: SignUpValues) => {
      try {
        const url: string = "http://localhost:5000/auth/signup";
        const method = "POST";
        const body = values;

        const { success, error }: signupResponse = await fetchData({
          url,
          method,
          body,
        });

        if (success) {
          console.log(success);
          navigate("/login");
        } else if (error) {
          console.log(error);
          navigate("/signup");
        }
      } catch (error) {
        console.error(error);
      }
    },
  });

  const {
    values,
    touched,
    handleBlur,
    setFieldValue,
    handleChange,
    handleSubmit,
    errors,
  } = formik;

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
                      background={"tertiary"}
                      rounded={"rounded-md"}
                      width={"w-full"}
                    />
                    {errors.username && touched.username ? (
                      <div className="text-error">{errors.username}</div>
                    ) : (
                      false
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-y-2">
                  <label className="text-sm text-secondary">
                    Email Address
                  </label>
                  <div className=" ">
                    <InputField
                      type={"email"}
                      value={values.email}
                      name={"email"}
                      handleChange={handleChange}
                      emailError={errors.email}
                      touchedEmail={touched.email}
                      handleBlur={handleBlur}
                      background={"tertiary"}
                      rounded={"rounded-md"}
                      width={"w-full"}
                    />
                    {errors.email && touched.email ? (
                      <div className="text-error">{errors.email}</div>
                    ) : (
                      false
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-y-2">
                  <label className="text-sm text-secondary">Phone Number</label>
                  <div className=" ">
                    <InputField
                      type={"text"}
                      value={values.phone_number}
                      name={"phone_number"}
                      handleChange={handleChange}
                      phoneNumberError={errors.phone_number}
                      touchedPhoneNumber={touched.phone_number}
                      handleBlur={handleBlur}
                      background={"tertiary"}
                      rounded={"rounded-md"}
                      width={"w-full"}
                    />
                    {errors.phone_number && touched.phone_number ? (
                      <div className="text-error">{errors.phone_number}</div>
                    ) : (
                      false
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-y-2">
                  <label className="text-sm text-secondary">Gender</label>
                  <div className="flex items-center gap-x-8 ">
                    <div className="flex items-center gap-2">
                      <input
                        name="gender"
                        value="Male"
                        checked={values.gender === "Male"}
                        onChange={() => setFieldValue("gender", "Male")}
                        type="radio"
                      />
                      Male
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        name="gender"
                        value="Female"
                        checked={values.gender === "Male"}
                        onChange={() => setFieldValue("gender", "Female")}
                        type="radio"
                      />
                      Female
                    </div>
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
                      password={true}
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
                <div className="flex flex-col gap-y-2">
                  <label className="text-sm text-secondary">
                    Confirm Password
                  </label>
                  <div
                    className={`bg-tertiary flex items-center rounded-md ${
                      errors.confirmPassword && touched.confirmPassword
                        ? "input-error"
                        : ""
                    } `}
                  >
                    <InputField
                      togglePasswordVisibility={togglePasswordVisibility}
                      showPassword={showPassword}
                      value={values.confirmPassword}
                      name={"confirmPassword"}
                      password={true}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                    />
                  </div>
                  {errors.confirmPassword && touched.confirmPassword ? (
                    <div className="text-error mt-[-0.5rem] ">
                      {errors.confirmPassword}
                    </div>
                  ) : (
                    false
                  )}
                </div>
                <div>
                  <button
                    type="submit"
                    className="bg-black text- font-semibold px-12 py-3 w-full md:w-fit"
                  >
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
                Already have an account?
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
