import { BsThreeDotsVertical } from "react-icons/bs";
import profileImg from "../assets/alim.png";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  getDatabase,
  onValue,
  ref,

} from "firebase/database";

const BlockedUsers = () => {
  let data = useSelector((state) => state.userInfo.value);
  let [blocklist, setBlocklist] = useState([]);
  const db = getDatabase();

  useEffect(() => {
    const blockRef = ref(db, "blocklist/");
    onValue(blockRef, (snapshot) => {
      let array = [];
      snapshot.forEach((item) => {
        if (data.uid == item.val().blockbyid) {
          array.push({
            blockeduser: item.val().blockeduser,
            blockeduserid: item.val().blockeduserid,
          });
        } else if (data.uid == item.val().blockeduserid) {
          array.push({
            blockby: item.val().blockby,
            blockbyid: item.val().blockbyid,
          });
        }
      });
      setBlocklist(array);
    });
  }, []);
  return (
    <div className="w-[427px] shadow-2xl rounded-2xl px-5 mt-[43px]">
      <div className="flex justify-between items-center">
        <h2 className="text-[20px] font-semibold text-black">Blocked Users</h2>
        <BsThreeDotsVertical />
      </div>
      <div className="w-full h-[347px] rounded-2xl  overflow-scroll">
        {blocklist.map((item) => (
          <div className="flex justify-between items-center mt-[17px] border-b border-black/25 pb-6">
            <div className="flex items-center gap-4">
              <img
                className="w-[70px] h-[70px] rounded-full"
                src={profileImg}
                alt=""
              />
              <div>
                <h3 className="text-[18px] font-semibold text-black">
                  {item.blockeduser}
                </h3>

                <h3 className="text-[18px] font-semibold text-black">
                  {item.blockby}
                </h3>

                <p className="text-[14px] font-semibold text-gray-500">
                  Hi Guys, Wassup!
                </p>
              </div>
            </div>
            { item.blockeduser &&
              <button className="bg-primary px-5 py-2 text-white font-normal text-[18px] rounded-lg">
                {" "}
                unblock
              </button>
           
            }
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlockedUsers;
