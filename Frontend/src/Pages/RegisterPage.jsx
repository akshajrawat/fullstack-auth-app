import React, { useState } from "react";
import FormBuilder from "../Components/FormBuilder";
import study from "../Assets/study3.jpg";
import { Link } from "react-router-dom";

export const formSchema = [
  {
    name: "name",
    label: "Full Name",
    type: "text",
    placeholder: "Enter your full name",
    required: true,
    validation: {
      minLength: {
        value: 2,
        message: "Name must be at least 2 characters",
      },
    },
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter your email",
    required: true,
    validation: {
      pattern: {
        value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
        message: "Enter a valid email address",
      },
    },
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
    required: true,
    validation: {
      minLength: {
        value: 6,
        message: "Password must be at least 6 characters",
      },
    },
  },
];

const RegisterPage = () => {
  const onSubmit = () => {};

  return (
    // login page start
    <div className="h-full w-full flex justify-center items-center bg-[#AEC8A4]">
      {/* login form */}
      <div className="h-[90%] w-[70%] shadow-2xl rounded-xl overflow-hidden bg-[#FFF9E5] flex">
        {/* img section */}
        <div className="h-full w-[35%]">
          <img className="w-full h-full object-cover" src={study} alt="study" />
        </div>

        {/* login section */}
        <div className="h-full w-[65%] flex flex-col justify-start items-center gap-3 pt-15">
          <div className=" flex flex-col justify-center items-center">
            <h3 className=" text-4xl font-bold text-[#0C363C]">
              Welcome to AuthApp
            </h3>
            <p className="w-[60%] text-center font-semibold text-[#0c363c99]">
              Sign up to access protected routes and role-based features
            </p>
          </div>

          {/* inputs */}
          <div className="w-[60%] flex flex-col gap-2">
            <FormBuilder schema={formSchema} onSubmit={onSubmit} />

            {/* seprtation */}
            <div className="flex items-center w-full my-2">
              <hr className="flex-grow border-t border-[#0C363C]" />
              <span className="mx-4 text-[#0C363C] font-medium">OR</span>
              <hr className="flex-grow border-t border-[#0C363C]" />
            </div>

            <div className="flex gap-3 mx-auto font-semibold">
              <p className="text-[#0C363C]">Already have an account?</p>
              <Link className="text-blue-600" to={""}>
                {" "}
                Login{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
