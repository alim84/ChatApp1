import { BsThreeDotsVertical } from "react-icons/bs";
import profileImg from "../assets/alim.png";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  getDatabase,
  onValue,
  ref,
  push,
  remove,
  set,
} from "firebase/database";
import { useLocation } from "react-router-dom";

const FriendList = () => {
  let location = useLocation();
  let data = useSelector((state) => state.userInfo.value);
  let [friendlist, setFriendList] = useState([]);
  const db = getDatabase();

  useEffect(() => {
    const friendRef = ref(db, "friendlist/");
    onValue(friendRef, (snapshot) => {
      let array = [];
      snapshot.forEach((item) => {
        if (
          data.uid == item.val().senderid ||
          data.uid == item.val().receiverid
        ) {
          array.push({ ...item.val(), key: item.key });
        }
      });
      setFriendList(array);
    });
  }, []);

  let handleBlock = (item) => {
    if (data.uid == item.senderid) {
      set(push(ref(db, "blocklist/")), {
        blockbyid: data.uid,
        blockby: data.displayName,
        blockeduserid: item.receiverid,
        blockeduser: item.receivername,
      }).then(() => {
        remove(ref(db, "friendlist/" + item.key));
      });
    } else {
      set(push(ref(db, "blocklist/")), {
        blockbyid: data.uid,
        blockby: data.displayName,
        blockeduserid: item.senderid,
        blockeduser: item.sendername,
      }).then(() => {
        remove(ref(db, "friendlist/" + item.key));
      });
    }
  };
  let handleChat = (item) => {
    console.log(item);
  };
  return (
    <div className="w-[427px] shadow-2xl rounded-2xl px-5 ">
      <div className="flex justify-between items-center">
        <h2 className="text-[20px] font-semibold text-black">Friend List</h2>
        <BsThreeDotsVertical />
      </div>
      <input
        className="w-full h-[30px] rounded-md border-1 border-green-500 outline-orange-500 px-5 bg-gray-200 "
        placeholder="Search..........."
        type="text"
      ></input>
      <div className="w-full rounded-2xl  overflow-scroll">
        {friendlist.map((item) => (
          <div className="flex justify-between items-center mt-[17px] border-b border-black/25 pb-6">
            <div className="flex items-center gap-4">
              <img
                className="w-[70px] h-[70px] rounded-full"
                src={profileImg}
                alt=""
              />
              <div>
                {data.uid == item.senderid ? (
                  <h3 className="text-[18px] font-semibold text-black">
                    {item.receivername}
                  </h3>
                ) : (
                  <h3 className="text-[18px] font-semibold text-black">
                    {item.sendername}
                  </h3>
                )}

                <p className="text-[14px] font-semibold text-gray-500">
                  Hi Guys, Wassup!
                </p>
              </div>
            </div>
            {location.pathname == "/message" ? (
              <button
                onClick={() => handleChat(item)}
                className="bg-primary px-5 py-2 text-white font-normal text-[18px] rounded-lg"
              >
                {" "}
                msg
              </button>
            ) : (
              <button
                onClick={() => handleBlock(item)}
                className="bg-primary px-5 py-2 text-white font-normal text-[18px] rounded-lg"
              >
                {" "}
                Block
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendList;
