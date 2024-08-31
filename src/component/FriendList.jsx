import { BsThreeDotsVertical } from "react-icons/bs";
import profileImg from "../assets/alim.png";

const FriendList = () => {
  return (
    <div className="w-[427px] shadow-2xl rounded-2xl px-5 ">
      <div className="flex justify-between items-center">
        <h2 className="text-[20px] font-semibold text-black">Friend List</h2>
        <BsThreeDotsVertical />
      </div>
      <div className="w-full h-[347px] rounded-2xl  overflow-scroll">
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
          <time>Friday 6PM</time>
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
          <time>Friday 6PM</time>
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
          <time>Friday 6PM</time>
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
          <time>Friday 6PM</time>
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
          <time>Friday 6PM</time>
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
          <time>Friday 6PM</time>
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
          <time>Friday 6PM</time>
        </div>
      </div>
    </div>
  );
};

export default FriendList;
