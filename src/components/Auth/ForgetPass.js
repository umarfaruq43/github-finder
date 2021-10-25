import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import Validation from "./Validation";

const ForgetPass = () => {
  const [userEmail, setUserEmail] = useState("");
  const [err, setErr] = useState({});
  const handleChange = (e) => {
    setUserEmail(e.traget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErr(Validation(userEmail));
  };

  return (
    <AuthLayout>
      <div className="w-full sm:w-1/2 md:w-2/6 lg:w-2/6 middle_page px-3 ">
        <div className=" text-white">
          <div className="text-center  mb-14">
            <h1 className=" text-2xl "> Forget Password! </h1>
          </div>
          <form action="">
            {/* Email  */}

            <div className="mb-10">
              <div className="relative pb-1">
                <input
                  type="text"
                  className=" w-full bg-primary_light p-4 rounded-md text-md focus:outline-none"
                  placeholder="Username"
                  name="email"
                  onChange={handleChange}
                  value={userEmail}
                />
                <FaUser className="right absolute top-1/2 transform -translate-y-1/2 right-4" />
              </div>

              {err.userName && (
                <p className="text-red-700">
                  <sup> *</sup> {err.userName}
                </p>
              )}
            </div>

            <div>
              <input
                type="submit"
                className="input bg-secondary_light w-full  p-4 rounded-md text-md focus:outline-none cursor-pointer  text-lg"
                value="Reset Password"
                onClick={handleSubmit}
              />
            </div>

            <div className=" mt-12 text-center text-secondary_light">
              <NavLink to="/login" className="underline">
                Login
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </AuthLayout>
  );
};

export default ForgetPass;
