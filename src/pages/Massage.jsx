import React from "react";
import FriendList from "./../component/FriendList";
import { BsThreeDotsVertical } from "react-icons/bs";
import imgage from "../assets/alim.png";
import { IoIosSend } from "react-icons/io";
import { FaCamera } from "react-icons/fa";
import { TbPhotoFilled } from "react-icons/tb";
import { FaMicrophone } from "react-icons/fa6";
import { GrLike } from "react-icons/gr";
import { MdEmojiEmotions } from "react-icons/md";

const Massage = () => {
  return (
    <>
      <div className="grid grid-cols-2 w-full justify-between h-[1200px] mt-[50px]">
        <div className="w-[800px]">
          <div className="flex justify-between item-center">
            <div className="flex gap-3 items-center">
              <div className="w-[50px] h-[50px] bg-green-500 rounded-full ">
                <img
                  className="w-[50px] h-[50px] rounded-full"
                  src={imgage}
                ></img>
              </div>

              <div className="">
                <h2 className="text-[14]">Alim</h2>
                <p className="text-[8px]">Online</p>
              </div>
            </div>

            <BsThreeDotsVertical />
          </div>
          <div className="w-full h-[800px] bg-blue-50 rounded-md relative ">
            <div className="w-[300px] bg-blue-900 text-white px-2 rounded-lg py-3  absolute translate-x-0 translate-y-[50px] ">
              <h3 className=""> Hello</h3>
            </div>
            <div className="w-[300px] bg-purple-900 text-white px-2 rounded-lg py-3  absolute right-0 translate-y-[200px]">
              <h3 className=""> How r U</h3>
            </div>
          </div>

          <div className="flex items-center pb-[10px]  ">
            <div className="flex gap-2 bg-blue-100 py-3 px-2">
              <button>
                <FaCamera className="text-blue-400 w-[25px] h-[25px] gap-2" />
              </button>
              <button>
                {" "}
                <TbPhotoFilled className="text-blue-400 w-[25px] h-[25px]" />
              </button>
              <button>
                <FaMicrophone className="text-blue-400 w-[25px] h-[25px]" />
              </button>
            </div>
            <div className="w-full bg-blue-100 ">
              <input
                className="w-full py-3 outline-none  px-3 rounded-full "
                placeholder="Message type............"
                type="text"
              ></input>
          <button className="absolute translate-x-[-40px] translate-y-[10px]">   <MdEmojiEmotions className=" text-[25px] text-yellow-600 "/></button>
            </div>
            <button className=" bg-blue-100 py-3  ">
              {" "}
              <IoIosSend className="text-purple-800 w-[25px] h-[25px] ml-2 " />
            </button>
            <div className="gap-2 bg-blue-100 py-3 p-[20px]  ">
              <GrLike className="text-blue-400 bg- w-[25px] h-[25px] " />
            </div>
          </div>
        </div>
        <div className="w-[300px] h-full ml-[350px]">
          <FriendList />
        </div>
      </div>
    </>
  );
};

export default Massage;
