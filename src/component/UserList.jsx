import { BsThreeDotsVertical } from "react-icons/bs";
import profileImg from "../assets/alim.png";
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import moment from "moment/moment";
import { useSelector } from "react-redux";

const UserList = () => {
  let data = useSelector((state) => state.userInfo.value);
  const db = getDatabase();
  let [userList, setUserList] = useState([]);

  useEffect(() => {
    const userListRef = ref(db, "users/");
    onValue(userListRef, (snapshot) => {
      let array = [];
      snapshot.forEach((item) => {
        if (data.uid != item.key) {
          array.push(item.val());
        }
      });
      setUserList(array);
    });
  }, []);

  return (
    <div className="w-[427px] shadow-2xl rounded-2xl px-5 ">
      <div className="flex justify-between items-center">
        <h2 className="text-[20px] font-semibold text-black">User List </h2>
        <BsThreeDotsVertical />
      </div>
      <div className="w-full h-[347px] rounded-2xl  overflow-scroll">
      </div>;
      {userList.map((item) => {
        
          <div className="flex justify-between items-center mt-[17px] border-b border-black/25 pb-6">
            <div className="flex items-center gap-4">
              <img
                className="w-[70px] h-[70px] rounded-full"
                src={item.image}
                alt=""
              />
              <div>
                <h3 className="text-[18px] font-semibold text-black">
                  {item.name}
                </h3>
                <p className="text-[14px] font-semibold text-gray-500">
                  {moment(item.date, "YYYYMMDD").fromNow()}
                </p>
              </div>
            </div>
            <button className="bg-primary px-5 py-2 text-white font-normal text-[18px] rounded-lg">
              {" "}
              +
            </button>
          </div>
       
      })}
    </div>
  );
};

export default UserList;
