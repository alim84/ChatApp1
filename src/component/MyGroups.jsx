import { BsThreeDotsVertical } from "react-icons/bs";
import profileImg from "../assets/alim.png";
import homeimage from "../assets/Login.webp";

const MyGroups = () => {
  return (
    <>
      <div className="flex">
        <div className="w-[1000px] shadow-2xl rounded-2xl px-5 mt-[43px]">
          <div className="flex justify-between items-center">
            <h2 className="text-[20px] font-semibold text-black">My Groups</h2>
            <BsThreeDotsVertical />
          </div>
          <div className="w-full h-screen rounded-2xl  overflow-scroll">
            <div className="flex justify-between items-center mt-[17px] border-b border-black/25 pb-6">
              <div className="flex items-center gap-4">
                <img
                  className="w-[70px] h-[70px] rounded-full"
                  src={profileImg}
                  alt=""
                />
                <div>
                  <h3 className="text-[18px] font-semibold text-black">
                    Friens Reunion
                  </h3>
                  <p className="text-[14px] font-semibold text-gray-500">
                    Hi Guys, Wassup!
                  </p>
                </div>
              </div>
              <time>Yesterday 10 AM</time>
            </div>
            <div className="flex justify-between items-center mt-[17px] border-b border-black/25 pb-6">
              <div className="flex items-center gap-4">
                <img
                  className="w-[70px] h-[70px] rounded-full"
                  src={profileImg}
                  alt=""
                />
                <div>
                  <h3 className="text-[18px] font-semibold text-black">
                    Friens Reunion
                  </h3>
                  <p className="text-[14px] font-semibold text-gray-500">
                    Hi Guys, Wassup!
                  </p>
                </div>
              </div>
              <time>Friday 10 AM</time>
            </div>
            <div className="flex justify-between items-center mt-[17px] border-b border-black/25 pb-6">
              <div className="flex items-center gap-4">
                <img
                  className="w-[70px] h-[70px] rounded-full"
                  src={profileImg}
                  alt=""
                />
                <div>
                  <h3 className="text-[18px] font-semibold text-black">
                    Friens Reunion
                  </h3>
                  <p className="text-[14px] font-semibold text-gray-500">
                    Hi Guys, Wassup!
                  </p>
                </div>
              </div>
              <time>Monday 8 PM</time>
            </div>
            <div className="flex justify-between items-center mt-[17px] border-b border-black/25 pb-6">
              <div className="flex items-center gap-4">
                <img
                  className="w-[70px] h-[70px] rounded-full"
                  src={profileImg}
                  alt=""
                />
                <div>
                  <h3 className="text-[18px] font-semibold text-black">
                    Friens Reunion
                  </h3>
                  <p className="text-[14px] font-semibold text-gray-500">
                    Hi Guys, Wassup!
                  </p>
                </div>
              </div>
              <time>Yesterday 10 AM</time>
            </div>
            <div className="flex justify-between items-center mt-[17px] border-b border-black/25 pb-6">
              <div className="flex items-center gap-4">
                <img
                  className="w-[70px] h-[70px] rounded-full"
                  src={profileImg}
                  alt=""
                />
                <div>
                  <h3 className="text-[18px] font-semibold text-black">
                    Friens Reunion
                  </h3>
                  <p className="text-[14px] font-semibold text-gray-500">
                    Hi Guys, Wassup!
                  </p>
                </div>
              </div>
              <time>Yesterday 10 AM</time>
            </div>
            <div className="flex justify-between items-center mt-[17px] border-b border-black/25 pb-6">
              <div className="flex items-center gap-4">
                <img
                  className="w-[70px] h-[70px] rounded-full"
                  src={profileImg}
                  alt=""
                />
                <div>
                  <h3 className="text-[18px] font-semibold text-black">
                    Friens Reunion
                  </h3>
                  <p className="text-[14px] font-semibold text-gray-500">
                    Hi Guys, Wassup!
                  </p>
                </div>
              </div>
              <time>Yesterday 10 AM</time>
            </div>
            <div className="flex justify-between items-center mt-[17px] border-b border-black/25 pb-6">
              <div className="flex items-center gap-4">
                <img
                  className="w-[70px] h-[70px] rounded-full"
                  src={profileImg}
                  alt=""
                />
                <div>
                  <h3 className="text-[18px] font-semibold text-black">
                    Friens Reunion
                  </h3>
                  <p className="text-[14px] font-semibold text-gray-500">
                    Hi Guys, Wassup!
                  </p>
                </div>
              </div>
              <time>Yesterday 10 AM</time>
            </div>
          </div>
        </div>
        <div>
          <img className="w-screen h-screen" src={homeimage} />
        </div>
      </div>
    </>
  );
};

export default MyGroups;
