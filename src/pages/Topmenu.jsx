import React, { useRef, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";

import { FaChevronRight } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { GoHomeFill } from "react-icons/go";
import { FaHome } from "react-icons/fa";
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

const Topmenu = () => {
  let [toggle, Settoggle] = useState(false);

  return (
    <>
      <div className="  flex mx-auto gap-5 justify-end items-center bg-red-100 text-yellow-200 shadow-md shadow-gray-100 relative py-[22px] ">
      
        <div className="relative">
          <button
            onClick={() => Settoggle(!toggle)}
            className="flex relative  "
          >
            <a className="hover:text-md text-[14px] text-pink-600 text-xl  font-semibold hover:text-red-400">
              Menu
            </a>
            <IoMdArrowDropdown className="absolute translate-x-[75px]   text-white  " />
          </button>
          <div>
            {toggle && (
              <div className="absolute translate-x-[-200px] cursor-pointer  grid grid-cols-4 justify-between items-center w-[200px] h-[400px] rounded-b-md bg-red-100  z-20 mt-10 text-center text-white  transition delay-150 duration-300 ease-in-out shadow-md shadow-slate-200  ">
                <div className=" flex justify-center items-center hover:bg-slate-400 hover:py-2 hover:ml-2 hover:rounded-md ">
                  <FaHome className=" w-[20px] h-[20px] bg-red-100 border-2  mr-2 rounded-full text-primary " />
                  <ul className=" ">
                    <li className=" text-primary">
                      <a href={`/`}>Home</a>
                    </li>
                  </ul>
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
                <div className=" flex justify-center items-center hover:bg-slate-400 hover:py-2 hover:ml-2 hover:rounded-md transition-transform">
                  <BiSolidInstitution className=" w-[20px] h-[20px] bg-cyan-900 border-2  mr-2 rounded-full " />
                  <ul className=" ">
                    <li className="">
                      <a href={`/meshow`}>প্রতিষ্ঠান</a>
                    </li>
                  </ul>
                </div>
                <div className=" flex justify-center items-center hover:bg-slate-400 hover:py-2 hover:ml-2 hover:rounded-md transition-transform">
                  <GiThreeLeaves className=" w-[20px] h-[20px] bg-cyan-900 border-2  mr-2 rounded-full " />
                  <ul className=" ">
                    <li className="">
                      <a href={`/leaveshow`}>ছুটি</a>
                    </li>
                  </ul>
                </div>
                <div className=" flex justify-center items-center hover:bg-slate-400 hover:py-2 hover:ml-2 hover:rounded-md transition-transform">
                  <DiAtom className=" w-[20px] h-[20px] bg-cyan-900 border-2  mr-2 rounded-full " />
                  <ul className=" ">
                    <li className="">
                      <a href={`/disiplineshow`}>শৃংখলা</a>
                    </li>
                  </ul>
                </div>
                <div className=" flex justify-center items-center hover:bg-slate-400 hover:py-2 hover:ml-2 hover:rounded-md transition-transform">
                  <FaBuildingCircleArrowRight className=" w-[20px] h-[20px] bg-cyan-900 border-2  mr-2 rounded-full " />
                  <ul className=" ">
                    <li className="">
                      <a href={`/consumshow`}>বিতরন</a>
                    </li>
                  </ul>
                </div>
                <div className=" flex justify-center items-center hover:bg-slate-400 hover:py-2 hover:ml-2 hover:rounded-md transition-transform">
                  <FaArrowRightToCity className=" w-[20px] h-[20px] bg-cyan-900 border-2  mr-2 rounded-full " />
                  <ul className=" ">
                    <li className="">
                      <a href={`/inventoryshow`}>গ্রহণ</a>
                    </li>
                  </ul>
                </div>
                <div className=" flex justify-center items-center hover:bg-slate-400 hover:py-2 hover:ml-2 hover:rounded-md transition-transform">
                  <FaPeopleGroup className=" w-[20px] h-[20px] bg-cyan-900 border-2  mr-2 rounded-full " />
                  <ul className=" ">
                    <li className="">
                      <a href={`/manpowershow`}>জনবল</a>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

     
      </div>
    </>
  );
};

export default Topmenu;
