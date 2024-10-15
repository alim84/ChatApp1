import profileImg from "../assets/alim.png";
import { FaHome } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { IoSettingsSharp } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { VscSignOut } from "react-icons/vsc";
import { FaUpload } from "react-icons/fa";
import { createRef, useState } from "react";
import React, { useRef } from "react";

import { GiHumanPyramid, GiThreeLeaves } from "react-icons/gi";
import { FaUserDoctor } from "react-icons/fa6";
import { PiStudent } from "react-icons/pi";
import { BiSolidInstitution } from "react-icons/bi";
import { FaPlaneDeparture } from "react-icons/fa";
import { DiAtom } from "react-icons/di";
import {
  FaBuildingCircleArrowRight,
  FaArrowRightToCity,
} from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";

import {
  getStorage,
  ref,
  getDownloadURL,
  uploadString,
} from "firebase/storage";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { getAuth, updateProfile } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { loginuserinfo } from "../Slices/UserSlice";
import { update, ref as imageref, getDatabase } from "firebase/database";
import { Link, useLocation } from "react-router-dom";
import { FaTimeline } from "react-icons/fa6";

const Sidebar = () => {
  let location = useLocation();
  const auth = getAuth();
  const db = getDatabase();
  let data = useSelector((state) => state.userInfo.value);
  let dispatch = useDispatch();
  const storage = getStorage();
  let [imageModal, setImageModal] = useState(false);
  let [toggle, Settoggle] = useState(false);

  const [image, setImage] = useState(null);
  const [cropData, setCropData] = useState("");
  const cropperRef = createRef();

  let handlaeImageFile = (e) => {
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };

  let handleSubmit = () => {
    const storageRef = ref(storage, "");
    if (typeof cropperRef.current?.cropper !== "undefined") {
      setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
      const message4 = cropperRef.current?.cropper
        .getCroppedCanvas()
        .toDataURL();
      uploadString(storageRef, message4, "data_url").then((snapshot) => {
        getDownloadURL(storageRef).then((downloadURL) => {
          updateProfile(auth.currentUser, {
            photoURL: downloadURL,
          })
            .then(() => {
              dispatch(loginuserinfo(auth.currentUser));
              update(imageref(db, "users/" + data.uid), {
                image: downloadURL,
              });
            })
            .then(() => {
              setImageModal(false);
              setCropData("");
              setImage("");
            });
        });
      });
    }
  };

  return (
    <div className="h-screen    rounded-4xl">
      <div className="w-[186px] h-full   bg-red-50">
        <div className="text-center pt-9">
          <div
            onClick={() => setImageModal(true)}
            className="w-[100px] h-[100px] group relative overflow-hidden mx-auto rounded-full"
          >
            <img className="w-full " src={data && data.photoURL} alt="" />
            <div className="w-full h-full cursor-pointer bg-black/20 group-hover:opacity-50 flex absolute justify-center items-center">
              <FaUpload className="text-white text-2xl " />
            </div>
          </div>
        </div>
        <h1 className="text-pink-600 text-xl text-center font-bold mt-3">
          {data && data.displayName}
        </h1>
        <div className="w-full h-[89px] relative mt-[78px]">
          <Link to="/">
            <div
              className={`${
                location.pathname == "/" &&
                "w-[168px] h-[89px] bg-red-200 ml-auto relative rounded-s-[20px] after:w-[10px] after:h-full after:absolute after:top-0 after:right-0 after:bg-primary after:shadow-2xl after:rounded-s-[25px]"
              }`}
            ></div>
            <FaHome
              className={`${
                location.pathname == "/"
                  ? "text-[46px] text-primary absolute top-2/4 left-2/4 translate-y-[-50%] translate-x-[-50%] "
                  : "text-[46px] text-pink-600 absolute top-2/4 left-2/4 translate-y-[-50%] translate-x-[-50%] "
              }`}
            />
          </Link>
        </div>
        <div className="w-full h-[89px] relative mt-[35px]">
          <Link to="/topmenu">
            <div
              className={`${
                location.pathname == "/topmenu" &&
                "w-[168px] h-[89px] bg-red-200 ml-auto relative rounded-s-[20px] after:w-[10px] after:h-full after:absolute after:top-0 after:right-0 after:bg-primary after:shadow-2xl after:rounded-s-[25px]"
              }`}
            ></div>
            <button onClick={() => Settoggle(!toggle)}>
              <FaTimeline
                className={`${
                  location.pathname == "/"
                    ? "text-[46px] text-pink-600 absolute top-2/4 left-2/4 translate-y-[-50%] translate-x-[-50%] rotate-90 "
                    : "text-[46px] text-primary absolute top-2/4 left-2/4 translate-y-[-50%] translate-x-[-50%] rotate-90 "
                }`}
              />
            </button>
          </Link>
        </div>
        <div className="w-full h-[89px] relative mt-[35px]">
          <Link to="/message">
            <div
              className={`${
                location.pathname == "/message" &&
                "w-[168px] h-[89px] bg-red-200 ml-auto relative rounded-s-[20px] after:w-[10px] after:h-full after:absolute after:top-0 after:right-0 after:bg-primary after:shadow-2xl after:rounded-s-[25px]"
              }`}
            ></div>
            <AiOutlineMessage
              className={`${
                location.pathname == "/"
                  ? "text-[46px] text-pink-600 absolute top-2/4 left-2/4 translate-y-[-50%] translate-x-[-50%] "
                  : "text-[46px] text-primary absolute top-2/4 left-2/4 translate-y-[-50%] translate-x-[-50%] "
              }`}
            />
          </Link>
        </div>
        <div className="w-full h-[89px] relative mt-[35px]">
          <div
            className="hidden w-[168px] h-[89px] bg-white  ml-auto relative rounded-s-[20px] after:w-[10px]
           after:h-full after:absolute after:top-0 after:right-0 after:bg-primary 
           after:shadow-2xl after:rounded-s-[25px]"
          ></div>
          <FaBell className="text-[46px] text-pink-600 absolute top-2/4 left-2/4 translate-y-[-50%] translate-x-[-50%] " />
        </div>
        <div className="w-full h-[89px] relative mt-[35px]">
          <div
            className="hidden w-[168px] h-[89px] bg-white ml-auto relative rounded-s-[20px] after:w-[10px]
           after:h-full after:absolute after:top-0 after:right-0 after:bg-primary 
           after:shadow-2xl after:rounded-s-[25px]"
          ></div>
          <IoSettingsSharp className="text-[46px] text-pink-600 absolute top-2/4 left-2/4 translate-y-[-50%] translate-x-[-50%] " />
        </div>
        <div className="w-full h-[89px] relative mt-[78px]">
          <div
            className="hidden w-[168px] h-[89px] bg-white ml-auto relative rounded-s-[20px] after:w-[10px]
           after:h-full after:absolute after:top-0 after:right-0 after:bg-primary 
           after:shadow-2xl after:rounded-s-[25px]"
          ></div>
          <VscSignOut className="text-[46px] text-pink-600 absolute top-2/4 left-2/4 translate-y-[-50%] translate-x-[-50%] " />
        </div>
      </div>
      {imageModal && (
        <div className="w-full h-screen bg-black/70 absolute top-0 left-0 flex justify-center items-center">
          <div className="w-[500px] bg-white rounded-lg p-6">
            <h1 className="text-2xl font-semibold text-primary">
              Upload your Profile Photo
            </h1>
            <input
              onChange={handlaeImageFile}
              className="text-xl font-semibold text-primary mt-2"
              type="file"
            ></input>
            {image && (
              <Cropper
                ref={cropperRef}
                style={{ height: 400, width: "100%" }}
                zoomTo={0.5}
                initialAspectRatio={1}
                preview=".img-preview"
                src={image}
                viewMode={1}
                minCropBoxHeight={10}
                minCropBoxWidth={10}
                background={false}
                responsive={true}
                autoCropArea={1}
                checkOrientation={false}
                guides={true}
              />
            )}
            ;
            <button
              onClick={handleSubmit}
              className="bg-primary  py-2 px-4 text-md font-semibold text-white rounded-[86px] mt-[51px]"
            >
              Upload
            </button>
            <button
              onClick={() => setImageModal(false)}
              className="bg-red-500 ml-3 py-2 px-4 text-md font-semibold text-white rounded-[86px] mt-[51px]"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      ;
      <div>
        {toggle && (
          <div className="absolute translate-x-[200px] translate-y-[-650px] cursor-pointer justify-between items-center w-[200px] h-[400px] rounded-r-xl bg-red-100   transition delay-150 duration-300 ease-in-out shadow-md shadow-slate-200  ">
            <div className=" flex justify-evenly items-center hover:bg-slate-400 hover:py-2 hover:ml-2 hover:rounded-md ">
              <div className=" w-[30px] h-[30px] flex items-center justify-center m-4 border-4 rounded-full border-pink-600">
                <FaHome className=" bg-red-100 border-2   mr-2 rounded-full text-primary " />
              </div>

              <div>
                <ul className=" text-lg ">
                  <li className=" text-primary">
                    <a href={`/`}>Home</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className=" flex justify-center items-center hover:bg-slate-400 hover:py-2 hover:ml-2 hover:rounded-md transition-transform">
              <GiHumanPyramid className=" w-[20px] h-[20px] bg-red-100 border-2  mr-2 rounded-full text-primary " />
              <ul className=" ">
                <li className="text-primary">
                  <a href={`/personnelshow`}>Friend List</a>
                </li>
              </ul>
            </div>

            <div className=" flex justify-center items-center hover:bg-slate-400 hover:py-2 hover:ml-2 hover:rounded-md transition-transform">
              <FaUserDoctor className=" w-[20px] h-[20px] bg-red-100 border-2  mr-2 rounded-full text-primary " />
              <ul className=" ">
                <li className="text-primary">
                  <a href={`/doctorshow`}>Group List</a>
                </li>
              </ul>
            </div>

            <div className=" flex justify-center items-center hover:bg-slate-400 hover:py-2 hover:ml-2 hover:rounded-md transition-transform">
              <FaPlaneDeparture className=" w-[20px] h-[20px] bg-red-100 border-2  mr-2 rounded-full text-primary " />
              <ul className=" ">
                <li className=" text-primary">
                  <a href={`/foriegnshow`}>Ungroup List</a>
                </li>
              </ul>
            </div>
            <div className=" flex justify-center items-center hover:bg-slate-400 hover:py-2 hover:ml-2 hover:rounded-md transition-transform">
              <PiStudent className=" w-[20px] h-[20px] bg-red-100 border-2  mr-2 rounded-full text-primary " />
              <ul className=" ">
                <li className="text-primary">
                  <a href={`/studentshow`}>Group Create</a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
