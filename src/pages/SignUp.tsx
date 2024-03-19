import React, { useState } from "react";
import logo from "../assets/logo.png";
import foodImg from "../assets/signup.jpg";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import github from "../assets/github.svg";
import google from "../assets/google.svg";

type Props = {};

const SignUp = (props: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword(true);
  };

  const handleHidePassword = () => {
    setShowPassword(false);
  };

  const login = () => {
    navigate("/login");
  };

  return (
    <>
      <div className="text-light md:text-black bg-signupImage md:bg-none fixed md:relative  inset-0 bg-cover bg-center bg-no-repeat flex flex-col justify-between  md:flex-row-reverse">
        <div className="overflow-y-scroll no-scrollbar max-w-max_lg lg:mx-auto lg:w-1/2 px-6 md:px-16 py-8 h-full bg-[#000000be] md:h-screen md:bg-transparent ">
          <div className="flex flex-col gap-y-4">
            <img src={logo} alt="logo" className="w-28 lg:w-36 " />
            <h1 className="text-clamp font-bold">Get Started</h1>
            <p className="text-tertia">
              Sign in with your email address and password.
            </p>
            <form className="flex flex-col gap-y-10">
              <div className="flex flex-col gap-y-2">
                <label className="text-sm text-secondary">Email Address</label>
                <input
                  type="text"
                  className="bg-tertiary outline-none px-4 py-1"
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <label className="text-sm text-secondary">Password</label>
                <div className="bg-tertiary flex px-4 py-1">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="bg-transparent w-full outline-none  "
                  />
                  {showPassword ? (
                    <EyeIcon
                      onClick={handleHidePassword}
                      className="w-7 text-black cursor-pointer"
                    />
                  ) : (
                    <EyeSlashIcon
                      onClick={handleShowPassword}
                      className="w-7 text-black cursor-pointer"
                    />
                  )}
                </div>
              </div>
              <div>
                <button className="bg-black text-light px-12 py-3 w-full md:w-fit">
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
