import { useSelector } from "react-redux";
import BlockedUsers from "../component/BlockedUsers";
import FriendList from "../component/FriendList";
import FriendRequest from "../component/FriendRequest";
import GroupList from "../component/GroupList";
import MyGroups from "../component/MyGroups";
import UserList from "../component/UserList";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { loginuserinfo } from "../Slices/UserSlice";
import homeimage from "../assets/Login.webp";

const Home = () => {
  const dispatch = useDispatch();
  const auth = getAuth();
  const [verify, setVerify] = useState(false);
  const navigate = useNavigate();

  const data = useSelector((state) => state.userInfo);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(loginuserinfo(user));
        localStorage.setItem("user", JSON.stringify(user));
      } else {
        navigate("/signin");
        setVerify(false);
      }
    });
    return unsubscribe;
  }, [auth, dispatch, navigate]);

  useEffect(() => {
    if (!data) {
      navigate("/signin");
    } else if (!data.value?.emailVerified) {
      console.log("fgfg" + JSON.stringify(data));
      setVerify(false);
    } else {
      setVerify(true);
    }
  }, [data, navigate]);

  return (
    <>
      {verify ? (
        <section className="flex overflow-hidden w-full justify-around bg-red-50">
          <img className="w-full object-cover" src={homeimage}/>
          {/* <div>
            <GroupList />
            <FriendRequest />
          </div>
          <div>
            <FriendList />
            <MyGroups />
          </div>
          <div>
            <UserList />
            <BlockedUsers />
          </div> */}
        </section>
      ) : (
        <div className="w-full h-screen absolute top-0 left-0 bg-red-200/50 flex justify-center items-center">
          <h1 className="text-3xl text-primary">Please verify Your Email</h1>
        </div>
      )}
    </>
  );
};

export default Home;
