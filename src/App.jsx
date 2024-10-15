import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Rootlayout from "./layout/Rootlayout";
import Home from "./pages/Home";
import Message from "./pages/Massage";
import Topmenu from "./pages/Topmenu";
import FriendList from "./component/FriendList";
import BlockedUsers from "./component/BlockedUsers";
import GroupList from "./component/GroupList";
import MyGroups from "./component/MyGroups";
import UserList from "./component/UserList";
import FriendRequest from "./component/FriendRequest";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/signin" element={<Signin />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/" element={<Rootlayout />}>
        <Route index element={<Home />}></Route>
        <Route path="/message" element={<Message />}></Route>
        <Route path="/topmenu" element={<Topmenu />}></Route>
        <Route path="/friendrequest" element={<FriendRequest />}></Route>
        <Route path="/blockeduser" element={<BlockedUsers />}></Route>
        <Route path="/friendlist" element={<FriendList />}></Route>
        <Route path="/grouplist" element={<GroupList />}></Route>
        <Route path="/mygroup" element={<MyGroups />}></Route>
        <Route path="/userlist" element={<UserList />}></Route>
      </Route>
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
