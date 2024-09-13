import { BsThreeDotsVertical } from "react-icons/bs";
import profileImg from "../assets/alim.png";
import { useEffect, useState } from "react";
import { getDatabase, ref, onValue, set, push, remove } from "firebase/database";
import { useSelector } from "react-redux";
import moment from "moment";

const FriendRequest = () => {
  let data = useSelector((state) => state.userInfo.value);
  let [friendrequest, setFriendrequest]=useState([])
  const db = getDatabase();

  useEffect(() => {
    const friendrequestRef = ref(db, "friendrequest/");
    onValue(friendrequestRef, (snapshot) => {
      let array = [];
      snapshot.forEach((item) => {
        if(data.uid ==item.val().receiverid){

          array.push({...item.val(), key:item.key});
        }
      });
      setFriendrequest(array);
    });
  }, []);

  let handleAcceptFriend=(item)=>{
    set(push(ref(db, 'friendlist/')), {
      ...item,
    }).then=()=>{
      remove(ref(db, 'friendrequest/'+ item.key ))
    }
  }

  return (
    <div className="w-[427px] shadow-2xl rounded-2xl px-5 mt-[43px]">
      <div className="flex justify-between items-center">
        <h2 className="text-[20px] font-semibold text-black">Friend Request</h2>
        <BsThreeDotsVertical />
      </div>
      <div className="w-full h-[347px] rounded-2xl  overflow-scroll">
     {
       friendrequest.map=((item)=>(
        <div className="flex justify-between items-center mt-[17px] border-b border-black/25 pb-6">
        <div className="flex items-center gap-4">
          <img
            className="w-[70px] h-[70px] rounded-full"
            src={profileImg}
            alt=""
          />
          <div>
            <h3 className="text-[18px] font-semibold text-black">
              {item.sendername}
            </h3>
            <p className="text-[14px] font-semibold text-gray-500">
            {moment(item.date, "YYYYMMDD").fromNow()}
            </p>
          </div>
        </div>
        <button onClick={handleAcceptFriend} className="bg-primary px-5 py-2 text-white font-normal text-[18px] rounded-lg">
          {" "}
          Accept
        </button>
      </div>
      ))
    }
    </div>
       
    </div>
  );
};

export default FriendRequest;
