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
  let navigate = useNavigate();
  let [email, setEmail] = useState("");
  let [name, setName] = useState("");
  let [password, setPassword] = useState("");
  let [emailerror, setEmailerror] = useState("");
  let [nameerror, setNameerror] = useState("");
  let [passworderror, setPassworderror] = useState("");
  let [passwordshow, setPasswordshow] = useState(false);
  let [loader, setLoader] = useState(false);

  let handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailerror("");
  };
  let handleName = (e) => {
    setName(e.target.value);
    setNameerror("");
  };
  let handlePassword = (e) => {
    setPassword(e.target.value);
    setPassworderror("");
  };
  let handleSignup = () => {
    if (!email || !name || !password)
      if (!email) {
        setEmailerror("Email is required");
      } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        setEmailerror("Invalid Email");
      }
    if (!name) {
      setNameerror("Name is required");
    }
    if (!password) {
      setPassworderror("Password is required");
    }
    if (email && name && password) {
      setLoader(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          sendEmailVerification(auth.currentUser).then(() => {
            updateProfile(auth.currentUser, {
              displayName: name,
              photoURL: "/public/alim1.png",
            })
              .then(() => {
                set(ref(db, "users/" + userCredential.user.uid), {
                  name: userCredential.user.displayName,
                  email: userCredential.user.email,
                  image: "/public/alim1.png",
                  date: `${new Date().getFullYear()}-${
                    new Date().getMonth() + 1
                  }-${new Date().getDate()}-${new Date().getHours()}-${new Date().getMinutes()}-${new Date().getSeconds()}`,
                }).then;
                setTimeout(() => {
                  setLoader(false);
                  navigate("/signin");
                }, 1000);
              })
              .catch((error) => {
                console.log(error);
              });
          });
        })
        .catch((error) => {
          setTimeout(() => {
            setLoader(false);
            if (error.code.includes("auth/email-already-in-use")) {
              setEmailerror("Eamil alreary in use");
            }
            console.log(error);
          }, 1000);
        });
    }
  };

  return (
    <div className="w-full h-screen flex">
      <div className="w-2/4 h-full flex justify-end items-center ">
        <div className="mr-[69px]">
          <h1 className="text-[34px] font-bold text-secondary">
            Get started with easily register
          </h1>
          <p className="text-[20px] font-normal text-black opacity-50">
            Free register and you can enjoy it
          </p>
          <div className="w-[368px] h-[80px] mt-[61px] relative">
            <label
              className={`text-sm font-semibold ${
                emailerror ? "text-red-500" : "text-secondary"
              }  absolute top-[-13px] left-[50px] bg-white px-2`}
            >
              Email Address :
            </label>
            <input
              onChange={handleEmail}
              className="w-full h-full border border-secondary/50 rounded-lg pl-[50px]"
              type="email"
              value={email}
              placeholder="Enter Your Email"
            />
            {emailerror && (
              <p className="text-red-500 text-xl font-normal">{emailerror}</p>
            )}
          </div>
          <div className="w-[368px] h-[80px] mt-[61px] relative">
            <label
              className={`text-sm font-semibold ${
                nameerror ? "text-red-500" : "text-secondary"
              }  absolute top-[-13px] left-[50px] bg-white px-2`}
            >
              Name :
            </label>
            <input
              onChange={handleName}
              className="w-full h-full border border-secondary/50 rounded-lg pl-[50px]"
              type="text"
              value={name}
              placeholder="Enter Your Name"
            />

            {nameerror && (
              <p className="text-red-500 text-xl font-normal">
                {passworderror}
              </p>
            )}
          </div>
          <div className="w-[368px] h-[80px] mt-[61px] relative">
            <label
              className={`text-sm font-semibold ${
                emailerror ? "text-red-500" : "text-secondary"
              }  absolute top-[-13px] left-[50px] bg-white px-2`}
            >
              Password :
            </label>
            <input
              onChange={handlePassword}
              className="w-full h-full border border-secondary/50 rounded-lg pl-[50px]"
              type={passwordshow ? "text" : "password"}
              value={password}
              placeholder="Enter Your Password"
            />
            {passwordshow ? (
              <FaEye
                onClick={() => setPasswordshow(false)}
                className="2xl absolute top-2/4 right-5 translate-y-[-50%] cursor-pointer"
              />
            ) : (
              <FaEyeSlash
                onClick={() => setPasswordshow(true)}
                className="2xl absolute top-2/4 right-5 translate-y-[-50%] cursor-pointer"
              />
            )}
            {passworderror && (
              <p className="text-red-500 text-xl font-normal">
                {passworderror}
              </p>
            )}
            ;
          </div>

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
            Already have an accountr ?{" "}
            <Link to="/Signin" className="text-[#EA6C00] font-bold">
              Sign In
            </Link>{" "}
          </p>
        </div>
      </div>

      <div className="w-2/4 h-full ">
        <img
          className="ml-auto w-full h-full object-cover"
          src={SignupImage}
          alt={SignupImage}
        />
      </div>
    </div>
  );
};

export default Signup;
