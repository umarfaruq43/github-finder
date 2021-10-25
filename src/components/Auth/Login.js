import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import Validation from "./Validation";

const Login = () => {
  const initialData = {
    userName: "",
    password: "",
  };
  const [showPass, setShowPass] = useState(false);
  const [userDetails, setUserDetails] = useState(initialData);
  const [err, setErr] = useState({});
  const handleShow = () => {
    setShowPass(!showPass);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErr(Validation(userDetails));
  };

  const { userName, password } = userDetails;
  return (
    <AuthLayout>
      <div className="w-full sm:w-1/2 md:w-2/6 lg:w-2/6 middle_page px-3 ">
        <div className=" text-white">
          <div className="text-center  mb-14">
            <h1 className=" text-2xl "> Welcome Back! </h1>
            <span> Login to continue </span>
          </div>
          <form action="">
            {/* USER NAME  */}

            <div className="mb-6">
              <div className="relative pb-1">
                <input
                  type="text"
                  className=" w-full bg-primary_light p-4 rounded-md text-md focus:outline-none"
                  placeholder="Username"
                  name="userName"
                  onChange={handleChange}
                  value={userName}
                />
                <FaUser className="right absolute top-1/2 transform -translate-y-1/2 right-4" />
              </div>
              {err.userName && (
                <p className="text-red-700">
                  <sup> *</sup> {err.userName}
                </p>
              )}
            </div>

            {/* PASSWORD  */}

            <div>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  className=" right   w-full bg-primary_light p-4 rounded-md text-md focus:outline-none"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  value={password}
                />
                {showPass ? (
                  <FaEyeSlash
                    onClick={handleShow}
                    className="right absolute top-1/2 transform -translate-y-1/2 right-4 bg-primary_light cursor-pointer"
                  />
                ) : (
                  <FaEye
                    onClick={handleShow}
                    className="right absolute top-1/2 transform -translate-y-1/2 right-4 bg-primary_light cursor-pointer"
                  />
                )}
              </div>
              {err.password && (
                <p className="text-red-700">
                  <sup> *</sup> {err.password}
                </p>
              )}
            </div>

            {/* FORGET PASSWORD LINK  */}
            <div className="text-right mt-5 mb-10">
              <NavLink to="/forgetpassword" className="underline">
                Forget Password?
              </NavLink>
            </div>
            <div>
              <input
                type="submit"
                className="input bg-secondary_light w-full  p-4 rounded-md text-md focus:outline-none cursor-pointer  text-lg"
                value="Submit"
                onClick={handleSubmit}
              />
            </div>

            <div className=" mt-12 text-center text-secondary_light">
              <NavLink to="/signup" className="underline">
                Create New Accuont
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;
