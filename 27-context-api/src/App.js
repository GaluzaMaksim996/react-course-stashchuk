import './App.css';
import {useState} from "react";
import UserContext from "./context/UserContext";
import User from "./components/User";
import ChangeUserName from "./components/ChangeUserName";
import InputContext from "./context/InputContext";

function App() {
  const [name, setName] = useState('Maks');
  const {valInput, setValInput} = useState('');
  return (
    <div className="App">
      <UserContext.Provider value={{name, setName}}>
        <User/>
        <InputContext.Provider value={{valInput, setValInput}}>
          <ChangeUserName/>
        </InputContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
