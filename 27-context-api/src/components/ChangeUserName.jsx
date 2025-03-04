import {useContext} from "react";
import UserContext from "../context/UserContext";
import InputContext from "../context/InputContext";

function ChangeUserName() {
  const {name,setName} = useContext(UserContext);

  return (
    <div>
        <button onClick={(e) => setName(name === 'Maks' ? 'Katya' : 'Maks')}>Change name</button>
    </div>
  )
}

export default ChangeUserName