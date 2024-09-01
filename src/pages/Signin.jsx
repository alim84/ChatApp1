import { useState } from "react";
import loginImage from "../assets/login.jpg";
import GoogleImage from "../assets/Gmail.png";
import FacebookImage from "../assets/Facebook.png";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash, FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ColorRing } from "react-loader-spinner";

import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { loginuserinfo } from "../Slices/UserSlice";
import { getDatabase, ref, set } from "firebase/database";

const Signin = () => {
  const db = getDatabase();
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const fprovider = new FacebookAuthProvider();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [emailerror, setEmailerror] = useState("");
  let [passworderror, setPassworderror] = useState("");
  let [passwordshow, setPasswordshow] = useState(false);

  let handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailerror("");
  };

  let handlePassword = (e) => {
    setPassword(e.target.value);
    setPassworderror("");
  };
  let handleSignup = () => {
    if (!email || !name || !password)
      if (!email) {
        setEmailerror("Email is required");
      }

    if (!password) {
      setPassworderror("Password is required");
    }
    if (email && password) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          dispatch(loginuserinfo(user));
          localStorage.setItem("user", JSON.stringify(user));

          navigate("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          console.log(errorCode);
          if (error.code.include("auth/invalid-credential")) {
            setEmailerror("Invalid-Credential");
          }
        });
    }
  };

  let handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((userCredential) => {
        set(ref(db, "users/" + userCredential.user.uid), {
          name: userCredential.user.displayName,
          email: userCredential.user.email,
          image: userCredential.user.photoURL,
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
  };

  let handleFacebookLogin = () => {
    signInWithPopup(auth, fprovider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-full h-screen flex">
      <div className="w-2/4 h-full flex justify-end items-center ">
        <div className="mr-[69px]">
          <h1 className="text-[34px] font-bold text-secondary">
            Login to your account
          </h1>
          <button
            onClick={handleGoogleLogin}
            className="  my-5 rounded-lg border-2 border-gray-400 py-5 px-10 shadow shadow-gray-200 mr-8 "
          >
            <img className="inline-block mr-4" src={GoogleImage}></img> Login
            with Google
          </button>
          <button
            onClick={handleFacebookLogin}
            className="  my-5 rounded-lg border-2 border-gray-400 py-5 px-10 shadow shadow-gray-200 "
          >
            <FaFacebook className="inline mr-5" /> Login with Google
          </button>

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
              className="w-full h-full border-b border-secondary/50  pl-[50px]"
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
                emailerror ? "text-red-500" : "text-secondary"
              }  absolute top-[-13px] left-[50px] bg-white px-2`}
            >
              Password :
            </label>
            <input
              onChange={handlePassword}
              className="w-full h-full border-b border-secondary/50  pl-[50px]"
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
          </div>
          <button
            onClick={handleSignup}
            className="bg-primary w-[368px] py-5 text-xl font-semibold text-white rounded-[86px] mt-[51px]"
          >
            Login to Continue
          </button>
          <p className="text-sm text-secondary text-center w-[362px] mt-[35px]">
            Already have an accountr ?{" "}
            <Link to="/Signup" className="text-[#EA6C00] font-bold">
              Sign up
            </Link>{" "}
          </p>
          <p>{emailerror}</p>
        </div>
      </div>

      <div className="w-2/4 h-full ">
        <img
          className="ml-auto w-full h-full object-cover"
          src={loginImage}
          alt={loginImage}
        />
      </div>
    </div>
  );
};

export default Signin;
