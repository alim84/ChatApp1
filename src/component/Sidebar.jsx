import profileImg from "../assets/alim.png";

import { FaHome } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { IoSettingsSharp } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { VscSignOut } from "react-icons/vsc";

const Sidebar = () => {
  return (
    <div className="h-screen  py-9 px-8 rounded-4xl">
      <div className="w-[186px] h-full  rounded-3xl bg-primary">
        <div className="text-center">
          <img
            className="w-[100px] h-[100px] rounded-full  mt-9 inline-block"
            src={profileImg}
            alt=""
          />
        </div>
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
    </div>
  );
};

export default Sidebar;
