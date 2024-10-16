import { BsThreeDotsVertical } from "react-icons/bs";
import profileImg from "../assets/alim.png";
import { getDatabase, ref, onValue, set, push } from "firebase/database";
import { useEffect, useState } from "react";
import moment from "moment/moment";
import { useSelector } from "react-redux";
import SigninImage from "../assets/login.jpg";
import homeimage from "../assets/Login.webp";

const UserList = () => {
  let data = useSelector((state) => state.userInfo.value);
  const db = getDatabase();
  let [userList, setUserList] = useState([]);
  let [requestList, setrequestList] = useState([]);
  let [friendList, setFriendList] = useState([]);
  let [searchList, setSearchList] = useState([]);

  useEffect(() => {
    const userListRef = ref(db, "users/");
    onValue(userListRef, (snapshot) => {
      let array = [];
      snapshot.forEach((item) => {
        if (data.uid != item.key) {
          array.push({ ...item.val(), uid: item.key });
        }
      });
      setUserList(array);
    });
  }, []);
  useEffect(() => {
    const friendrequestRef = ref(db, "friendrequest/");
    onValue(friendrequestRef, (snapshot) => {
      let array = [];
      snapshot.forEach((item) => {
        array.push(item.val().senderid + item.val().receiverid);
      });
      setrequestList(array);
    });
  }, []);

  useEffect(() => {
    const friendrequestRef = ref(db, "friendlist/");
    onValue(friendrequestRef, (snapshot) => {
      let array = [];
      snapshot.forEach((item) => {
        array.push(item.val().senderid + item.val().receiverid);
      });
      setFriendList(array);
    });
  }, []);

  let handleFriendReq = (item) => {
    set(push(ref(db, "friendrequest/")), {
      senderid: data.uid,
      sendername: data.displayName,
      senderemail: data.email,
      receiverid: item.uid,
      receivername: item.name,
      receiveremail: item.email,
      date: `${new Date().getFullYear()}-${
        new Date().getMonth() + 1
      }-${new Date().getDate()}-${new Date().getHours()}-${new Date().getMinutes()}-${new Date().getSeconds()}`,
    }).then(() => {
      alert("Your request success");
    });
  };
  let handleSearch = (e) => {
    let search = userList.filter((item) => item.name.toLowerCase().includes(e.target.value.toLowerCase()));
    setSearchList(search);
  };

  return (
   <>
   <div className="flex">
   <div className="w-[800px] h-screen rounded-2xl  overflow-scroll">
      <div className="w-[427px] shadow-2xl rounded-2xl px-5 ">
        <div className="flex justify-between items-center">
          <h2 className="text-[20px] font-semibold text-black">User List </h2>
          <BsThreeDotsVertical />
        </div>
      </div>
      <input
        onChange={handleSearch}
        className="w-full h-[30px] rounded-md border-1 border-green-500 outline-orange-500 px-5 bg-gray-200 "
        placeholder="Search..........."
        type="text"
      ></input>
      { searchList.length> 0 ?

searchList.map((item) => (
  <div className="flex justify-between items-center mt-[17px] border-b border-black/25 pb-6">
    <div className="flex items-center gap-4">
      <img
        className="w-[70px] h-[70px] rounded-full "
        src={item ? item.image : SigninImage}
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

    {friendList.includes(data.uid + item.uid) ||
    friendList.includes(item.uid + data.uid) ? (
      <button className="bg-primary px-5 py-2 text-white font-normal text-[18px] rounded-lg">
        {" "}
        F
      </button>
    ) : requestList.includes(data.uid + item.uid) ||
      requestList.includes(item.uid + data.uid) ? (
      <button className="bg-primary px-5 py-2 text-white font-normal text-[18px] rounded-lg">
        {" "}
        -
      </button>
    ) : (
      <button
        onClick={() => handleFriendReq(item)}
        className="bg-primary px-5 py-2 text-white font-normal text-[18px] rounded-lg"
      >
        {" "}
        +
      </button>
    )}
  </div>
))
:

       userList.map((item) => (
        <div className="flex justify-between items-center mt-[17px] border-b border-black/25 pb-6">
          <div className="flex items-center gap-4">
            <img
              className="w-[70px] h-[70px] rounded-full "
              src={item ? item.image : SigninImage}
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

          {friendList.includes(data.uid + item.uid) ||
          friendList.includes(item.uid + data.uid) ? (
            <button className="bg-primary px-5 py-2 text-white font-normal text-[18px] rounded-lg">
              {" "}
              F
            </button>
          ) : requestList.includes(data.uid + item.uid) ||
            requestList.includes(item.uid + data.uid) ? (
            <button className="bg-primary px-5 py-2 text-white font-normal text-[18px] rounded-lg">
              {" "}
              -
            </button>
          ) : (
            <button
              onClick={() => handleFriendReq(item)}
              className="bg-primary px-5 py-2 text-white font-normal text-[18px] rounded-lg"
            >
              {" "}
              +
            </button>
          )}
        </div>
      ))}
    </div>
    <div>
          <img className="w-screen h-screen" src={homeimage} />
        </div>

   </div>
   </>
  );
};

export default UserList;
