import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaUser } from "react-icons/fa";
import { BiEnvelope } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import Validation from "./Validation";

const Signup = () => {
  const initialData = {
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
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

  const { userName, password, email, confirmPassword } = userDetails;
  return (
    <AuthLayout>
      {/* <Switch> */}
      <div className="w-full sm:w-1/2 md:w-2/6 lg:w-2/6 middle_page px-2 ">
        <div className=" text-white">
          <div className="text-center  mb-10">
            <h1 className=" text-xl font-bold  ">
              Create New <br className="md:hidden" /> Account
            </h1>
          </div>
          <form action="">
            {/* USERNAME  */}
            <div className="mb-5">
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

            {/* E-MAIL  */}

            <div className="mb-5">
              <div className="relative pb-1 ">
                <input
                  type="email"
                  className=" right   w-full bg-primary_light p-4 rounded-md text-md focus:outline-none"
                  placeholder="E-mail"
                  name="email"
                  onChange={handleChange}
                  value={email}
                />
                <BiEnvelope className="right absolute top-1/2 transform -translate-y-1/2 right-4" />
              </div>

              {err.email && (
                <p className="text-red-700">
                  <sup> *</sup> {err.email}
                </p>
              )}
            </div>

            {/* PASSWORD  */}

            <div className="mb-5">
              <div className="relative pb-1">
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
            {/* CONFIRM PASSWORD  */}

            <div className="relative mb-7 ">
              <input
                type={showPass ? "text" : "password"}
                className=" right   w-full bg-primary_light p-4 rounded-md text-md focus:outline-none"
                placeholder="Confirm Password"
                name="confirmPassword"
                onChange={handleChange}
                value={confirmPassword}
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
              {err.confirmPassword && (
                <p className="text-red-700">
                  <sup> *</sup> {err.confirmPassword}
                </p>
              )}
            </div>

            <div>
              <input
                type="submit"
                className="input bg-secondary_light w-full  p-4 rounded-md text-md focus:outline-none cursor-pointer "
                onClick={handleSubmit}
              />
            </div>

            <div className=" mt-6 text-center text-secondary_light">
              <NavLink to="/login" className="underline leading-3">
                Login
              </NavLink>
            </div>
          </form>
        </div>
      </div>
      {/* </Switch> */}
    </AuthLayout>
  );
};

export default Signup;
