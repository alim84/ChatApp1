import { BsThreeDotsVertical } from "react-icons/bs";
import profileImg from "../assets/alim.png";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getDatabase, onValue, ref } from "firebase/database";

const FriendList = () => {
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

  return (
    <div className="w-[427px] shadow-2xl rounded-2xl px-5 ">
      <div className="flex justify-between items-center">
        <h2 className="text-[20px] font-semibold text-black">Friend List</h2>
        <BsThreeDotsVertical />
      </div>
      <div className="w-full h-[347px] rounded-2xl  overflow-scroll">
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
            <time>Friday 6PM</time>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendList;
