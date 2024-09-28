import { BsThreeDotsVertical } from "react-icons/bs";
import profileImg from "../assets/alim.png";
import { useState } from "react";
import { push, ref, set, getDatabase } from "firebase/database";
import { useSelector } from "react-redux";

const GroupList = () => {
  const db = getDatabase();
  let [groupmodal, setGroupmodal] = useState(false);
  let [groupname, setGroupName] = useState('');
  let data = useSelector((state) => state.userInfo.value);


  let handleCreateGroup=()=>{
    set(push(ref(db, "groupList/")), {
      GroupName: groupname,
      adminid:data.uid,
      admin: data.displayName
      }).then(()=>{
        setGroupmodal(false)
      })
  }

  return (
    <div className="w-[427px] shadow-2xl rounded-2xl px-5">
      <div className="flex justify-between items-center">
        <h2 className="text-[20px] font-semibold text-black">Groups List</h2>
        {groupmodal ? (
          <button
            onClick={() => setGroupmodal(false)}
            className="bg-red-500 py-1 px-3 rounded-md text-white "
          >
            Cancel
          </button>
        ) : (
          <button
            onClick={() => setGroupmodal(true)}
            className="bg-primary py-1 px-3 rounded-md text-white"
          >
            Create Group
          </button>
        )}

        <BsThreeDotsVertical />
      </div>
      <div className="w-full h-[347px] rounded-2xl  overflow-scroll">
        {groupmodal ? (
          <div className="py-5">
            <h2 className="text-2xl text-primary font-semibold">
              Create Group List
            </h2>
            <input onChange={((e)=>setGroupName(e.target.value))}
              className="border w-full py-3 px-3 rounded-md placeholder-Enter Your Group Name"
              type="text"
            ></input>
            <button onClick={handleCreateGroup} className="bg-primary py-1 px-3 mt-[12px] rounded-md text-white">
              Create
            </button>
          </div>
        ) : (
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
            <button className="bg-primary px-5 py-2 text-white font-normal text-[18px] rounded-lg">
              {" "}
              Join
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GroupList;
