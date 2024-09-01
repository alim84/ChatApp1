import React, { useState } from "react";
import SignupImage from "../assets/signup.png";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { ColorRing } from "react-loader-spinner";
import { getDatabase, ref, set } from "firebase/database";

const Signup = () => {
  const db = getDatabase();
  const auth = getAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordShow, setPasswordShow] = useState(false);
  const [loader, setLoader] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handleName = (e) => {
    setName(e.target.value);
    setNameError("");
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const validateInputs = () => {
    let isValid = true;

    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmailError("Invalid Email");
      isValid = false;
    }

    if (!name) {
      setNameError("Name is required");
      isValid = false;
    }

    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    }

    return isValid;
  };

  const handleSignup = async () => {
    if (!validateInputs()) return;

    setLoader(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await sendEmailVerification(auth.currentUser);
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: "/public/alim1.png",
      });

      await set(ref(db, `users/${userCredential.user.uid}`), {
        name: userCredential.user.displayName,
        email: userCredential.user.email,
        image: "/public/alim1.png",
        date: `${new Date().getFullYear()}-${
          new Date().getMonth() + 1
        }-${new Date().getDate()}-${new Date().getHours()}-${new Date().getMinutes()}-${new Date().getSeconds()}`,
      });

      setLoader(false);
      navigate("/signin");
    } catch (error) {
      setLoader(false);
      if (error.code.includes("auth/email-already-in-use")) {
        setEmailError("Email already in use");
      } else {
        console.log("Error during signup:", error);
      }
    }
  };

  return (
    <div className="w-full h-screen flex">
      <div className="w-2/4 h-full flex justify-end items-center">
        <div className="mr-[69px]">
          <h1 className="text-[34px] font-bold text-secondary">
            Get started with easily register
          </h1>
          <p className="text-[20px] font-normal text-black opacity-50">
            Free register and you can enjoy it
          </p>

          {/* Email Input */}
          <div className="w-[368px] h-[80px] mt-[61px] relative">
            <label
              className={`text-sm font-semibold ${
                emailError ? "text-red-500" : "text-secondary"
              } absolute top-[-13px] left-[50px] bg-white px-2`}
            >
              Email Address:
            </label>
            <input
              onChange={handleEmail}
              className="w-full h-full border border-secondary/50 rounded-lg pl-[50px]"
              type="email"
              value={email}
              placeholder="Enter Your Email"
            />
            {emailError && (
              <p className="text-red-500 text-xl font-normal">{emailError}</p>
            )}
          </div>

          {/* Name Input */}
          <div className="w-[368px] h-[80px] mt-[61px] relative">
            <label
              className={`text-sm font-semibold ${
                nameError ? "text-red-500" : "text-secondary"
              } absolute top-[-13px] left-[50px] bg-white px-2`}
            >
              Name:
            </label>
            <input
              onChange={handleName}
              className="w-full h-full border border-secondary/50 rounded-lg pl-[50px]"
              type="text"
              value={name}
              placeholder="Enter Your Name"
            />
            {nameError && (
              <p className="text-red-500 text-xl font-normal">{nameError}</p>
            )}
          </div>

          {/* Password Input */}
          <div className="w-[368px] h-[80px] mt-[61px] relative">
            <label
              className={`text-sm font-semibold ${
                passwordError ? "text-red-500" : "text-secondary"
              } absolute top-[-13px] left-[50px] bg-white px-2`}
            >
              Password:
            </label>
            <input
              onChange={handlePassword}
              className="w-full h-full border border-secondary/50 rounded-lg pl-[50px]"
              type={passwordShow ? "text" : "password"}
              value={password}
              placeholder="Enter Your Password"
            />
            {passwordShow ? (
              <FaEye
                onClick={() => setPasswordShow(false)}
                className="2xl absolute top-2/4 right-5 translate-y-[-50%] cursor-pointer"
              />
            ) : (
              <FaEyeSlash
                onClick={() => setPasswordShow(true)}
                className="2xl absolute top-2/4 right-5 translate-y-[-50%] cursor-pointer"
              />
            )}
            {passwordError && (
              <p className="text-red-500 text-xl font-normal">
                {passwordError}
              </p>
            )}
          </div>

          {/* Loader or Sign Up Button */}
          {loader ? (
            <ColorRing
              visible={true}
              height="50"
              width="50"
              ariaLabel="color-ring-loading"
              wrapperStyle={{}}
              wrapperClass="color-ring-wrapper mx-40"
              colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
            />
          ) : (
            <button
              onClick={handleSignup}
              className="bg-primary w-[368px] py-5 text-xl font-semibold text-white rounded-[86px] mt-[51px]"
            >
              Sign Up
            </button>
          )}

          <p className="text-sm text-secondary text-center w-[362px] mt-[35px]">
            Already have an account?{" "}
            <Link to="/signin" className="text-[#EA6C00] font-bold">
              Sign In
            </Link>
          </p>
        </div>
      </div>

      <div className="w-2/4 h-full">
        <img
          className="ml-auto w-full h-full object-cover"
          src={SignupImage}
          alt="Signup"
        />
      </div>
    </div>
  );
};

export default Signup;
