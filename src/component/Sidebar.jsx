import profileImg from "../assets/alim.png";
import { FaHome } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { IoSettingsSharp } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { VscSignOut } from "react-icons/vsc";
import { FaUpload } from "react-icons/fa";
import { createRef, useState } from "react";

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

const Sidebar = () => {
  const auth = getAuth();
  const db = getDatabase();
  let data = useSelector((state) => state.userInfo.value);
  let dispatch = useDispatch();
  const storage = getStorage();
  let [imageModal, setImageModal] = useState(false);

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
    <div className="h-screen  py-9 px-8 rounded-4xl">
      <div className="w-[186px] h-full  rounded-3xl bg-primary">
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
        <h1 className="text-white text-xl text-center font-bold mt-3">
          {data && data.displayName}
        </h1>
        <div className="w-full h-[89px] relative mt-[78px]">
          <div
            className="w-[168px] h-[89px] bg-white ml-auto relative rounded-s-[20px] after:w-[10px]
           after:h-full after:absolute after:top-0 after:right-0 after:bg-primary 
           after:shadow-2xl after:rounded-s-[25px]"
          ></div>
          <FaHome className="text-[46px] text-primary absolute top-2/4 left-2/4 translate-y-[-50%] translate-x-[-50%] " />
        </div>
        <div className="w-full h-[89px] relative mt-[35px]">
          <div
            className="hidden w-[168px] h-[89px] bg-white  ml-auto relative rounded-s-[20px] after:w-[10px]
           after:h-full after:absolute after:top-0 after:right-0 after:bg-primary 
           after:shadow-2xl after:rounded-s-[25px]"
          ></div>
          <AiOutlineMessage className="text-[46px] text-white absolute top-2/4 left-2/4 translate-y-[-50%] translate-x-[-50%] " />
        </div>
        <div className="w-full h-[89px] relative mt-[35px]">
          <div
            className="hidden w-[168px] h-[89px] bg-white  ml-auto relative rounded-s-[20px] after:w-[10px]
           after:h-full after:absolute after:top-0 after:right-0 after:bg-primary 
           after:shadow-2xl after:rounded-s-[25px]"
          ></div>
          <FaBell className="text-[46px] text-white absolute top-2/4 left-2/4 translate-y-[-50%] translate-x-[-50%] " />
        </div>
        <div className="w-full h-[89px] relative mt-[35px]">
          <div
            className="hidden w-[168px] h-[89px] bg-white ml-auto relative rounded-s-[20px] after:w-[10px]
           after:h-full after:absolute after:top-0 after:right-0 after:bg-primary 
           after:shadow-2xl after:rounded-s-[25px]"
          ></div>
          <IoSettingsSharp className="text-[46px] text-white absolute top-2/4 left-2/4 translate-y-[-50%] translate-x-[-50%] " />
        </div>
        <div className="w-full h-[89px] relative mt-[78px]">
          <div
            className="hidden w-[168px] h-[89px] bg-white ml-auto relative rounded-s-[20px] after:w-[10px]
           after:h-full after:absolute after:top-0 after:right-0 after:bg-primary 
           after:shadow-2xl after:rounded-s-[25px]"
          ></div>
          <VscSignOut className="text-[46px] text-white absolute top-2/4 left-2/4 translate-y-[-50%] translate-x-[-50%] " />
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
    </div>
  );
};

export default Sidebar;
