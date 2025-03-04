import {useContext} from "react";
import UserContext from "../context/UserContext";

function UserInfo() {
  const {name} = useContext(UserContext);

  return <h1>
    {name}
  </h1>
}

export default UserInfo;